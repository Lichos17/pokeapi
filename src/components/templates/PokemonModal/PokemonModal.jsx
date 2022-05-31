import React from "react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Carousel } from "../../organisms";
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
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 0" }}>
        <Carousel images={images} />
        {firstColumn && secondColumn ? (
          <Flex extendedStyles="align-items: stretch; justify-content: space-between; @media(max-width:480px){flex-wrap:wrap;}">
            <Flex extendedStyles="flex-direction:column; justify-content: stretch; width: 60%;@media(max-width:480px){width: 100%;}">
              {firstColumn}
            </Flex>

            {secondColumn}
          </Flex>
        ) : null}
      </div>
    </Modal>
  );
};

PokemonModal.propTypes = {
  firstColumn: PropTypes.object.isRequired,
  secondColumn: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};
