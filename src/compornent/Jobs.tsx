import { PlusCircle, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Job {

    people: number;
    title: string;
    state: string;
    salary: string;
  }


const Jobs = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [activeTab] = useState<'jobs'>('jobs');
    const navigate = useNavigate();

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

    return(
        <div className="flex-1 overflow-auto">

        <div className="p-8">
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
                    <button 
                    onClick={handleCreateJob}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
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
                    {jobs.map((job, index) => (
                    <tr key={index} className="border-b last:border-0">
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
                    </tbody>
                    </table>
                </div>
                </div>
            )}
        </div>
        </div>
    );
}
export default Jobs;