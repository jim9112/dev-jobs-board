import JobListing from '../components/JobListing';

type CompProps = {
  jobs: any;
};

const JobsContainer = ({ jobs }: CompProps) => {
  console.log(jobs.length);
  type JobType = {
    id: number;
    company: string;
  };

  return (
    <div>
      {jobs.length > 0 &&
        jobs.map((job: JobType) => <JobListing key={job.id} job={job} />)}
    </div>
  );
};

export default JobsContainer;
