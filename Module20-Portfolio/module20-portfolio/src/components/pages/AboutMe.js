import React from 'react';
import Profile from './files/images/profile.jpeg';

export default function AboutMe() {
  return (
    <div>
      <div class="container">
        <img src={Profile} alt="GasWorks Park" className="headerImage" style={{ width: 350, height: 350 }}></img>
        <h2 class="center">Software Engineer</h2>
    </div>
      <h1 id="header">About Me</h1>
      <hr/>
      <p class="pageBody">
        Hello,my name is Andy Abebaw and I am a software engineer.  I am currently learning web development through
        the UW coding bootcamp.  We have learned technologies starting from Javascript and HTML to more recently NoSQL and React 
        along with a wide variety of others. This coding bootcamp has been a great learning oppurtunity!In additiion to attending
         the UW coding bootcamp I also have a degree in Computer Science from the WUSTL. There I learned languages such as Java and C#.

         Outside of work I have a wide variety of hobbies that range from cooking to salsa dancing to sometimes even boxing.  I enjoy 
         spending quality time with friends and playing outdoor and board games.  

      </p>
    </div>
  );
}
