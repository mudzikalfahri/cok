import { useState } from "react";

export function useForm() {
  const [field, setField] = useState({});

  const handleChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
    console.log(field);
  };

  return [field, handleChange];
}
