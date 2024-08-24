import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import ProfileCard from './ProfileCard';
import Hooks from './Hooks';
import Fetchs from './Fetchs';
function App() {
    return (
        <>
            <Hooks />
            <Header />
            
            <Fetchs />

            <div className='min-h-screen'>
                
                <Card />
                <div>   <button onClick={() => alert("I am Anjan")} className='border border-blue-500 border-double px-4 py-2 mx-[200px]  bg-rose-200 animate-pulse '> Name
                </button> </div>
                <div>
                    <p className='py-2 mx-[200px]'>
                        Text:
                    </p>
                    <input type='text' onBlur={ () => alert("Out from textfield")} className='border border-blue-500 border-double px-4 py-2 mx-[200px] bg-rose-200' placeholder='Enter text here' />
                </div>


                <div className='pl-20'>
                    <h1 className='m-auto text-4xl'>My Friends</h1>
                </div>
                <div className="flex flex-wrap">
                    <div className='w-full md:w-6/12 lg:w-4/12'>
                        <ProfileCard name="Anjan Khadka" address="Urlabari" contact="anjank@gmail.com" />
                    </div>
                    <div className='w-full md:w-6/12 lg:w-4/12'>
                        <ProfileCard name="Adka" address="Urlabari" contact="anjank@gmail.com" />
                    </div>
                    <div className='w-full md:w-6/12 lg:w-4/12'>
                        <ProfileCard name="Ad" address="Urlabari" contact="anjank@gmail.com" />
                    </div>
                </div>
            </div>

            <div className='mt-11 bg-red-300'>
                <Footer />
            </div>
        </>
    );
}

export default App;
