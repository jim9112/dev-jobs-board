import Image from 'next/image';

type CompProps = {
  job: {
    company: string;
    location: string;
    position: string;
    postedAt: string;
    contract: string;
    logo: string;
    logoBackground: string;
  };
};

const JobListing = ({ job }: CompProps) => {
  return (
    <div className="pt-6">
      <div className="bg-white relative p-8">
        <div
          style={{ backgroundColor: job.logoBackground }}
          className="w-12 h-12 rounded-2xl absolute -top-6">
          <div className="relative w-full h-full">
            <Image
              objectFit="none"
              layout="fill"
              src={job.logo}
              alt={job.company}
            />
          </div>
        </div>
        <p>
          {job.postedAt} {job.contract}
        </p>
        <h4>{job.position}</h4>
        <p>{job.company}</p>
        <p>{job.location}</p>
      </div>
    </div>
  );
};

export default JobListing;
