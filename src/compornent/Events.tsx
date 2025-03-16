import { PlusCircle, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, DocumentData, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Event {
  date: Date;
  people: number;
  title: string;
  state: string;
  place: string;
  text: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [activeTab] = useState<'events'>('events');
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate('/create-event');
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
      const querySnapshot = await getDocs(collection(db, 'event_items'));
      const eventsData = querySnapshot.docs.map(doc => {
        const data = doc.data() as DocumentData;
        console.log(data); // デバッグ用にデータをコンソールに出力
        return {
          date: (data.date as Timestamp).toDate(), // TimestampをDateに変換
          people: data.people,
          title: data.title,
          state: data.state,
          place: data.place,
          text: data.text
        } as Event;
      });
      console.log(eventsData); // デバッグ用に変換後のデータをコンソールに出力
      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
    };

    fetchEvents();
  }, []);

  return (
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
              <button
                onClick={handleCreateEvent}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
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
                    <th className="text-left p-4">開催場所</th>
                    <th className="text-left p-4">参加者数</th>
                    <th className="text-left p-4">ステータス</th>
                    <th className="text-left p-4">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="p-4">
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-gray-500">{event.text}</div>
                      </td>
                      <td className="p-4">
                      {event.date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace('/', '年').replace('/', '月').concat('日')}
                      </td>
                      <td className="p-4">{event.place}</td>
                      <td className="p-4">{event.people}</td>
                      <td className="p-4">
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {event.state}
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