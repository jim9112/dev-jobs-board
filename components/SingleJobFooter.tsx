type CompProps = {
  position: string | undefined;
  company: string | undefined;
};

const SingleJobFooter = ({ position, company }: CompProps) => {
  return (
    <footer className="relative bottom-0 w-full bg-secondary-white h-24 grid grid-flow-col items-center lg:px-52 xl:px-80 rounded-md">
      <div>
        <h1 className="font-bold text-xl text-primary-very-dark-blue">
          {position}
        </h1>
        <p className="text-secondary-dark-grey text-base">{company}</p>
      </div>
      <button
        type="button"
        className="bg-primary-violet hover:bg-primary-light-violet text-secondary-white px-8 h-12 font-main font-bold rounded-md cursor-pointer justify-self-end"
        onClick={(e) => {
          e.preventDefault();
          console.log('submit');
        }}>
        Apply Now
      </button>
    </footer>
  );
};

export default SingleJobFooter;
