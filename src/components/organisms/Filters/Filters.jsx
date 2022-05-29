import React from "react";
import styled from "styled-components";
import { Button, Input, InputContainer, InputIcon } from "../../atoms";
import { Flex } from "../../UI-utils";

export const Filters = () => {
  return (
    <Flex as="nav" extendedStyles="margin-bottom: 1rem;">
      <InputContainer>
        <InputIcon className="fas fa-search" />
        <Input placeholder="Buscar Pokemon" />
      </InputContainer>
      <Flex>
        <Button size="md" buttonType="primaryButton">
          Hola
        </Button>
        <Button size="md" buttonType="secondaryButton">
          Hola
        </Button>
      </Flex>
    </Flex>
  );
};
