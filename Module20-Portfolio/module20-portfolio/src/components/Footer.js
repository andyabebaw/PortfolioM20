import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  return (
    <div id = "footer">
    
        <a href = "https://www.instagram.com/andy_wabeba/" >
            Instagram
        </a>
     
        <a href = "https://www.linkedin.com/in/andy-abebaw-41b580141">
            LinkedIn
        </a>
     
        <a href ="https://github.com/andyabebaw">
            github
        </a>
      
    
    </div>
  );
}

export default Footer;