import React from 'react';
import { useParams } from 'react-router-dom';
export default function Userdetail({ payload }) {
  let { id } = useParams();
  const user = payload.find(user => user.id === id);
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Height: {user.height}</p>
      <p>Mass: {user.mass}</p>
      <p>Home World: {user.homeWorld}</p>
    </div>
  );
}
