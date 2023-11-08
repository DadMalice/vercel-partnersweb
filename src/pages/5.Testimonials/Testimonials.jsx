import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../5.Testimonials/Testimonial.css"; // Import the CSS file here

export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <div className="flex flex-wrap">
                    <div className="w-full mt-8 px-4">
                        <div className="mx-auto mb-[10px] max-w-[600px] text-center lg:-mb-2">
                            <span className="mb-2 block text-4xl text-green-800 font-sans font-semibold text-primary">
                                Testimonials
                            </span>
                            <h2 className="mb-2 text-2xl font-sans font-bold tracking-tight text-black text-dark md:text-5xl">
                                Patients and Families say...
                            </h2>
                        </div>
                    </div>
                </div>

                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={8000}
                >
                    <div className="">
                        <div className="myCarousel rounded-xl">
                            <p className="mb-0">
                                Partners Hospice Quality Care made my journey easier. Their compassionate team provided excellent pain management and unwavering support. I couldn't have asked for better care during a difficult time.
                            </p>
                            <h3 className="pt-6">Sarah J.</h3>
                        </div>
                    </div>

                    <div>
                        <div className="myCarousel rounded-xl">
                            <p className="mb-0">
                                Partners Hospice Quality Care's commitment to preserving my wife's dignity and managing her pain was extraordinary. They made a challenging journey a bit easier with their kindness and expertise."
                            </p>
                            <h3 className="pt-6">Michael A.</h3>
                        </div>
                    </div>

                    <div>
                        <div className="myCarousel rounded-xl">
                            <p className="mb-0">
                                Partnering with Partners Hospice Quality Care was a blessing during my mother's end-of-life journey. Their team provided not only medical care but also emotional support, treating my mom with respect and value.
                            </p>
                            <h3 className="pt-6">Lisa M.</h3>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}