import React from 'react';
import { useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import '../index.css';

// Card component with destructured props
const Card = ({ image, index, onCardSwipe }) => {
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-10, 10]);
  const opacityValue = useTransform(motionValue, [-200, -150, 0, 150, 200], [0, 0.5, 1, 0.5, 0]);
  const animControls = useAnimation();

  const style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxShadow: '5px 10px 18px #888888',
    borderRadius: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  };

  return (
    <motion.div
      drag="x"
      style={{ x: motionValue, rotate: rotateValue, opacity: opacityValue, zIndex: index, ...style }}
      dragConstraints={{ left: -500, right: 500 }}
      onDragEnd={(event, info) => {
        if (Math.abs(info.offset.x) < 150) {
          animControls.start({ x: 0 });
        } else {
          animControls.start({ x: info.offset.x > 0 ? 500 : -500 }).then(() => {
            onCardSwipe(index);
          });
        }
      }}
      animate={animControls}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    />
  );
};

export default Card;
