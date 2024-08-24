import React from 'react'

const ProfileCard = ({ name, address, contact }) => {
  return (
    <>
    <div className="bg-white shadow-md p-2 max-w-sm mx-auto mt-2">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <p className="text-gray-700 mb-2"><strong>Address:</strong> {address}</p>
      <p className="text-gray-700"><strong>Contact:</strong> {contact}</p>
    </div>
    </>
  );
};

export default ProfileCard;