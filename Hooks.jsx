import React, { useState, useEffect } from 'react';

export default function Hooks() {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {

            setName("Anjan");
            setLoading(false);
        }, 3000);

    }, []);



    return (
        <>
            <div>
                <h1>Welcome!</h1>
                {loading ? (<p>Loading...</p>) : (<p>{`Hello, ${name}!`}</p>)}
            </div>


        </>
    )
}