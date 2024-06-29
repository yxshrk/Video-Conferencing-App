'use client';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'
import { useGetCallById } from '../../../../../hooks/useGetCallByid';
import Loader from '@/components/Loader';

const Meeting = ({ params: {id} }: { params: { id: number } }) => {

  const { user, isLoaded } = useUser();

  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(id.toLocaleString());

  if (!isLoaded || isCallLoading) {
    return <Loader />
  }

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetUpComplete={setIsSetupComplete}/>
          ): (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>

    </main>
  )
}

export default Meeting