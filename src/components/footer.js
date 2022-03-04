import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import FooterVideoMov from "../videos/footer.mp4";
import FooterVideo from "../videos/footer.webm";

const menu = require('../contents/urls.json')

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className={'video-container'}>
                    <div className={'video-wrapper'}>
                        <div className={'video-bg'}/>
                        <video autoPlay={true} loop={false} playsInline={true} muted={true}>
                            <source src={FooterVideoMov} type='video/mp4;codecs="hvc1"'/>
                            <source src={FooterVideo} type="video/webm" />
                        </video>
                    </div>
                </div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-12 col-sm-8'}>
                            <h2>Get more out <br/> of Juno</h2>

                            <div className={'row mt-4 mt-lg-5'}>
                                <div className={'col-12 col-sm-6 col-md-2 pb-4'}>
                                    <legend>Build</legend>

                                    <ul>
                                        <li><a href={menu.docs} rel={'noreferrer'}>Docs</a></li>
                                        <li><a href={menu.github} rel={'noreferrer'}>Github</a></li>
                                        <li><a href={menu.ecosystem} rel={'noreferrer'}>Ecosystem</a></li>
                                        <li><a href={menu.status} rel={'noreferrer'}>Status</a></li>
                                    </ul>
                                </div>
                                <div className={'col-12 col-sm-6 col-md-3 pb-4'}>
                                    <legend>Community</legend>

                                    <ul>
                                        <li><a href={menu.github} rel={'noreferrer'}>Github</a></li>
                                        <li><a href={menu.discord} rel={'noreferrer'}>Chat on Discord</a></li>
                                        <li><a href={menu.telegram} rel={'noreferrer'}>Telegram</a></li>
                                        <li><a href={menu.twitter} rel={'noreferrer'}>Twitter</a></li>
                                        <li><a href={menu.blog} rel={'noreferrer'}>Blog</a></li>
                                    </ul>
                                </div>
                                <div className={'col-12 col-sm-6 col-md-3 pb-4'}>
                                    <legend>Ecosystem</legend>

                                    <ul>
                                        <li><a href={menu.ecosystem}>Dapp</a></li>
                                        <li><a href={menu.ecosystem}>Tools</a></li>
                                        <li><a href={menu.ecosystem}>Contracts</a></li>
                                    </ul>
                                </div>
                                <div className={'col-12 col-sm-6 col-md-4 pb-4'}>
                                    <legend>Network Data & Trackers</legend>

                                    <ul>
                                        <li><a href={menu.coingecko}>Coingecko</a></li>
                                        <li><a href={menu.osmosis}>Osmosis data</a></li>
                                        <li><a href={menu.onchain}>On-chain data</a></li>
                                        <li><a href={menu.onchain}>On-chain data 2</a></li>
                                        <li><a href={menu.onchain}>On-chain data 3</a></li>
                                        <li><a href={menu.coinmarketcap}>Coinmarketcap</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'black-box'}>
                        <div className={'row justify-content-between align-items-center'}>
                            <div className={'col-12 col-md-auto pb-3 pb-md-0'}>
                                <div className={'title'}>Meet the global social community:</div>
                            </div>
                            <div className={'col-12 col-md-auto'}>
                                <div className={'social'}>
                                    <div className={'row justify-content-center justify-content-mb-end'}>
                                        <div className={'col-auto'}>
                                            <a href={menu.twitter}><i className={'icon-social-twitter'} aria-label={'Twitter'}></i></a>
                                            <a href={menu.github}><i className={'icon-social-github'} aria-label={'Github'}></i></a>
                                            <a href={menu.discord}><i className={'icon-social-discord'} aria-label={'Discord'}></i></a>
                                            <a href={menu.telegram}><i className={'icon-social-telegram'} aria-label={'Telegram'}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'copyright'}>
                        <div className={'row align-items-center justify-content-center'}>
                            <div className={'col-auto'}>Website created by</div>
                            <div className={'col-auto px-0'}>
                                <a href="https://designatives.com" target={'_blank'} rel={'noreferrer'}>
                                    <StaticImage
                                        src={'../images/designatives-logo.svg'}
                                        alt={'Designatives'}
                                        width={100}
                                        height={18}
                                        placeholder="blurred"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
