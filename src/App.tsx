import React, { useState } from 'react';
import { Search, Calendar, Briefcase, ShoppingBag, ChevronRight, Leaf, LayoutDashboard, Users, Bell, Settings, LogOut, PlusCircle } from 'lucide-react';
import events from "./assets/events.json";
import products from "./assets/products.json";
import jobs from "./assets/jobs.json"

function App() {
  const [view, setView] = useState<'public' | 'business'>('public');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'events' | 'jobs' | 'products'>('dashboard');

  const BusinessDashboard = () => {
    return (
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold text-gray-800">農コミュ</span>
            </div>
          </div>
          <nav className="p-4 space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg ${
                activeTab === 'dashboard' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>ダッシュボード</span>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg ${
                activeTab === 'events' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Calendar className="h-5 w-5" />
              <span>イベント管理</span>
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg ${
                activeTab === 'jobs' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Briefcase className="h-5 w-5" />
              <span>求人管理</span>
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg ${
                activeTab === 'products' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              <span>商品管理</span>
            </button>
          </nav>
          <div className="absolute bottom-0 w-64 p-4 border-t">
            <button
              onClick={() => setView('public')}
              className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              <LogOut className="h-5 w-5" />
              <span>公開画面に戻る</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-8 py-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                {activeTab === 'dashboard' && 'ダッシュボード'}
                {activeTab === 'events' && 'イベント管理'}
                {activeTab === 'jobs' && '求人管理'}
                {activeTab === 'products' && '商品管理'}
              </h1>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Settings className="h-6 w-6" />
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">滝沢農業株式会社</div>
                    <div className="text-sm text-gray-500">管理者</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
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

            {activeTab === 'jobs' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="求人を検索"
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>すべての求人</option>
                      <option>募集中</option>
                      <option>募集終了</option>
                    </select>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <PlusCircle className="h-5 w-5" />
                    <span>新規求人作成</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">求人タイトル</th>
                        <th className="text-left p-4">給与</th>
                        <th className="text-left p-4">応募数</th>
                        <th className="text-left p-4">ステータス</th>
                        <th className="text-left p-4">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="p-4">
                            <div className="font-medium">いちご収穫スタッフ</div>
                            <div className="text-sm text-gray-500">短期アルバイト</div>
                          </td>
                          <td className="p-4">時給1,200円〜</td>
                          <td className="p-4">3件</td>
                          <td className="p-4">
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                              募集中
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
      </div>
    );
  };

  return view === 'public' ? (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-800">農コミュ</span>
            </div>
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="キーワード、場所、作物で検索"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setView('business')}
                className="text-gray-600 hover:text-green-600"
              >
                法人の方はこちら
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                新規登録
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1920"
            alt="農園の風景"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent flex items-center">
            <div className="px-8 text-white">
              <h1 className="text-4xl font-bold mb-4">
                地域の農業を<br />つなぐプラットフォーム
              </h1>
              <p className="text-lg mb-6">
                イベント、アルバイト、直売所情報を<br />ワンストップで提供
              </p>
              <button className="px-6 py-3 bg-white text-green-800 rounded-full font-semibold hover:bg-green-50">
                詳しく見る
              </button>
            </div>
          </div>
        </div>

        {/* Category Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Events */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-semibold">イベント</h2>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {events.slice(0, 3).map((event, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                    {event.date.month}/{event.date.day}
                  </div>
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Jobs */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-semibold">アルバイト</h2>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {jobs.slice(0,3).map((job, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.salary}</p>
                  <p className="text-sm text-gray-500">{job.place}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-semibold">ショップ</h2>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {products.slice(0, 3).map((product, index) => (
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold text-gray-800">農コミュ</span>
              </div>
              <p className="text-sm text-gray-600">
                地域の農業をつなぎ、活性化するプラットフォーム
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">サービス</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>イベント</li>
                <li>アルバイト</li>
                <li>ショップ</li>
                <li>法人向けサービス</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">会社情報</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>運営会社</li>
                <li>プライバシーポリシー</li>
                <li>利用規約</li>
                <li>お問い合わせ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">フォローする</h3>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
            © 2024 農コミュ All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  ) : (
    <BusinessDashboard />
  );
}

export default App;