import React, { useState } from 'react';

const Dashboard = () => {

      const [activeTab] = useState<'dashboard' | 'events' | 'jobs' | 'products'>('dashboard');
    return(
        <div className="flex-1 overflow-auto">
            {/* Header */}

            <div className="p-8">
            {activeTab === 'dashboard' && (
            <div className="space-y-6">
                <div className="grid grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-500">今月のイベント数</div>
                    <div className="text-2xl font-bold mt-2">5件</div>
                    <div className="text-sm text-green-600 mt-2">前月比 +2件</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-500">アルバイト応募数</div>
                    <div className="text-2xl font-bold mt-2">12件</div>
                    <div className="text-sm text-green-600 mt-2">前月比 +5件</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-500">商品売上高</div>
                    <div className="text-2xl font-bold mt-2">¥156,000</div>
                    <div className="text-sm text-green-600 mt-2">前月比 +12%</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-500">ページビュー</div>
                    <div className="text-2xl font-bold mt-2">2,451</div>
                    <div className="text-sm text-green-600 mt-2">前月比 +15%</div>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">最近のイベント</h2>
                    <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div>
                            <div className="font-medium">春の収穫体験</div>
                            <div className="text-sm text-gray-500">3/1{i} 開催</div>
                        </div>
                        <div className="text-sm text-gray-500">参加者: 15名</div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">最近の応募</h2>
                    <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div>
                            <div className="font-medium">いちご収穫スタッフ</div>
                            <div className="text-sm text-gray-500">3/1{i} 応募</div>
                        </div>
                        <div className="text-sm text-gray-500">20代後半・男性</div>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
                </div>
                )}
            </div>
        </div>
        
        
    );
};
export default Dashboard;