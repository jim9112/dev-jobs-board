import Image from 'next/image';

type CompProps = {
  logoBackground?: string;
  logo?: string;
  company?: string;
};

const SingleJobPageBanner = ({ logo, logoBackground, company }: CompProps) => {
  return (
    <section className="flex bg-secondary-white rounded-md relative -top-14">
      <div
        className="w-36 h-36 p-8"
        style={{ backgroundColor: logoBackground }}>
        <div className="relative w-full h-full">
          {logo && (
            <Image layout="fill" src={logo} alt={company} objectFit="contain" />
          )}
        </div>
      </div>
      <div className="grid grid-flow-col items-center w-full px-10">
        <div>
          <p className="text-2xl font-bold text-primary-very-dark-blue">
            {company}
          </p>
        </div>
        <button
          type="button"
          className="bg-secondary-light-grey hover:bg-primary-light-violet text-primary-violet px-8 h-12 font-main font-bold rounded-md cursor-pointer justify-self-end"
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
