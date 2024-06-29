import React, { ReactNode } from 'react'
import StreamVideoProvider from '../../../providers/StreamClientProvider'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "YRK Conferencing App",
  description: "Video Conferencing App",
  icons: {
    icon: '/icons/YRK Conferencing (5).png'
  }
};


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
        <StreamVideoProvider>
          {children}
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout