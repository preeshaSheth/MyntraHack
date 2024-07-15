import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from './Card.js';
import '../index.css';
import profilePhoto from '../icons3/Myntra-Logo.png'; // Import your profile photo
import png4 from '../icons3/4.png'; // Import the image you want to use as a link
import png3 from '../icons3/3.png';
import png2 from '../icons3/2.png';
import homePicture from '../icons3/home.png'; // Import the home picture
import wishlistPicture from '../icons3/wishlist.webp'; // Import the wishlist picture
import axios from 'axios';

const ColorCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [swipeDirection, setSwipeDirection] = useState(''); // State to manage swipe direction
  const navigate = useNavigate();
  const { color, occasion } = useParams(); // Get color and occasion from the URL

  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8080/api/color/${color}/occasion/${occasion}`);
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, [color, occasion]); // Refetch cards when color or occasion changes

  const handleCardSwipe = (index) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setSwipeDirection('');
  };

  const handleButtonClick = (direction) => {
    setSwipeDirection(direction);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownItemClick = (occasion) => {
    navigate(`/api/color/${color}/occasion/${occasion}`);
    setShowDropdown(false);
  };

  const redirectToMyntra = () => {
    window.location.href = 'https://www.myntra.com'; // Redirect to Myntra main page
  };

  const redirectToWishlist = () => {
    window.location.href = ''; // Redirect to Myntra wishlist page
  };

  return (
    <div className="App">
      <img src={profilePhoto} alt="Profile Photo" className="profile-photo" /> {/* Add profile photo here */}
      <div className="top-right-container">
        <div className="icon-container" onClick={redirectToMyntra}>
          <img src={homePicture} alt="Home" className="icon-image" />
          <span className="icon-label">Home</span>
        </div>
        <div className="icon-container" onClick={redirectToWishlist}>
          <img src={wishlistPicture} alt="Wishlist" className="icon-image" />
          <span className="icon-label">Wishlist</span>
        </div>
      </div>
      <div className="title-container">
        <h1 className="title">SkinTone Based Recommendation</h1>
      </div>
      <div className="content-container">
        <div className="cards-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              index={cards.length - index}
              image={card.imgurl}
              onCardSwipe={handleCardSwipe}
              swipeDirection={index === currentIndex ? swipeDirection : ''}
              isTopCard={index === currentIndex}
              forRent={card.forRent} // Pass the forRent prop
            />
          ))}
          <div className="swipe-buttons">
            <div className="swipe-button cross" onClick={() => handleButtonClick('left')}>X</div>
            <div className="swipe-button heart" onClick={() => handleButtonClick('right')}>❤</div>
          </div>
        </div>
        <div className="link-container">
          <a href="#">
            <img src={png3} alt="Link Image 1" className="link-image" data-comment="Message for Link Image 1" />
          </a>
          <div className="dropdown">
            <a href="#" onClick={toggleDropdown}>
              <img src={png2} alt="Link Image 2" className="link-image" data-comment="Message for Link Image 2" />
            </a>
            {showDropdown && (
              <div className="dropdown-content">
                <a href="#" onClick={() => handleDropdownItemClick('work')}>Work</a>
                <a href="#" onClick={() => handleDropdownItemClick('prom')}>Prom</a>
                <a href="#" onClick={() => handleDropdownItemClick('freshers')}>Freshers</a>
                <a href="#" onClick={() => handleDropdownItemClick('marriage')}>Shaadi</a>
              </div>
            )}
          </div>
          <a href="/video">
            <img src={png4} alt="Link Image 3" className="link-image" data-comment="Message for Link Image 3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
