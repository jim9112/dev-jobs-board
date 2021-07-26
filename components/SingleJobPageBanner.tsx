import Image from 'next/image';

type CompProps = {
  logoBackground?: string;
  logo?: string;
  company?: string;
};

const SingleJobPageBanner = ({ logo, logoBackground, company }: CompProps) => {
  return (
    <section className="flex flex-col md:flex-row bg-secondary-white dark:bg-primary-very-dark-blue rounded-md relative -top-14 items-center">
      <div
        className="relative -top-5 md:top-0 w-12 h-12 p-1 rounded-md md:rounded-none md:w-36 md:h-36 md:p-8"
        style={{ backgroundColor: logoBackground }}>
        <div className="relative w-full h-full">
          {logo && (
            <Image layout="fill" src={logo} alt={company} objectFit="contain" />
          )}
        </div>
      </div>
      <div className="grid grid-flow-row md:grid-flow-col items-center w-full px-10">
        <div>
          <p className="text-2xl text-center md:text-left font-bold text-primary-very-dark-blue dark:text-secondary-white mb-6 md:mb-0">
            {company}
          </p>
        </div>
        <button
          type="button"
          className="bg-secondary-light-grey dark:bg-secondary-dark-grey hover:bg-primary-light-violet dark:hover:bg-secondary-grey text-primary-violet dark:text-secondary-white px-8 h-12 font-main font-bold rounded-md cursor-pointer md:justify-self-end mb-6 md:mb-0"
          onClick={(e) => {
            e.preventDefault();
            console.log('submit');
          }}>
          Company Site
        </button>
      </div>
    </section>
  );
};

export default SingleJobPageBanner;
