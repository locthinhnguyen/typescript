import React, { useCallback, useState } from 'react';
import { userApi } from '../api/user';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async () => {
    try {
      const res = await userApi.login({
        email: email,
        password: password,
      });
      if (res.data) {
        localStorage.setItem('accessToken', res.data.accessToken);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }, [email, password]);

  return (
    <div className="pt-5 ">
      <form className="flex flex-col gap-3 border rounded w-[500px] items-center p-5">
        <h2 className="text-2xl font-bold">Login</h2>
        <div className="flex items-center gap-2">
          <label>Email</label>
          <input
            placeholder="email"
            className="p-1 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <label>Password</label>
          <input
            placeholder="password"
            className="p-1 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="border rounded-full w-[30%] bg-red-500 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
