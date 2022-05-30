import React from "react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import { InfoCard } from "../../molecules";
import { Carousel, MovementsCard } from "../../organisms";
import { Flex } from "../../UI-utils";
import PropTypes from "prop-types";

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

export const PokemonModal = ({ firstColumn, secondColumn }) => {
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

            {firstColumn}
          </Flex>
          {/* <MovementsCard /> */}
          {secondColumn}
        </Flex>
      </div>
    </Modal>
  );
};

PokemonModal.propTypes = {
  firstColumn: PropTypes.string.isRequired,
  secondColumn: PropTypes.object.isRequired,
};
