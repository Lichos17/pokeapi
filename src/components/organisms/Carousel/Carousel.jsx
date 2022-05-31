import React, { useEffect, useState } from "react";
import { Button, CarouselButton, Image } from "../../atoms";
import { Flex } from "../../UI-utils";
import PropTypes from "prop-types";

export const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(images[index]);

  useEffect(() => {
    setImg(images[index]);
  }, [index]);

  const handlePreviousImage = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNextImage = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <Flex>
      <CarouselButton
        className="fa-solid fa-angle-left"
        onClick={handlePreviousImage}
      />
      <Image
        key={img}
        extendedStyles="height: 30rem; width: 40%; margin-bottom: 2rem;"
        src={img}
      />
      <CarouselButton
        className="fa-solid fa-angle-right"
        onClick={handleNextImage}
      />
    </Flex>
  );
};
Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};
