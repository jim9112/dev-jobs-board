import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import MasterHeader from '../components/MasterHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-secondary-light-grey min-h-screen font-main">
      <MasterHeader />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
