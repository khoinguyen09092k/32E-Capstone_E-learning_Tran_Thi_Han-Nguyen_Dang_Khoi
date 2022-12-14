import { Carousel } from "antd";
import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./styles/carouselHome.css";
import Banner1 from "./banner1";
import Banner2 from "./banner2";


export default function CarouselHome() {
  return (
    <div className="carousel">
      <Carousel
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
        autoplay
        autoplaySpeed ={1500}
        draggable={true}
        lazyLoad={true}
        style={{marginTop:'120px'}}
      >
        <div className="banner1">
              <Banner1 />
        </div>
        <div>
              <Banner2 />
        </div>
      </Carousel>
    </div>
  );
}
