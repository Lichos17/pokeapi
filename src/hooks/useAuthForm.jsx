import { useState } from "react";

export const useAuthForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: {
        ...prevState[e.target.name],
        value: e.target.value,
        isValid: prevState[e.target.name].validation(e.target.value, {
          ...prevState,
        }),
      },
    }));
  };

  return { form, setForm, handleInputChange };
};
