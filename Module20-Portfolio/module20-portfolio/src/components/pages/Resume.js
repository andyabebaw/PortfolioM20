import React from 'react';
import resume from './files/ANDUALEM_ABEBAW.pdf';
export default function Resume() {
  return (
    <div>
      <h1 id="header"> Resume </h1>
      <hr/>
      <div class="pageBody">
      <a href={resume} download>
      Resume Download
      </a>
      <br/>
      <hr/>
      <h1>Education:</h1>
      <hr/>
      <h3>Washington University in St Louis</h3>
      <h3>UW Coding Bootcamp</h3>
      <br/>
      <hr/>
      <h1>Employment</h1>
      <hr/>
      <h3>Microsoft : Software Engineer</h3>
      <h3>Microsoft : Software Engineer Intern</h3>
      <h3>Microsoft : New Technologist Intern</h3>
      <h3>Lavner Camps: Tech Instructor</h3>
      </div>
      
    </div>
  );
}
