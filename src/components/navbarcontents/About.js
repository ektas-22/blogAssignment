import React from 'react'
import img1 from '../../asset/images/pexels-brett-sayles-6424244.jpg'
import img2 from '../../asset/images/pexels-motional-studio-1081685.jpg'
import img3 from '../../asset/images/pexels-robin-stickel-70497.jpg'
import img4 from '../../asset/images/pexels-sum+it-2885578.jpg'
import '../../css/about.css'
function About() {
  return (
    <div className="about-container">
      <h2>About</h2>

      <div className="about-section">
        <img src={img1} alt='' className="about-image" />
        <div className="about-content">
          <h3>Welcome to Our Blog!</h3>
          <p>We are a team of passionate writers dedicated to providing insightful articles and helpful resources on a wide range of topics.</p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          <h3>Our Goal</h3>
          <p>Our goal is to share valuable information and engage with our readers, offering them inspiration, knowledge, and practical tips to enhance their lives.</p>
        </div>
        <img src={img2} alt='' className="about-image" />
      </div>

      <div className="about-section">
        <img src={img3} alt='' className="about-image" />
        <div className="about-content">
          <h3>Wide Range of Subjects</h3>
          <p>From technology and travel to food and lifestyle, our blog covers a diverse range of subjects. We strive to deliver well-researched, engaging, and thought-provoking content that caters to different interests and preferences.</p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          <h3>Join Our Community</h3>
          <p>Whether you are looking for expert advice, interesting stories, or simply seeking inspiration, our blog is here to serve as your go-to resource. We believe in the power of knowledge and the joy of discovery, and we hope to inspire and inform you with every article we publish.</p>
          <p>Thank you for visiting our blog, and we hope you enjoy your time here. Feel free to explore our articles, leave comments, and connect with us on social media. We appreciate your support!</p>
        </div>
        <img src={img4} alt='' className="about-image" />
      </div>
    </div>
  );
};

export default About
