import React from 'react';

const Sensedge = () => {
  return (
    <article className='py-8 px-4 lg:px-32 gap-4 flex flex-col lg:flex-row min-h-screen pt-20 overflow-hidden bg-slate-50'>
      <div className='lg:flex-1 w-full'>
        <img
          src={`${process.env.PUBLIC_URL}/img/Sensedge.jpg`}
          alt='Sensedge Mini'
          className='w-full md:max-w-2xl md:mx-auto'
        />
      </div>
      <div className='flex-1 m-4 p-4 lg:pb-96 font-libre text-slate-950 w-full'>
        <h1 className='text-4xl pb-2 lg:text-3xl font-shippori font-bold'>
          SENSEDGE MINI
        </h1>
        <h1 className='text-2xl pb-2 lg:text-4xl font-shippori'>
          It captures indoor conditions, delivering reliable air quality data.
        </h1>

        <div className='w-full font-shippori text-xl'>
          <h3 className='pt-4 font-bold'>INFO</h3>
          <p className='list-disc list-inside textde'>
            Temp: 32°C°F
            <br />
            Humidity: 94%
            <br />
            Pressure: 30 in.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Sensedge;
