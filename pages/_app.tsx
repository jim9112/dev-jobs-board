import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import MasterHeader from '../components/MasterHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <MasterHeader />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
