import { useRouter } from 'next/router';
import jobList from '../../lib/data.json';
import SingleJobPageBanner from '../../components/SingleJobPageBanner';
import JobDescription from '../../components/JobDescription';
import JobRequirements from '../../components/JobRequirements';
import JobRole from '../../components/JobRole';
import SingleJobFooter from '../../components/SingleJobFooter';

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
    <div className="relative">
      <div className="lg:px-52 xl:px-80 relative mb-20">
        <SingleJobPageBanner
          logo={job?.logo}
          logoBackground={job?.logoBackground}
          company={job?.company}
        />
        <section className="bg-secondary-white dark:bg-primary-very-dark-blue rounded-md lg:p-12">
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
      </div>
      <SingleJobFooter position={job?.position} company={job?.company} />
    </div>
  );
};

export default SingleJobPage;
