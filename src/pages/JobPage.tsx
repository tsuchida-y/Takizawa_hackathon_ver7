import { useNavigate } from 'react-router-dom';
import jobs from '../assets/jobs.json';
import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function JobPage() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [activeTab] = useState<'jobs'>('jobs');

  interface Job {

    people: number;
    title: string;
    state: string;
    salary: string;
  }

  const handleCreateJob = () => {
    navigate('/create-job');
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
      const querySnapshot = await getDocs(collection(db, 'jobs_items'));
      const jobsData = querySnapshot.docs.map(doc => {
        const data = doc.data() as DocumentData;
        console.log(data); // デバッグ用にデータをコンソールに出力
        return {
            people: data.people,
            title: data.title,
            state: data.state,
            salary: data.salary,
        } as Job;
      });
      console.log(jobsData); // デバッグ用に変換後のデータをコンソールに出力
      setJobs(jobsData);
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
    };

    fetchEvents();
  }, []);
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">農業アルバイト求人情報</h1>
      <div className="space-y-4">
        {jobs.map((job, index) => (
                    <tr key={index} className="border rounded-lg p-4 shadow-md">
                      <td className="p-4">
                        <div className="font-medium">{job.title}</div>
                      </td>
                      <td className="p-4">時給{job.salary}円</td>
                      <td className="p-4">{job.people}</td>
                      <td className="p-4">
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {job.state}
                        </span>
                      </td>
                      <td className="p-4">
                        <button className="text-blue-600 hover:text-blue-800">編集</button>
                      </td>
                    </tr>
          ))}
        {/* {jobs.map((job, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p>給与: {job.salary}</p>
            <p>場所: {job.place}</p>
          </div>
        ))} */}
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