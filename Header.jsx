import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <div className="flex flex-row bg-blue-500 text-white py-2 px-10 items-center justify-between">
        <h5 className="text-2xl font-semibold uppercase">Anjan</h5>
        <div className="flex space-x-4">
          <FaFacebook size={24} />
          <FaTwitter size={24} />
          <FaInstagram size={24} />
        </div>
      </div>
    </>
  );
}
