import Image from 'next/image';
import searchIcon from '../public/assets/desktop/icon-search.svg';
import locationIcon from '../public/assets/desktop/icon-location.svg';

const JobFilterForm = () => {
  return (
    <>
      <form className="w-full h-20 bg-secondary-white grid grid-cols-3 items-center">
        <div>
          <label htmlFor="data">
            <Image src={searchIcon} alt="search icon" />{' '}
          </label>
          <input type="text" name="data" id="data" />
        </div>
        <div>
          <label htmlFor="location">
            <Image src={locationIcon} alt="location icon" />{' '}
          </label>
          <input type="text" name="location" id="location" />
        </div>
        <div>
          <input type="checkbox" name="fullTime" id="fullTime"></input>
          <label htmlFor="fulltime">Full Time Only</label>{' '}
          <button
            type="submit"
            className="bg-primary-violet hover:bg-primary-light-violet text-secondary-white w-28 h-12 font-main font-bold rounded-md cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              console.log('submit');
            }}>
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default JobFilterForm;
