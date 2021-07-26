type CompProps = {
  postedAt: string | undefined;
  contract: string | undefined;
  position: string | undefined;
  description: string | undefined;
  location: string | undefined;
};

const JobDescription = ({
  postedAt,
  position,
  contract,
  description,
  location,
}: CompProps) => {
  return (
    <div className="mb-36 lg:mb-16 md:mb-10">
      <div className="grid md:grid-cols-2 mb-10 items-center">
        <div className="mb-12 md:mb-0">
          <p className="text-base text-secondary-dark-grey">
            {postedAt} • {contract}
          </p>
          <p className="font-bold text-2xl text-primary-very-dark-blue dark:text-secondary-white">
            {position}
          </p>
          <p className="text-primary-violet font-bold text-sm">{location}</p>
        </div>
        <button
          type="button"
          className="w-full md:w-auto bg-primary-violet hover:bg-primary-light-violet text-secondary-white px-8 h-12 font-main font-bold rounded-md cursor-pointer justify-self-end"
          onClick={(e) => {
            e.preventDefault();
            console.log('submit');
          }}>
          Apply Now
        </button>
      </div>
      <div>
        <p className="text-base text-secondary-dark-grey">{description}</p>
      </div>
    </div>
  );
};

export default JobDescription;
