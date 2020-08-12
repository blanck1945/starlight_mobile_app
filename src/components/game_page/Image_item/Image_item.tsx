import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

import "./Image_item.scss";

interface ImageItemProps {
  img_alt: string;
  img: string;
  header?: boolean;
  text?: string;
}

const Image_item = ({ img, img_alt, header, text }: ImageItemProps) => {
  return (
    <motion.div
      className="img_item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <LazyLoadImage
        src={img}
        alt={img_alt}
        effect="blur"
        className={header ? "header_img" : "game_img"}
      />
      {text ? <p className="game_text">{text}</p> : null}
    </motion.div>
  );
};

export default Image_item;
