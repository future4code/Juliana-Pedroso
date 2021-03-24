import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clearFields = () => {
    setForm(initialState);
  };

  return [form, onChangeForm, clearFields];
};

export default useForm;
