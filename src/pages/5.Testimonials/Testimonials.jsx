import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../5.Testimonials/Testimonial.css"; // Import the CSS file here

export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[10px] max-w-[600px] text-center lg:-mb-2">
                            <span className="mb-2 block text-4xl text-green-800 font-sans font-semibold text-primary">
                                Testimonials
                            </span>
                            <h2 className="mb-2 text-3xl font-sans font-bold tracking-tight text-black text-dark md:text-5xl">
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
                    interval={6100}
                >
                    <div className="-pt-10">
                        <div className="myCarousel">
                            <p className="mb-24 xs:mb-16 lg:mb-10">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel repudiandae quaerat ad reprehenderit porro earum commodi voluptatem.
                            </p>
                            <h3 className="pt-4">Shirley Fultz</h3>
                        </div>
                    </div>

                    <div>
                        <div className="myCarousel">
                            <p className="mb-24 xs:mb-16 lg:mb-10">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel repudiandae quaerat ad reprehenderit porro earum commodi voluptatem.
                            </p>
                            <h3 className="pt-4">Shirley Fultz</h3>
                        </div>
                    </div>

                    <div>
                        <div className="myCarousel">
                            <p className="mb-24 xs:mb-16 lg:mb-10">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel repudiandae quaerat ad reprehenderit porro earum commodi voluptatem.
                            </p>
                            <h3 className="pt-4">Shirley Fultz</h3>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}