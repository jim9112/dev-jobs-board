import Image from 'next/image';
import searchIcon from '../public/assets/desktop/icon-search.svg';
import locationIcon from '../public/assets/desktop/icon-location.svg';

const JobFilterForm = () => {
  return (
    <div className="relative">
      <form className="w-full h-20 bg-secondary-white dark:bg-primary-very-dark-blue grid grid-cols-3 items-center rounded-md relative left-0 -top-7 divide-x-2 divide-secondary-light-grey">
        <div className="h-full flex items-center px-8">
          <label htmlFor="data">
            <Image src={searchIcon} alt="search icon" />{' '}
          </label>
          <input
            className="w-full dark:bg-primary-very-dark-blue"
            type="text"
            name="data"
            id="data"
            placeholder="Filter by title, companies, expertise…"
          />
        </div>
        <div className="h-full flex items-center px-8">
          <label htmlFor="location">
            <Image src={locationIcon} alt="location icon" />{' '}
          </label>
          <input
            className="w-full dark:bg-primary-very-dark-blue"
            type="text"
            name="location"
            id="location"
            placeholder="Filter by location…"
          />
        </div>
        <div className="h-full grid grid-flow-col items-center px-8 ">
          <input
            className="h-6 w-6 checked:bg-primary-violet dark:bg-primary-very-dark-blue"
            type="checkbox"
            name="fullTime"
            id="fullTime"></input>
          <label className="dark:text-secondary-white" htmlFor="fulltime">
            Full Time Only
          </label>{' '}
          <button
            type="submit"
            className="bg-primary-violet hover:bg-primary-light-violet text-secondary-white w-28 h-12 font-main font-bold rounded-md cursor-pointer justify-self-end"
            onClick={(e) => {
              e.preventDefault();
              console.log('submit');
            }}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobFilterForm;
