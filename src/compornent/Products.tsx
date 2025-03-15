import { PlusCircle, Search } from 'lucide-react';
import React, { useState } from 'react';

const Products = () => {

      const [activeTab] = useState<'products'>('products');
    return(
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
                          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            <PlusCircle className="h-5 w-5" />
                            <span>新規商品登録</span>
                          </button>
                        </div>
        
                        <div className="grid grid-cols-4 gap-6">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&q=80&w=300"
                                alt="商品画像"
                                className="w-full h-40 object-cover"
                              />
                              <div className="p-4">
                                <h3 className="font-medium">採れたて野菜セット</h3>
                                <p className="text-sm text-gray-500 mb-2">在庫: 20セット</p>
                                <div className="flex items-center justify-between">
                                  <span className="font-medium">¥2,980</span>
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