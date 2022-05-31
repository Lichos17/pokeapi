import React from "react";
import { useAuthForm } from "../../../hooks";
import { validateEmail, validatePassword } from "../../../utils";
import { Button, Input, Text } from "../../atoms";
import { LoginTemplate } from "../../templates";
import { Flex } from "../../UI-utils/Flex";

export const Signup = () => {
  const {
    form: { email, password, confirmPassword },
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
    confirmPassword: {
      value: "",
      validation: (confirmPassword, { password }) =>
        password.value === confirmPassword,
      isValid: false,
    },
  });

  const handleSignup = () => {
    if (password.isValid && email.isValid && confirmPassword.isValid) {
      console.log("ignup");
    }
  };

  return (
    <LoginTemplate title="Pokedex">
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
      <Input
        name="confirmPassword"
        value={confirmPassword.value}
        placeholder="Confirmar Contrasenia"
        type="password"
        extendedStyles="margin-bottom: 2rem;"
        onChange={handleInputChange}
        valid={confirmPassword.isValid}
      />
      <Button
        disabled={
          !password.isValid || !email.isValid || !confirmPassword.isValid
        }
        onClick={handleSignup}
        extendedStyles="font-size: 1rem;"
        size="xl"
      >
        Inciar Sesion
      </Button>
    </LoginTemplate>
  );
};
