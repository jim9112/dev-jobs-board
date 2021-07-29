import React, { useRef } from 'react';
import Image from 'next/image';
import sunIcon from '../public/assets/desktop/icon-sun.svg';
import moonIcon from '../public/assets/desktop/icon-moon.svg';
import logo from '../public/assets/desktop/logo.svg';
import Link from 'next/link';

type CompProps = {
  outerDiv: any;
};

const MasterHeader = ({ outerDiv }: CompProps) => {
  const checkBox = useRef<null | HTMLSpanElement>(null);

  const handleCheckboxSelection = (e: React.SyntheticEvent) => {
    if ((e.currentTarget as HTMLInputElement).checked) {
      checkBox.current?.classList.add('transform', 'translate-x-6');
      outerDiv.current?.classList.add('dark');
    } else {
      checkBox.current?.classList.remove('transform', 'translate-x-6');
      outerDiv.current?.classList.remove('dark');
    }
  };

  return (
    <header className="bg-header-mobile lg:bg-header-desktop md:bg-header-tablet bg-cover bg-no-repeat h-40 px-6 py-8 md:px-10 lg:px-40 md:py-10 lg:py-11">
      <div className="grid grid-flow-col items-center">
        <Link href="/" passHref>
          <div>
            <Image
              className="cursor-pointer"
              src={logo}
              alt="logo"
              objectFit="cover"
            />
          </div>
        </Link>
        <div className="flex items-center justify-self-end">
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
              className="h-4 w-4 hover:bg-primary-light-violet bg-primary-violet absolute top-1 left-1 rounded-full transition"></span>
          </label>

          <Image src={moonIcon} alt="moon icon" />
        </div>
      </div>
    </header>
  );
};

export default MasterHeader;
