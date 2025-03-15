import { Search, Calendar, Briefcase, ShoppingBag, ChevronRight, Leaf} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
    const navigatebusinessdashuboard = () => {
        navigate('/businessdashboard')
    }

  return (
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
                onClick={navigatebusinessdashuboard}
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
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                    3/1{i}
                  </div>
                  <div>
                    <h3 className="font-medium">春の収穫体験</h3>
                    <p className="text-sm text-gray-600">滝沢市農業センター</p>
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
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-medium">いちご収穫スタッフ</h3>
                  <p className="text-sm text-gray-600">時給1,200円〜</p>
                  <p className="text-sm text-gray-500">滝沢いちご農園</p>
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
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <img
                    src={`https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&q=80&w=300`}
                    alt="農産物"
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  <h3 className="text-sm font-medium group-hover:text-green-600">
                    採れたて野菜セット
                  </h3>
                  <p className="text-sm text-gray-600">¥2,980</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">地域の農業ニュース</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-4 pb-4 border-b last:border-0">
                <div className="text-sm text-gray-500">2024.3.{i}</div>
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-1">
                    ニュース
                  </span>
                  <h3 className="font-medium hover:text-green-600 cursor-pointer">
                    滝沢市、新規就農支援制度を拡充。年間最大150万円の助成金を創設
                  </h3>
                </div>
              </div>
            ))}
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
  );
}

export default App;