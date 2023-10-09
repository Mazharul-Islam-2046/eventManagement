import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-4/5 mb-20 border-2 border-gray-300 mx-auto text-center p-10 bg-yellow-50 '>
            <h2 className='text-3xl font-bold mb-3'>Newsletter</h2>
            <p className='text-lg mb-2'>Keep up with our new offers and services</p>
            <form>
                <input className='bg-gray-400 py-1' />
                <input className='py-1 px-3 bg-green-900 text-white' type="submit" value="Subscribe" />
            </form>
        </div>
    );
};

export default Newsletter;