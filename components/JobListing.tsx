type CompProps = {
  job: {
    company: string;
  };
};

const JobListing = ({ job }: CompProps) => {
  return (
    <div>
      <h1 className="text-red-500">{job.company}</h1>
    </div>
  );
};

export default JobListing;
