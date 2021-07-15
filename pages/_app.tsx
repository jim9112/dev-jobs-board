import type { AppProps } from 'next/app';
import { useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';
import MasterHeader from '../components/MasterHeader';

function MyApp({ Component, pageProps }: AppProps) {
  const outerDiv = useRef<null | HTMLDivElement>(null);
  return (
    <div ref={outerDiv}>
      <div className="bg-secondary-light-grey dark:bg-primary-midnight min-h-screen font-main">
        <MasterHeader outerDiv={outerDiv} />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
