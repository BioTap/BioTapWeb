"use client"
import Image from "next/image"
import Slider from "react-slick";
import React, { useRef } from "react";
import ScrollAnimation from "@/ui/ScrollAnimation";
import road_map_data from "@/data/RoadMapData";

import roadmap_bg from "@/assets/img/update/bg/bg-gradient1-1.jpg";

const settings = {
   dots: false,
   infinite: true,
   speed: 1000,
   autoplay: true,
   arrows: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
   ]
}

const RoadMap = () => {

   const sliderRef = useRef<Slider | null>(null);

   const handlePrevClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };

   const handleNextClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };

   return (
      <div className="pt-130 pb-140 overflow-hidden position-relative z-index-common" id="roadmap">
         <div className="bg-gradient-2">
            <Image src={roadmap_bg} alt="img" />
         </div>
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-lg-8 col-sm-8">
                  <ScrollAnimation animation="fade-in" delay={200}>
                     <div className="section-title mb-50">
                        <h2 className="title style2 gradient-text">🛠️ Biotap Roadmap</h2>
                        <p className="sec-text">Building the future of identity-powered banking — one milestone at a time.</p>
                     </div>
                  </ScrollAnimation>
               </div>
               <div className="col-sm-auto">
                  <ScrollAnimation animation="fade-in" delay={400}>
                     <div className="icon-box">
                        <button onClick={handlePrevClick} className="slider-arrow prev-btn default"><i className="fas fa-arrow-left"></i></button>
                        <button onClick={handleNextClick} className="slider-arrow next-btn default"><i className="fas fa-arrow-right"></i></button>
                     </div>
                  </ScrollAnimation>
               </div>
            </div>
         </div>
         <div className="container-fluid p-0">
            <div className="slider-area position-relative">
               <Slider {...settings} ref={sliderRef} className="row roadMap-active2 roadmap-slider1">
                  {road_map_data.map((item, index) => (
                     <div key={item.id} className="col-lg-4">
                        <ScrollAnimation animation="scale-in" delay={index * 200}>
                           <div className="roadmap-item glass-card">
                              <span className="roadmap-title">{item.sub_title}</span>
                              <div className="roadmap-content">
                                 <h4 className="title"><span className="dot"></span>{item.title}</h4>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                        </ScrollAnimation>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </div>
   )
}

export default RoadMap
