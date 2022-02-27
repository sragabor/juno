import React  from 'react';
import {StaticImage} from "gatsby-plugin-image";


const Ecosystem = (props) => {
    const image = require("../images/ecosystems/"+props.ecosystem.icon);
    return (
        <div className={'ecosystem'}>
            <div className={'icon'}>
                <StaticImage
                    src={image}
                    alt={props.ecosystem.title}
                    placeholder="blurred"
                    height={36}
                />
            </div>
            <div className={'title'}>{props.ecosystem.title}</div>
            <div className={'category'}>{props.ecosystem.category}</div>

            <div className={'socials'}>
                {props.ecosystem.github && <a href={props.ecosystem.github} target={'_blank'}><i className={'icon-social-github'}></i></a>}
                {props.ecosystem.discord && <a href={props.ecosystem.discord} target={'_blank'}><i className={'icon-social-discord'}></i></a>}
                {props.ecosystem.twitter && <a href={props.ecosystem.twitter} target={'_blank'}><i className={'icon-social-twitter'}></i></a>}
                {props.ecosystem.telegram && <a href={props.ecosystem.telegram} target={'_blank'}><i className={'icon-social-telegram'}></i></a>}
            </div>
        </div>
    );
};

export default Ecosystem;
