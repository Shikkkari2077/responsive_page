import { React, useState } from "react";
import "./BOOKPOD.css";

const BookPod = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const style = {
    color: "#22559c",
  };

  return (
    <>
      <nav className="navBar">
        <div className="container">
          <div className="MenuToggle" onClick={handleClick}>
              <img className="toggle" src={click?"./distData/menuc.svg":"./distData/menu.svg"} alt="" />
          </div>
          <h1 className="navlogo">
            BookPod<span style={style}>.</span>
          </h1>
          <div className="mobileSearch">
            <img className="mbIcon" src="./distData/search2.svg" alt="" />
          </div>
          <ul className={click ? "navLinks active" : "navLinks"}>
            <li>
              <a className="navLink" href="#" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a className="navLink" href="#" onClick={closeMobileMenu}>
                Categories
              </a>
            </li>
            <li>
              <a className="navLink" href="#" onClick={closeMobileMenu}>
                Podcasts
              </a>
            </li>
          </ul>
          <div className="searchBar">
            <img className="srIcon" src="./distData/search.svg" alt="" />
            <input className="search" placeholder="Search..." type="text" />
          </div>
        </div>
      </nav>
      <div className="first">
        <div className="container">
          <div className="fhead">
            <h1>
              Home of <span style={style}>100,000+</span> books and podcasts
            </h1>
          </div>
          <div className="fmiddle">
            <span>Get the latest books and listen to the</span>
            <span>latest podcasts all in one place</span>
          </div>
          <div className="fbtn">
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="container">
          <div className="s-cont">
            <img className="sImg" src="./distData/book.jpg" alt="" />
            <div className="sIcon">
              <img src="./distData/twitter.svg" alt="" />
              <img src="./distData/facebook.svg" alt="" />
              <img src="./distData/instagram.svg" alt="" />
              <img src="./distData/linkedin.svg" alt="" />
            </div>
            <div className="sFloat">
              <h3>Lorem ipsum</h3>
              <h1>Lorem ipsum dolor sit amet</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                excepturi quo quasi, dolores nihil cumque sed modi blanditiis!
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="third">
        <div className="container">
          <h1>Featured Writers</h1>
          <div className="cards">
            <div className="card">
              <div>
                <img src="./distData/img1.jpg" alt="" />
              </div>
              <h3>E R Braithwaite</h3>
            </div>
            <div className="card">
              <div>
                <img src="./distData/img2.jpg" alt="" />
              </div>
              <h3>Andrea Levy</h3>
            </div>
            <div className="card">
              <div>
                <img src="./distData/img3.jpg" alt="" />
              </div>
              <h3>Stephen King</h3>
            </div>
            <div className="card">
              <div>
                <img src="./distData/img4.jpeg" alt="" />
              </div>
              <h3>Jorge Amado</h3>
            </div>
            <div className="card">
              <div>
                <img src="./distData/img5.jpg" alt="" />
              </div>
              <h3>Gayle Forman</h3>
            </div>
            <div className="card">
              <div>
                <img src="./distData/img6.jpg" alt="" />
              </div>
              <h3>Shashi Tharoor</h3>
            </div>
            <div className="card">
              <div>
                <img src="./distData/img7.jpg" alt="" />
              </div>
              <h3>J.K. Rowling</h3>
            </div>
            <div className="card">
              <div>
                <img src="./distData/img8.jpg" alt="" />
              </div>
              <h3>John Green</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookPod;
