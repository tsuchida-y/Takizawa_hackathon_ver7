import { collection, DocumentData, getDocs, Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';

interface Event {
  date: Date;
  people: number;
  title: string;
  state: string;
  place: string;
  text: string;
}

function EventPage() {
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
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">イベント情報</h1>
      <div className="space-y-4">
      {events.map((event, index) => (
                    <tr key={index} className="border rounded-lg p-4 shadow-md">
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
      </div>
      <button 
        onClick={() => navigate('/home')} 
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        ホームに戻る
      </button>
    </div>
  );
}

export default EventPage;