import router, { useRouter } from 'next/router';
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
    id: number;
  };
};

const JobListing = ({ job }: CompProps) => {
  return (
    <div className="pt-6" onClick={() => router.push(`/jobs/${job.id}`)}>
      <div className="bg-secondary-white relative p-8 rounded-md">
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
        <p className="text-secondary-dark-grey text-base">
          {job.postedAt} {`• ${job.contract}`}
        </p>
        <h4 className="font-bold text-primary-very-dark-blue text-xl">
          {job.position}
        </h4>
        <p className="text-secondary-dark-grey text-base">{job.company}</p>
        <p className="text-sm text-primary-violet">{job.location}</p>
      </div>
    </div>
  );
};

export default JobListing;
