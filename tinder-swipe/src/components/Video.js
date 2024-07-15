// src/components/VideoStream.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './video.css'
const VideoStream = () => {
    const videoFeedUrl = 'http://127.0.0.1:5000/video_feed'; // Flask endpoint
    const redirectUrlBase = '/api/color'; // Base URL for redirect
    const navigate = useNavigate();

    const handleRedirect = () => {
        fetch('http://127.0.0.1:5000/get_latest_color')
            .then(response => response.json())
            .then(data => {
                const color = data.color;
                navigate(`${redirectUrlBase}/${color}`);
            })
            .catch(error => console.error('Error fetching latest color:', error));
    };

    return (
        <div>
            <h1>Video Stream</h1>
            <img id="video-stream" src={videoFeedUrl} alt="Video Stream" />
            <button id="redirect-button" onClick={handleRedirect}>
                Get Recommended Color
            </button>
        </div>
    );
};

export default VideoStream;
