import { useNavigate } from 'react-router-dom';
import events from '../assets/events.json';

function EventPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">イベント情報</h1>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold">{event.title}</h2>
            <p>開催日: {event.date.month}/{event.date.day}</p>
            <p>場所: {event.place}</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
              {event.text.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
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