import React, { useState } from 'react';
import { Calendar, Briefcase, ShoppingBag, Leaf, LayoutDashboard, Users, Bell, Settings, LogOut, } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../compornent/Dashboard';
import Events from '../compornent/Events';
import Jobs from '../compornent/Jobs';
import Products from '../compornent/Products';

const BusinessDashboard = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate('/home')
    }

      const [activeTab, setActiveTab] = useState<'dashboard' | 'events' | 'jobs' | 'products'>('dashboard');
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
              onClick={back}
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
            {activeTab === 'dashboard' && <Dashboard></Dashboard>}

            {activeTab === 'events' && <Events></Events>}

            {activeTab === 'jobs' && <Jobs></Jobs>}

            {activeTab === 'products' && <Products></Products>}

          </div>
        </div>
    );
  };
  export default BusinessDashboard;