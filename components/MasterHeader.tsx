import React, { Dispatch, SetStateAction, useRef } from 'react';
import Image from 'next/image';
import sunIcon from '../public/assets/desktop/icon-sun.svg';
import moonIcon from '../public/assets/desktop/icon-moon.svg';

type CompProps = {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const MasterHeader = ({ setDarkMode }: CompProps) => {
  const checkBox = useRef<null | HTMLSpanElement>(null);

  const handleCheckboxSelection = (e: React.SyntheticEvent) => {
    if ((e.currentTarget as HTMLInputElement).checked) {
      checkBox.current?.classList.add('transform', 'translate-x-6');
      setDarkMode(true);
    } else {
      checkBox.current?.classList.remove('transform', 'translate-x-6');
      setDarkMode(false);
    }
  };

  return (
    <div className="bg-header-desktop bg-cover bg-no-repeat h-40">
      <div>
        <h1 className="font-main">devjobs</h1>
        <div className="flex items-center">
          <Image src={sunIcon} alt="sun icon" />

          <input
            className="hidden"
            type="checkbox"
            id="switch"
            onChange={(e) => handleCheckboxSelection(e)}
          />
          <label
            htmlFor="switch"
            className="relative inline-block w-12 bg-secondary-light-grey h-6 rounded-3xl cursor-pointer mx-4">
            <span
              ref={checkBox}
              className="h-4 w-4 bg-primary-light-violet absolute top-1 left-1 rounded-full transition"></span>
          </label>

          <Image src={moonIcon} alt="moon icon" />
        </div>
      </div>
    </div>
  );
};

export default MasterHeader;
