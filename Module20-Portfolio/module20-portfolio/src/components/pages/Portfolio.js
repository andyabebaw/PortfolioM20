import React from 'react';
import Foodle from './files/images/foodlescreenshot.png';
import PortfolioImage from './files/images/top.png';
import SEO from './files/images/SEO.png';
import Weather from './files/images/weather.png';

export default function Portfolio() {
  return (
    <div>
      <h1 id="header">Portfolio</h1>
      <hr/>
      <div className="imagesContainer">
        <a href="https://xavionstar.github.io/group-project-Foodle-app/" id="item">
          <div className="item container" id="fullWidth">
            <img src={Foodle} alt="Foodle" className="titleImage " />
            <div class="bottom-left">
              <h3>Foodle App</h3>
              <h5>Front-End</h5>
              <a href="https://xavionstar.github.io/group-project-Foodle-app/"> Deployed </a>
            </div>
            
          </div>
        </a>
        <a href="https://github.com/andyabebaw/Challenge2Portfolio"id="item" >
          <div className="item container">
            <img src={PortfolioImage} alt="Portfolio" className="titleImage" />
            <div className="bottom-left">
              <h3>Portfolio Site</h3>
              <a href=" https://github.com/andyabebaw/Challenge2"> Deployed </a>
            </div>
          </div>
        </a>
        <a href="https://github.com/andyabebaw/WeekOneChallenge" id="item">
          <div className="item container">
            <img src={SEO} alt="SEO" className="titleImage " />
            <div class="bottom-left">
              <h3>SEO Site</h3>
              <h5>HTML/CSS</h5>
              <a href="https://github.com/andyabebaw/WeekOneChallenge"> Deployed </a>
            </div>
          </div>
        </a>
        <a href="https://github.com/andyabebaw/WeatherApp" id="item">
          <div className="item container">
            <img src={Weather} alt="Weather" className="titleImage"/>
            <div className="bottom-left">
              <h3>Weather</h3>
              <h5>APIs</h5>
              <a href="https://andyabebaw.github.io/WeatherApp/"> Deployed </a>
            </div>
          </div>
        </a>


      </div >

    </div >
      );
}
