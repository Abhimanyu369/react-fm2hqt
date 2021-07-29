import React from 'react';
import { Link } from 'react-router-dom';

export default function ListItem({ user }) {
  return (
    <Link className="list-btn" to={`/detail/${user.id}`}>
      <h2>{user.name}</h2>
    </Link>
  );
}
