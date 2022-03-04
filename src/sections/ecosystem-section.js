import React, {useEffect} from "react";
import {isMobile} from 'react-device-detect';

import EcosystemVideo from "../videos/ecosystem.webm";
import EcosystemPoster from "../videos/ecosystem.png";
import EcosystemVideoMov from "../videos/ecosystem.mp4";

const menu = require('../contents/urls.json');

const EcosystemSection = () => {

        /*useEffect(() => {
            console.log('OK');
                var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                var Mobile = false;

                if (isMobile) {
                    Mobile = true;
                }

                if(isSafari && Mobile){
                    const videoElement = document.getElementById('ecosystem-video');
                    const videoElementBG = document.getElementById('video-bg');
                    videoElement.addEventListener('suspend', () => {
                        console.log('suspend');
                        videoElement.style.display = "none"
                        videoElementBG.style.display = "block"
                        // suspend invoked
                        // show play button
                        // iphone is in low power mode
                    });

                    videoElement.addEventListener('play', () => {
                        console.log('play');
                        videoElement.style.display = "block"
                        videoElementBG.style.display = "none"
                        // video is played
                        // remove play button UI
                        // iphone is not in low power mode
                    });
            }
        });*/

        return (
            <section className={'ecosystem-section'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-12 col-md-6'}>
                            <div className={'video-container'}>
                                <div className={'video-wrapper'}>
                                    <div id={'video-bg'}/>
                                    <video id={'ecosystem-video'} autoPlay={true} loop={true} playsInline={true} muted={true} poster={EcosystemPoster}>
                                        <source src={EcosystemVideoMov} type='video/mp4;codecs="hvc1"'/>
                                        <source src={EcosystemVideo} type="video/webm" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <legend data-sal="fade"
                                    data-sal-delay="400"
                                    data-sal-duration="1000">ECOSYSTEM</legend>
                            <h3 data-sal="fade"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">50+ apps, contracts, tools and 2000+ DAO's built on Juno</h3>
                            <div className={'text-box'} data-sal="fade"
                                 data-sal-delay="600"
                                 data-sal-duration="1000">
                                Discover a wide variety of dapps, contracts and tools, built in the Junø ecosystem by developers and contributors from across the globe
                            </div>
                            <a href={menu.ecosystem} data-sal="fade"
                               data-sal-delay="800"
                               data-sal-duration="1000">
                                <div className={'link'}><i className={'icon-arrow-right'}></i> View Ecosystem</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default EcosystemSection;

