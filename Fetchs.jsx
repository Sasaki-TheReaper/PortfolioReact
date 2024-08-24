import React, { useState, useEffect } from 'react';

const Fetchs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data.slice(0,3));
        setLoading(false);
      });
  }, []);
    

  if (loading) return <p>Loading...</p>;

  return (
    <div className='m-auto'>
      <h2>Posts from JSONPlaceholder API:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetchs;
