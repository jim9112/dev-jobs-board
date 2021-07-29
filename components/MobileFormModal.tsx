import Image from 'next/image';
import locationIcon from '../public/assets/desktop/icon-location.svg';

type CompProps = {
  toggleModal: () => void;
  setFormData: any;
};

const MobileFormModal = ({ toggleModal, setFormData }: CompProps) => {
  return (
    <div
      id="modalOuter"
      className="grid px-6 place-items-center fixed top-0 w-full min-h-screen z-10 bg-primary-midnight bg-opacity-60"
      onClick={(e) => {
        const target = e.target as HTMLDivElement;
        if (target.id === 'modalOuter') {
          toggleModal();
        }
      }}>
      <div className="bg-secondary-white w-full py-6 rounded-md">
        <div className=" h-full flex items-center px-6">
          <label htmlFor="location">
            <Image src={locationIcon} alt="location icon" />{' '}
          </label>
          <input
            className="w-full dark:bg-primary-very-dark-blue border-0 focus:ring-0"
            type="text"
            name="location"
            id="location"
            placeholder="Filter by location…"
          />
        </div>
        <div className="h-full grid grid-flow-row px-6 pt-6 gap-6 ">
          <div className="">
            <input
              className="h-6 w-6 mr-4 dark:bg-primary-very-dark-blue text-primary-violet focus:ring-0 bg-secondary-grey border-0 rounded-sm"
              type="checkbox"
              name="fullTime"
              id="fullTimeOnly"></input>
            <label
              className="dark:text-secondary-white text-base align-text-top"
              htmlFor="fulltimeOnly">
              Full Time
            </label>{' '}
          </div>
          <button
            type="submit"
            className="bg-primary-violet hover:bg-primary-light-violet text-secondary-white w-full h-12 font-main font-bold rounded-md cursor-pointer justify-self-end">
            <span className="">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFormModal;
