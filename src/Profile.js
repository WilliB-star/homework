import React from 'react';

function Avatar({ src, alt }) {
  return (
    <img
      className="avatar"
      src={src}
      alt={alt}
      width={100}
      height={100}
    />
  );
}

export default function Profile({ name, age }) {
  return (
    <div>
      <Avatar src="https://i.imgur.com/1bX5QH6.jpg" alt="Lin Lanying" />
      <h2>{name}</h2>
      <p>Alter: {age}</p>
    </div>
  );
}
