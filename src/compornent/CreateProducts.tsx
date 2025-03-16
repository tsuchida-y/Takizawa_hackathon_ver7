import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const CreateProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [pictureURL, setPictureURL] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await addDoc(collection(db, 'product_items'), {
          title,
          stock: Number(stock),
          price: Number(price),
          pictureURL,
        });
        console.log('イベントが作成されました');
        navigate('/businessdashboard'); // イベント一覧ページに戻る
      } catch (error) {
        console.error('エラーが発生しました: ', error);
      }
    };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">新規商品登録</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">商品名</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">在庫数</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">値段</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">参考写真のURL</label>
          <input
            type="text"
            value={pictureURL}
            onChange={(e) => setPictureURL(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          作成
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;