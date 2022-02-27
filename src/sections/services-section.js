import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import Contributors from "../components/contributors";
import PiechartSection from "./piechart-section";

import { Parallax } from 'react-scroll-parallax';

export function ServicesSection() {
        return (
            <section className={'services-section'}>
                <div className={'section-bg'}/>
                <div className={'container'}>
                    <div className={'row'} data-masonry='{"percentPosition": true }'>
                        <div className={'col-12 col-md-6'}>
                            <div className={'service cosmosation'}>
                                <div className={'inner'}>
                                    <div className={'title'}>Cosmosation</div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href="cosmosation">
                                                <button type={'button'}>Install cosmosation</button>
                                            </a>
                                        </div>
                                        <div className={'col-auto'}>
                                            <a href="cosmosation">
                                                <div className={'link'}><i className={'icon-arrow-right'}></i>How to use it?</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <div className={'service staking-juno'}>
                                <div className={'inner'}>
                                    <div className={'title'}>Staking Juno</div>
                                    <div className={'text-box'}>
                                        When the staking (delegation) transaction is complete, rewards will start to be generated immediately on a block per block basis. At any time, stakers can claim their accumulated rewards, via their supported wallet.
                                        <ul>
                                            <li>Secure the network</li>
                                            <li>Earn rewards</li>
                                            <li>Vote for the future</li>
                                        </ul>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href="cosmosation">
                                                <button type={'button'}>Learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <div className={'service keplr-wallet'}>
                                <div className={'inner'}>
                                    <div className={'title'}>Keplr wallet integration</div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href="cosmosation">
                                                <button type={'button'}>Install Keplr Wallet</button>
                                            </a>
                                        </div>
                                        <div className={'col-auto'}>
                                            <a href="cosmosation">
                                                <div className={'link'}><i className={'icon-arrow-right'}></i>How to use it?</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'row junoswap'}>
                        <Parallax translateY={['100px', '0px']}>
                            <div className={'junoswap-graph'}>
                                <StaticImage
                                    src={'../images/junoswap.png'}
                                    alt={'Smart Contracts'}
                                    width={827}
                                    height={781}
                                    placeholder="blurred"
                                />
                            </div>
                        </Parallax>
                        <div className={'col-12 col-md-5 pe-4'}>
                            <h3>Easy access to Osmosis and JunoSwap</h3>
                            <div className={'text-box pe-5'}>
                                Swap & LP your Juno on the largest Cosmos decentralized exchange.
                            </div>
                            <div className={'row mt-4'}>
                                <div className={'col-auto'}>
                                    <a href="cosmosation">
                                        <button type={'button'}>Try JunoSwap</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-7 ps-5'}>
                            <div className={'junoswap-box'}>
                                <StaticImage
                                    src={'../images/junoswap-logo.png'}
                                    alt={'Junoswap'}
                                    width={258}
                                    height={59}
                                    placeholder="blurred"
                                />
                                <a href="#">
                                    <button type={'button'} className={'button-white mt-4'}>Connect Keplr</button>
                                </a>

                                <div className={'row mt-4 pt-3'}>
                                    <div className={'col-1'}>
                                        <i className={'icon-hash'}></i>
                                    </div>
                                    <div className={'col-11'}>
                                        Swap
                                    </div>
                                </div>

                                <div className={'row mt-3 pt-3'}>
                                    <div className={'col-1'}>
                                        <i className={'icon-transfer'}></i>
                                    </div>
                                    <div className={'col-11'}>
                                        Transfer
                                    </div>
                                </div>

                                <div className={'row mt-3 pt-3'}>
                                    <div className={'col-1'}>
                                        <i className={'icon-liquidity'}></i>
                                    </div>
                                    <div className={'col-11'}>
                                        Liquidity
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'row contributors align-items-center'}>
                        <div className={'col-12 col-md-5'}>
                            <h3>
                                Core <br/>
                                Contributors
                            </h3>

                            <div className={'row mt-4'}>
                                <div className={'col-auto'}>
                                    <a href="cosmosation">
                                        <div className={'link'}><i className={'icon-arrow-right'}></i>View all</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-7'}>
                            <Contributors/>
                        </div>
                    </div>

                    <PiechartSection/>

                </div>
            </section>
        );
}

export default ServicesSection;