import React, { useEffect, useState } from 'react';
import { todoApi } from '../api/todo';

const Home = () => {
  const [todo, setTodo] = useState([]);
  console.log('todo: ', todo);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    const getMyTodos = async (page: any, limit = pageSize) => {
      try {
        const res = await todoApi.mytodos(1, 10);
        setTodo(res.data);
      } catch (err) {
        console.log('err: ', err);
      }
    };
    getMyTodos(page);
  }, [page]);
  return (
    <div className="flex flex-col justify-center">
      <table className=" table-fixed">
        <caption className="caption-top text-yellow-400 font-bold text-xl">
          Table
        </caption>
        <thead>
          <tr>
            <th>Name Todo</th>
            <th>Description</th>
            <th>Point</th>
            <th>IsDone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
