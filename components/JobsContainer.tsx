import { useState } from 'react';
import JobListing from '../components/JobListing';

type CompProps = {
  jobs: any;
  formData: {
    location: string;
    data: string;
    fullTimeOnly: boolean;
  };
};

const JobsContainer = ({ jobs, formData }: CompProps) => {
  const [totalJobs, setTotalJobs] = useState(12);

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
    <div className="pb-14">
      <div
        style={{ gridAutoRows: '1fr' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3 lg:gap-7 mb-8">
        {jobs.length > 0 &&
          jobs.map((job: JobType, index: number) => {
            // filter based on two text input fields
            if (
              (job.location.toLowerCase().includes(formData.location) &&
                job.company.toLowerCase().includes(formData.data)) ||
              (job.location.toLowerCase().includes(formData.location) &&
                job.position.toLowerCase().includes(formData.data))
            ) {
              // check if full time only is selected
              if (formData.fullTimeOnly) {
                if (job.contract === 'Full Time') {
                  // return only full time jobs
                  return (
                    index < totalJobs && <JobListing key={job.id} job={job} />
                  );
                }
              } else {
                // return all jobs
                return (
                  index < totalJobs && <JobListing key={job.id} job={job} />
                );
              }
            }
          })}
      </div>
      <div className="w-full grid justify-center">
        {totalJobs < jobs.length && (
          <button
            className="bg-primary-violet hover:bg-primary-light-violet text-secondary-white w-36 h-12 font-main font-bold rounded-md cursor-pointer"
            onClick={() => setTotalJobs(totalJobs + 12)}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default JobsContainer;
