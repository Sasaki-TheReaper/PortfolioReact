import React from 'react';
import Logo from './logo192.png';

export default function Card() {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center p-4 md:p-8 lg:pl-[200px]">
      <div className='w-full md:w-4/12 mb-4 md:mb-0 md:ml-0 md:mr-4'>
        <img src={Logo} alt='Logo' className='mx-auto border border-gray-700 rounded-md'/>
      </div>
      <div className="w-full md:w-8/12 border border-gray-700  p-4 md:p-8 text-justify min-h-[400px]">
        <h2 className="text-2xl font-semibold mb-2">My Simple Intro</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum vitae quaerat, sunt eius maiores nisi quisquam debitis, similique dolorum explicabo reiciendis qui maxime placeat, quod quia iusto fugiat error? Eos?
        </p>
        <p className='pt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat alias! Consequuntur, officiis praesentium exercitationem soluta cupiditate temporibus quod quia dolore tenetur similique nobis quae est quis voluptatibus enim perspiciatis?
        </p>
      </div>
      
    
    </div>
  );
}
