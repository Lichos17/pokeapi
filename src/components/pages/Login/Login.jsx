import React from "react";
import { Button, Input, Text } from "../../atoms";
import { LoginTemplate } from "../../templates";
import { Flex } from "../../UI-utils/Flex";

export const Login = () => {
  return (
    <LoginTemplate title="Pokedex">
      <Input extendedStyles="margin-bottom: 2rem;" placeholder="Email" />
      <Input extendedStyles="margin-bottom: 2rem;" placeholder="Contrasenia" />
      <Button extendedStyles="font-size: 1rem;" size="xs">
        Iniciar Sesion
      </Button>
    </LoginTemplate>
  );
};
