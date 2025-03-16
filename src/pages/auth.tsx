import React from 'react';

const Auth = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
        <h2 className="flex absolute font-bold text-2xl top-[20%]">ログイン</h2>
        <div className="flex absolute top-[40%] h-12 w-2/3 lg:w-1/3">
            <input type="email" placeholder="メールアドレス" className="bg-white rounded-xl shadow-sm border w-full pl-2"></input>
        </div>
        <div className="flex absolute top-[50%] h-12 w-2/3 lg:w-1/3">
            <input type="password" placeholder="パスワード" className="bg-white rounded-xl shadow-sm border w-full pl-2"></input>
        </div>
    </div>
  );
};

export default Auth;