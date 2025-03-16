import { useNavigate } from 'react-router-dom';
import products from "../assets/products.json";
import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Product {
    stock: number;
    title: string;
    price: number;
    pictureURL: string;
  }

function Shop() {
      const [products, setProducts] = useState<Product[]>([]);
  const [activeTab] = useState<'products'>('products');
  const navigate = useNavigate();

  const handleCreateJob = () => {
    navigate('/create-product');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'product_items'));
        const productsData = querySnapshot.docs.map(doc => {
          const data = doc.data() as DocumentData;
          console.log(data); // デバッグ用にデータをコンソールに出力
          return {
            stock: data.stock,
            title: data.title,
            price: data.price,
            pictureURL: data.pictureURL,
          } as Product;
        });
        console.log(productsData); // デバッグ用に変換後のデータをコンソールに出力
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-2xl font-bold mb-4">ショップ</h1>
            <div className="flex flex-wrap gap-4">
            {products.map((product, index) => (
                <div key={index} className="bg-white  rounded-xl shadow-sm overflow-hidden w-48 h-64">
                  <img
                    src={product.pictureURL}
                    alt="商品画像"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium">{product.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">在庫: {product.stock}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">¥{product.price}</span>
                      <button className="text-blue-600 hover:text-blue-800">編集</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate('/home')} 
              className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              ホームに戻る
            </button>
        </div>
    );
}

export default Shop;