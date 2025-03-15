import { PlusCircle, Search } from 'lucide-react';
import React, { useState } from 'react';

const Events = () => {

      const [activeTab] = useState<'events'>('events');
    return(
      <div className="flex-1 overflow-auto">

        <div className="p-8">
          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="イベントを検索"
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>すべてのイベント</option>
                    <option>開催予定</option>
                    <option>開催済み</option>
                  </select>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <PlusCircle className="h-5 w-5" />
                  <span>新規イベント作成</span>
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">イベント名</th>
                      <th className="text-left p-4">開催日時</th>
                      <th className="text-left p-4">参加者数</th>
                      <th className="text-left p-4">ステータス</th>
                      <th className="text-left p-4">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="p-4">
                          <div className="font-medium">春の収穫体験</div>
                          <div className="text-sm text-gray-500">滝沢市農業センター</div>
                        </td>
                        <td className="p-4">2024/3/1{i} 10:00〜</td>
                        <td className="p-4">15/20名</td>
                        <td className="p-4">
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            受付中
                          </span>
                        </td>
                        <td className="p-4">
                          <button className="text-blue-600 hover:text-blue-800">編集</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};
export default Events;