import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import axios from 'axios';

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

const CardContainer = () => {
  const { color } = useParams();
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchCards = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8080/api/color/${color}`);
      if (response.ok)
      {
        const data= await response.json;
        console.log(data);
      }
      else{
        console.log("ERROR");
      }
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };
  useEffect(() => {
    

    fetchCards();
  }, [color]);

  const handleCardSwipe = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          index={cards.length - index}
          image={card.imgurl}
          onCardSwipe={handleCardSwipe}
        />
      ))}
    </div>
  );
};

export default CardContainer;