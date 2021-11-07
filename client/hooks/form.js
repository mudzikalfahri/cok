import { useState } from "react";

const useForm = () => {
  const [field, setField] = useState({});
  const handleChange = (event) => {
    console.log(field);
    setField({
      ...field,
      [event.target.name]: event.target.value?.toLowerCase(),
    });
  };

  return [field, handleChange];
};

export default useForm;
