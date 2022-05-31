import React from "react";
import { useDispatch } from "react-redux";

import { useAuthForm } from "../../../hooks";
import { setEmailWithStorage } from "../../../slices/userSlice/thunk";
import { validateEmail, validatePassword } from "../../../utils";
import { Button, Input } from "../../atoms";
import { LoginTemplate } from "../../templates";

export const Login = () => {
  const dispatch = useDispatch();

  const {
    form: { email, password },
    handleInputChange,
  } = useAuthForm({
    email: {
      value: "",
      validation: (value) => validateEmail(value),
      isValid: false,
    },
    password: {
      value: "",
      validation: (value) => validatePassword(value),
      isValid: false,
    },
  });

  const handleLogin = () => {
    if (password.isValid && email.isValid) {
      dispatch(setEmailWithStorage(email.value));
    }
  };

  return (
    <LoginTemplate title="Pokédex">
      <Input
        name="email"
        value={email.value}
        placeholder="Email"
        extendedStyles="margin-bottom: 2rem;"
        onChange={handleInputChange}
        valid={email.isValid}
      />
      <Input
        name="password"
        value={password.value}
        placeholder="Contrasenia"
        type="password"
        extendedStyles="margin-bottom: 2rem;"
        onChange={handleInputChange}
        valid={password.isValid}
      />
      <Button
        as="button"
        disabled={!password.isValid || !email.isValid}
        onClick={handleLogin}
        extendedStyles="font-size: 1rem;"
        size="xl"
      >
        Iniciar Sesion
      </Button>
    </LoginTemplate>
  );
};
