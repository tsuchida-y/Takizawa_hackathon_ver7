import { useNavigate } from 'react-router-dom';
import jobs from '../assets/jobs.json';

function JobPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">農業アルバイト求人情報</h1>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p>給与: {job.salary}</p>
            <p>場所: {job.place}</p>
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

export default JobPage;