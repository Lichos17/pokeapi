import React from "react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import { InfoCard } from "../../molecules";
import { Carousel, MovementsCard } from "../../organisms";
import { Flex } from "../../UI-utils";

const customStyles = (theme) => ({
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
    background: theme.body,
  },
});

export const PokemonModal = () => {
  const theme = useTheme();

  const styles = customStyles(theme);

  return (
    <Modal
      isOpen={true}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={styles}
      contentLabel="Example Modal"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Carousel />
        <Flex extendedStyles="align-items: stretch; justify-content: space-between;">
          <Flex extendedStyles="flex-direction:column; justify-content: stretch; width: 70%;">
            {/* {/* <InfoCard /> */}
            <InfoCard
              type1="Tipo"
              type2="Tipo"
              description="Hola "
              name="Pikachu"
            />
            <InfoCard
              type1="Tipo"
              type2="Tipo"
              description="Hola "
              name="Pikachu"
            />
          </Flex>
          <MovementsCard />
        </Flex>
      </div>
    </Modal>
  );
};
