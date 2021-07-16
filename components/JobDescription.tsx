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
    <div>
      <div>
        <p>
          {postedAt} • {contract}
        </p>
        <p>{position}</p>
        <p>{location}</p>
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
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JobDescription;
