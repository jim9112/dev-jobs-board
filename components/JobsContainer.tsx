import JobListing from '../components/JobListing';

type CompProps = {
  jobs: any;
};

const JobsContainer = ({ jobs }: CompProps) => {
  console.log(jobs.length);
  type JobType = {
    company: string;
    location: string;
    position: string;
    postedAt: string;
    contract: string;
    logo: string;
    logoBackground: string;
    id: number;
  };

  return (
    <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 ">
      {jobs.length > 0 &&
        jobs.map((job: JobType) => <JobListing key={job.id} job={job} />)}
    </div>
  );
};

export default JobsContainer;
