'use client';

import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'
import { useGetCalls } from '../../../../hooks/useGetCalls';
import { Call } from '@stream-io/video-react-sdk';

const Home = () => {
  const now = new Date();
  
  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Singapore'
  });
  
  const date = (new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeZone: 'Asia/Singapore'
  })).format(now);

  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
        {upcomingCalls && upcomingCalls.length > 0 && upcomingCalls[0] ? (
          <h2 className='glassmorphism flex max-w-[400px] rounded py-3 px-2 text-center justify-center text-base font-normal'>
            Upcoming Meeting: {upcomingCalls[0]?.state?.startsAt.toLocaleString()}
          </h2>
        ) : (
          <h2 className='glassmorphism max-w-[270px] rounded py-3 text-center text-base font-normal'>
            No Upcoming Meetings
          </h2>

        )}
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
              {time}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
          </div>

        </div>

      </div>

      <MeetingTypeList />

    </section>
  )
}

export default Home