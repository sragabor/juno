import React from "react";
import FooterVideo from "../videos/footer.mp4";
import {StaticImage} from "gatsby-plugin-image";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className={'video-container'}>
                    <div className={'video-wrapper'}>
                        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                            <source src={FooterVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-12 col-md-8'}>
                            <h2>Get more out <br/> of Juno</h2>

                            <div className={'row mt-5'}>
                                <div className={'col-6 col-md-2'}>
                                    <legend>Build</legend>

                                    <ul>
                                        <li><a href="#">Docs</a></li>
                                        <li><a href="#">Github</a></li>
                                        <li><a href="#">Ecosystem</a></li>
                                        <li><a href="#">Status</a></li>
                                    </ul>
                                </div>
                                <div className={'col-6 col-md-3'}>
                                    <legend>Community</legend>

                                    <ul>
                                        <li><a href="#">Github</a></li>
                                        <li><a href="#">Chat on Discord</a></li>
                                        <li><a href="#">Telegram</a></li>
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <div className={'col-6 col-md-3'}>
                                    <legend>Ecosystem</legend>

                                    <ul>
                                        <li><a href="#">Dapp</a></li>
                                        <li><a href="#">Tools</a></li>
                                        <li><a href="#">Contracts</a></li>
                                    </ul>
                                </div>
                                <div className={'col-6 col-md-4'}>
                                    <legend>Network Data & Trackers</legend>

                                    <ul>
                                        <li><a href="#">Coingecko</a></li>
                                        <li><a href="#">Osmosis data</a></li>
                                        <li><a href="#">On-chain data</a></li>
                                        <li><a href="#">On-chain data 2</a></li>
                                        <li><a href="#">On-chain data 3</a></li>
                                        <li><a href="#">Coinmarketcap</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'black-box'}>
                        <div className={'row justify-content-between align-items-center'}>
                            <div className={'col-auto'}>
                                <div className={'title'}>Meet the global social community:</div>
                            </div>
                            <div className={'col-auto'}>
                                <div className={'social'}>
                                    <div className={'row justify-content-end'}>
                                        <div className={'col'}>
                                            <a href="#"><i className={'icon-social-twitter'}></i></a>
                                            <a href="#"><i className={'icon-social-github'}></i></a>
                                            <a href="#"><i className={'icon-social-discord'}></i></a>
                                            <a href="#"><i className={'icon-social-telegram'}></i></a>
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
                                <StaticImage
                                    src={'../images/designatives-logo.svg'}
                                    alt={'Designatives'}
                                    width={100}
                                    height={18}
                                    placeholder="blurred"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
