import { useRouter } from 'next/router';
import jobList from '../../lib/data.json';
const SingleJobPage = () => {
  const router: any = useRouter();
  const jobId = parseInt(router.query?.id);
  const job = jobList.find((el) => el.id === jobId);
  console.log(job);

  return (
    <div>
      <section></section>
      <h1>Single Job Page</h1>
    </div>
  );
};

export default SingleJobPage;
