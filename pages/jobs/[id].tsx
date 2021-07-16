import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import jobList from '../../lib/data.json';

type Job =
  | {
      logo: string;
      logoBackground: string;
      name: string;
      company: string;
      postedAt: string;
      contract: string;
      position: string;
      location: string;
      description: string;
      requirements: {
        content: string;
        items: [item: string];
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
      <section className="flex bg-secondary-white rounded-md relative -top-14">
        <div
          className="w-36 h-36 p-8"
          style={{ backgroundColor: job?.logoBackground }}>
          <div className="relative w-full h-full">
            {job?.logo && (
              <Image
                layout="fill"
                src={job?.logo}
                alt={job.name}
                objectFit="inherit"
              />
            )}
          </div>
        </div>
        <div>
          <p>{job?.company}</p>
        </div>
        <button
          type="button"
          className="bg-secondary-light-grey hover:bg-primary-light-violet text-primary-violet w-28 h-12 font-main font-bold rounded-md cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            console.log('submit');
          }}>
          Search
        </button>
      </section>
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
      </section>
    </div>
  );
};

export default SingleJobPage;
