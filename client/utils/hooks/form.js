import { useState } from "react";

export const useForm = () => {
  const [field, setField] = useState({});
  const handleChange = (event) => {
    event.preventDefault();
    setField({ ...field, [event.target.name]: event.target.value });
  };

  return [field, handleChange];
};
