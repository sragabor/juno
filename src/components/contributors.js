import React  from 'react';
import Carousel from "react-multi-carousel";

const contributors = require('../contents/contributors.json');

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        paritialVisibilityGutter: 0
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    }
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Contributors = ({ deviceType }) => {
    return (
        <Carousel
            ssr
            partialVisible
            autoPlay={false}
            deviceType={deviceType}
            itemClass="image-item"
            shouldResetAutoplay={false}
            responsive={responsive}
        >
            {contributors.map((contributor,index) => {
                return (
                    <div className={'contributor'} key={index}
                        draggable={false}
                    >
                        <div className={'name'}>{contributor.name}</div>
                        <div className={'title'}>{contributor.title}</div>
                        <a href={contributor.twitter} className={'twitter'}>
                            <i className={'icon-twitter'}></i>
                        </a>
                    </div>
                );
            })}
        </Carousel>
    );
};

export default Contributors;
