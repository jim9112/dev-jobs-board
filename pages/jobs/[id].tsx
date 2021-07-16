import { useRouter } from 'next/router';
import jobList from '../../lib/data.json';
import SingleJobPageBanner from '../../components/SingleJobPageBanner';
import JobDescription from '../../components/JobDescription';
import JobRequirements from '../../components/JobRequirements';
import JobRole from '../../components/JobRole';

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

  return (
    <div className="lg:px-80 relative">
      <SingleJobPageBanner
        logo={job?.logo}
        logoBackground={job?.logoBackground}
        company={job?.company}
      />
      <section className="bg-secondary-white rounded-md">
        <JobDescription
          contract={job?.contract}
          description={job?.description}
          position={job?.position}
          postedAt={job?.postedAt}
          location={job?.location}
        />
        <JobRequirements requirements={job?.requirements} />
        <JobRole role={job?.role} />
      </section>
      <footer>
        {' '}
        <h1>footer</h1>
      </footer>
    </div>
  );
};

export default SingleJobPage;
