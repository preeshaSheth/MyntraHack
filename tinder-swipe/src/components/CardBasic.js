import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const CardBasic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const cards = [
    {
      image: 'https://assets.ajio.com/medias/sys_master/root/20230718/DElg/64b6be4aeebac147fc7727a1/-473Wx593H-466368522-black-MODEL.jpg',
    },
    {
      image: 'https://assets.ajio.com/medias/sys_master/root/20240622/A5Py/66762a581d763220faf5fff2/-473Wx593H-700114043-cream-MODEL.jpg',
    },
    {
      image: 'https://assets.ajio.com/medias/sys_master/root/20240315/Dp1A/65f385f016fd2c6e6a5efe08/-473Wx593H-467167543-purple-MODEL.jpg',
    },
    {
      image: 'https://assets.ajio.com/medias/sys_master/root/20240508/Wl8e/663b750805ac7d77bb48dc98/-473Wx593H-442528412-beige-MODEL.jpg',
    },
    {
      image: 'https://assets.ajio.com/medias/sys_master/root/20240321/kk3B/65fc494416fd2c6e6a75b8c8/-1117Wx1400H-443036155-mustard-MODEL.jpg',
    },
  ];

  const handleCardSwipe = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handleVideoRedirect = () => {
    navigate('/video');
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">Swipe Chic Feature</h1>
      </div>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            index={cards.length - index}
            image={card.image}
            onCardSwipe={handleCardSwipe}
          />
        ))}
      </div>
      <div className="button-container ">
        <button onClick={handleVideoRedirect}>Skin Tone</button>
      </div>
    </div>
  );
};

export default CardBasic;
