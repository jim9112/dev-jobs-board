import Image from 'next/image';
import searchIcon from '../public/assets/desktop/icon-search.svg';
import searchIconWhite from '../public/assets/desktop/icon-search-white.svg';
import filterIcon from '../public/assets/mobile/icon-filter.svg';
import locationIcon from '../public/assets/desktop/icon-location.svg';
import useFormInputChange from '../hooks/useFormInputChange';

type CompProps = {
  setFormData: any;
  toggleModal: () => void;
  formData: {
    data: string;
    location: string;
    fullTimeOnly: boolean;
  };
};

const JobFilterForm = ({ setFormData, toggleModal, formData }: CompProps) => {
  const { inputData, handleChange } = useFormInputChange(formData);

  return (
    <div className="relative">
      <form className="w-full h-20 p-4 md:p-0 bg-secondary-white dark:bg-primary-very-dark-blue flex justify-center md:grid md:grid-cols-3 items-center rounded-md relative left-0 -top-7 md:divide-x-2 divide-secondary-light-grey">
        <div className="h-full w-full flex items-center md:px-4 lg:px-8">
          <label htmlFor="data">
            <Image src={searchIcon} alt="search icon" />{' '}
          </label>
          <input
            className="w-full dark:bg-primary-very-dark-blue border-0 focus:ring-0"
            type="text"
            name="data"
            id="data"
            value={inputData.data}
            placeholder="Filter by title, companies, expertise…"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="hidden h-full md:flex items-center px-8">
          <label htmlFor="location">
            <Image src={locationIcon} alt="location icon" />{' '}
          </label>
          <input
            className="w-full dark:bg-primary-very-dark-blue border-0 focus:ring-0"
            type="text"
            name="location"
            id="location"
            value={inputData.location}
            placeholder="Filter by location…"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div
          className="md:hidden mr-2 cursor-pointer"
          onClick={() => toggleModal()}>
          <Image src={filterIcon} alt="filter icon" />
        </div>
        <div className="h-full grid grid-flow-col items-center md:px-4 lg:px-8 ">
          <input
            className="hidden md:inline h-6 w-6 text-primary-violet focus:ring-0 bg-secondary-grey border-0 rounded-sm"
            type="checkbox"
            name="fullTime"
            id="fullTimeOnly"
            checked={inputData.fullTimeOnly}
            onChange={(e) => handleChange(e)}></input>
          <label
            className="hidden md:inline dark:text-secondary-white text-base"
            htmlFor="fulltimeOnly">
            Full Time
          </label>{' '}
          <button
            type="submit"
            className="bg-primary-violet hover:bg-primary-light-violet text-secondary-white w-12 h-12 md:w-20 md:h-12 lg:w-28 lg:h-12 font-main font-bold rounded-md cursor-pointer justify-self-end"
            onClick={(e) => {
              e.preventDefault();
              setFormData({ ...inputData });
            }}>
            <div className="md:hidden">
              <Image src={searchIconWhite} alt="search icon" />
            </div>
            <span className="hidden md:inline">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobFilterForm;
