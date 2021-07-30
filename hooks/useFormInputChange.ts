import { useEffect, useState } from 'react';

type FormDataType = {
  data: string;
  location: string;
  fullTimeOnly: boolean;
};

const useFormInputChange = (formData: FormDataType) => {
  const [inputData, setInputData] = useState<FormDataType>({
    ...formData,
  });

  // update input state if form state changes
  useEffect(() => {
    setInputData(formData);
  }, [formData]);

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
