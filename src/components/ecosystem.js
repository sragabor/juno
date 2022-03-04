import React  from 'react';
import EcosystemLogo from "./ecosystem-logo";

const Ecosystem = (props) => {
    return (
        <div className={'ecosystem'}>
            <div className={'icon'}>
                <EcosystemLogo alt={props.ecosystem.title} filename={props.ecosystem.icon}/>
            </div>
            <div className={'title'}>{props.ecosystem.title}</div>
            <div className={'category'}>{props.ecosystem.category}</div>

            <div className={'socials'}>
                {props.ecosystem.github && <a href={props.ecosystem.github} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-github'} aria-label={'Github'}></i></a>}
                {props.ecosystem.discord && <a href={props.ecosystem.discord} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-discord'} aria-label={'Discord'}></i></a>}
                {props.ecosystem.twitter && <a href={props.ecosystem.twitter} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-twitter'} aria-label={'Twitter'}></i></a>}
                {props.ecosystem.telegram && <a href={props.ecosystem.telegram} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-telegram'} aria-label={'Telegram'}></i></a>}
            </div>
        </div>
    );
};

export default Ecosystem;
