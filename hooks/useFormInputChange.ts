import { useState } from 'react';

const useFormInputChange = () => {
  const [inputData, setInputData] = useState<{}>({
    data: '',
    location: '',
    fullTimeOnly: false,
  });

  // save input changes to state
  const handleChange = (e: React.FormEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    if (target.type === 'checkbox') {
      setInputData({
        ...inputData,
        [target.id]: target.checked,
      });
    } else if (target.type === 'text') {
      setInputData({
        ...inputData,
        [target.id]: target.value.toLowerCase(),
      });
    }
  };
  return { inputData, handleChange };
};

export default useFormInputChange;
