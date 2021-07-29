import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';

export default function List({ payload }) {
  const data = new Promise((resolve, reject) => {
    setTimeout(payload, 3000);
    resolve(payload);
    reject('Error');
  });
  return (
    <div className="app-container">
      <h1>StarWars</h1>
      {!payload ? (
        <p>loading...</p>
      ) : (
        <>
          {payload.map((user, index) => {
            return <ListItem user={user} key={index} />;
          })}
        </>
      )}
    </div>
  );
}
