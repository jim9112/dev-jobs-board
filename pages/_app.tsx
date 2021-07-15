import type { AppProps } from 'next/app';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import MasterHeader from '../components/MasterHeader';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="bg-secondary-light-grey min-h-screen font-main">
      <MasterHeader setDarkMode={setDarkMode} />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
