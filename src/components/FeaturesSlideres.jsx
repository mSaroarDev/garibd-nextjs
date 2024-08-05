"use client";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "10px 30px",
  color: "#000000",
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.5)",
};

const divStyle = {
  display: "flex",
  alignItems: "end",
  padding: "30px",
  justifyContent: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "550px",
  fontSize: "25px",
  zIndex: "1",
};

const Slideshow = ({ featuredAdsArray }) => {

  return (
    <div className="slide-container">
      <Slide autoplay={true} duration={2000}>
        {featuredAdsArray.map((slideImage, index) => (
          <Link href={`/ad/details/${slideImage?._id}?title=${slideImage?.ad_name}&category=${slideImage?.categoryId?.categoryName}&company=${slideImage?.companyId?.companyName}`} key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.images[0]})`,
              }}
            >
              <span style={{...spanStyle, fontWeight: 600}}>
                {slideImage.ad_name} <br /> ৳ {slideImage?.price}/- টাকা
              </span>
            </div>
          </Link>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
