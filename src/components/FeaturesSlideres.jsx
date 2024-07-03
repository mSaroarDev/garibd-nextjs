"use client";
import Link from 'next/link';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '10px 30px',
  color: '#000000',
  textAlign: "center",
  background: 'rgba(255, 255, 255, 0.5)', 
}

const divStyle = {
  display: 'flex',
  alignItems: 'end',
  padding: "30px",
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
  fontSize: "25px",
  zIndex: '1'
}
const slideImages = [
  {
    url: '/image.jpeg',
    link: '/',
    caption: 'Motorolla DX 6 ultra phone'
  },
  {
    url: '/image-2.jpeg',
    link: '/',
    caption: 'Iphone 15 pro max ultra '
  },
  {
    url: '/image-3.jpeg',
    link: '/',
    caption: 'Samsung galaxy s23 ultra pro max'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide autoplay={true} duration={2000}>
         {slideImages.map((slideImage, index)=> (
            <Link href={slideImage.link} key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption} <br /> ৳ ২,৫০,০০০/- টাকা</span>
              </div>
            </Link>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow