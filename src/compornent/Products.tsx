import { PlusCircle, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Product {
  stock: number;
  title: string;
  price: number;
  pictureURL: string;
}

const Products = () => {
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
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="商品を検索"
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>すべての商品</option>
                  <option>販売中</option>
                  <option>売り切れ</option>
                </select>
              </div>
              <button
                onClick={handleCreateJob}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <PlusCircle className="h-5 w-5" />
                <span>新規商品登録</span>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;