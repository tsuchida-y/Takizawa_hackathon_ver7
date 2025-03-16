import { useNavigate } from 'react-router-dom';
import products from "../assets/products.json";

function Shop() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-2xl font-bold mb-4">ショップ</h1>
            <div className="grid grid-cols-2 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="group cursor-pointer">
                        <img
                            src={product.picture.path}
                            alt={product.picture.alt}
                            className="w-full h-24 object-cover rounded-lg mb-2"
                        />
                        <h3 className="text-sm font-medium group-hover:text-green-600">
                            {product.name}
                        </h3>
                        <p className="text-sm text-gray-600">¥{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;