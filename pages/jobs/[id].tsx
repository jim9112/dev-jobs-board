import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import jobList from '../../lib/data.json';
import SingleJobPageBanner from '../../components/SingleJobPageBanner';

type Job =
  | {
      logo: string;
      logoBackground: string;
      company: string;
      postedAt: string;
      contract: string;
      position: string;
      location: string;
      description: string;
      website: string;
      apply: string;
      requirements: {
        content: string;
        items: string[];
      };
      role: {
        content: string;
        items: string[];
      };
    }
  | undefined;

const SingleJobPage = () => {
  const router: any = useRouter();
  const jobId = parseInt(router.query?.id);
  const job: Job = jobList.find((el) => el.id === jobId);
  console.log(job);

  return (
    <div className="lg:px-80 relative">
      <SingleJobPageBanner
        logo={job?.logo}
        logoBackground={job?.logoBackground}
        company={job?.company}
      />
      <section className="bg-secondary-white rounded-md">
        <div>
          <div>
            <p>
              {job?.postedAt} • {job?.contract}
            </p>
            <p>{job?.position}</p>
            <p>{job?.location}</p>
          </div>
          <button
            type="button"
            className="bg-primary-violet hover:bg-primary-light-violet text-secondary-white w-28 h-12 font-main font-bold rounded-md cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              console.log('submit');
            }}>
            Apply Now
          </button>
        </div>
        <div>
          <p>{job?.description}</p>
        </div>
        <div>
          <h1>Requirements</h1>
          <p>{job?.requirements.content}</p>
          <ul className="list-disc list-inside">
            {job?.requirements.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1>What you will do</h1>
          <p>{job?.role.content}</p>
          <ol className="list-decimal list-inside">
            {job?.role.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>
      </section>
      <footer>
        {' '}
        <h1>footer</h1>
      </footer>
    </div>
  );
};

export default SingleJobPage;
