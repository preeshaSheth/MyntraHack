import React, { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card.js';
import '../index.css';
import profilePhoto from '../icons3/Myntra-Logo.png'; // Import your profile photo
import png4 from '../icons3/4.png'; // Import the image you want to use as a link
import png3 from '../icons3/3.png';
import png2 from '../icons3/2.png';
import homePicture from '../icons3/home.png'; // Import the home picture
import wishlistPicture from '../icons3/wishlist.webp'; // Import the wishlist picture
import axios from 'axios';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
const OccasionCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [swipeDirection, setSwipeDirection] = useState(''); // State to manage swipe direction
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);

  const { occasion } = useParams();
  const fetchCards = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8080/api/occasion/${occasion}`);
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
  }, [occasion]);

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

  const handleDropdownItemClick = (item) => {
    // Handle item click here (e.g., navigate to a different page or perform an action)
    console.log(`Clicked on ${item}`);
    // For example, navigate to a specific page when an item is clicked
    navigate(`/dropdown/${item}`);
    // Close the dropdown after selection if needed
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
        <h1 className="title">Occasion Based Recommendation</h1>
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
                <a href="/api/occasion/work" onClick={() => handleDropdownItemClick('Item 1')}>Work</a>
                <a href="/api/occasion/prom" onClick={() => handleDropdownItemClick('Item 2')}>Prom</a>
                <a href="/api/occasion/freshers" onClick={() => handleDropdownItemClick('Item 3')}>Freshers</a>
                <a href="/api/occasion/marriage" onClick={() => handleDropdownItemClick('Item 4')}>Shaadi</a>
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

export default OccasionCard;
