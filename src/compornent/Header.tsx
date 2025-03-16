import { Search, Calendar, Briefcase, ShoppingBag, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
    const navigatebusinessdashuboard = () => {
        navigate('/businessdashboard')
    }
    const Auth = () => {
        navigate('/auth')
    }
    const Home = () => {
        navigate('/home')
    }

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button onClick={Home} className="flex items-center space-x-2">
              <img src="/icon.png" className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-800">農助</span>
            </button>
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
              <button
                onClick={Auth}                
                className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
              >
                ログイン
              </button>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;