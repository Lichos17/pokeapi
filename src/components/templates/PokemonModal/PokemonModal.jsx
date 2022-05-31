import React from "react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import { InfoCard } from "../../molecules";
import { Carousel, MovementsCard } from "../../organisms";
import { Flex } from "../../UI-utils";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

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

export const PokemonModal = ({ firstColumn, secondColumn, images }) => {
  const theme = useTheme();
  let navigate = useNavigate();

  const handleNavigationDashboard = () => {
    navigate(`/dashboard`);
  };

  const styles = customStyles(theme);
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={true}
      onRequestClose={handleNavigationDashboard}
      style={styles}
      contentLabel="Example Modal"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Carousel images={images} />
        <Flex extendedStyles="align-items: stretch; justify-content: space-between;">
          <Flex extendedStyles="flex-direction:column; justify-content: stretch; width: 70%;">
            {firstColumn}
          </Flex>

          {secondColumn}
        </Flex>
      </div>
    </Modal>
  );
};

PokemonModal.propTypes = {
  firstColumn: PropTypes.object.isRequired,
  secondColumn: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};
