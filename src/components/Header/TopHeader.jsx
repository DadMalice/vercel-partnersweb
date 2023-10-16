import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";

const TopHeader = () => {
    const items = [
        {
            icon: <AiFillEnvironment />,
            description: "317 W. La Habra Blvd. Suite 200 La Habra, CA 90631",
            locationLink: "https://www.google.com/maps/place/317+W.+La+Habra+Blvd.+Suite+200+La+Habra,+CA+90631",
        },
        {
            icon: <BsFillTelephoneFill />,
            description: "(562) 245-7580",
            phoneLink: "tel:+15622457580",
        },
    ];

    return (
        <div className="top-header mx-auto pt-3 max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="flex gap-3 flex-wrap collapse md:visible xs:justify-end mx-2">
                <ul className="flex flex-wrap gap-2 md:gap-8 justify-center text-center">
                    {items.map(({ icon, description, locationLink, phoneLink }, index) => {
                        const content = locationLink ? (
                            <a href={locationLink} target="_blank" rel="noopener noreferrer">
                                {description}
                            </a>
                        ) : phoneLink ? (
                            <a href={phoneLink}>{description}</a>
                        ) : (
                            description
                        );

                        return (
                            <li key={index} className="flex items-center gap-2 text-gray-600">
                                <span>{icon}</span>
                                {content}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TopHeader;
