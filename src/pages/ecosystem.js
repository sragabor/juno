import * as React from "react"
import Layout from "../components/layout";
import EcosystemSlider from "../components/ecosystem-slider";
import Ecosystem from "../components/ecosystem";
import EcosystemVideoMov from "../videos/ecosystem.mp4";
import EcosystemVideo from "../videos/ecosystem.webm";
import EcosystemPoster from "../videos/ecosystem.png";

const menu = require('../contents/urls.json');
const ecosystems = require('../contents/ecosystems.json');

const EcosystemPage = () => {
    return (
        <div className={'ecosystem-page'}>
            <Layout>
                <section className={'hero-section'}>
                    <div className={'container'}>
                        <div className={'video-container'}>
                            <div className={'video-wrapper'}>
                                <div className={'video-bg'}/>
                                <video autoPlay={true} loop={true} playsInline={true} muted={true} poster={EcosystemPoster}>
                                    <source src={EcosystemVideoMov} type='video/mp4;codecs="hvc1"'/>
                                    <source src={EcosystemVideo} type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-12 col-sm-8 col-xl-10'}>
                                <h1 data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000">47 apps, contracts, tools and 1400 DAO's built on Juno
                                </h1>

                                <div className={'text-box'} data-sal="fade"
                                     data-sal-delay="400"
                                     data-sal-duration="1000">
                                    Discover a wide variety of dapps, contracts and tools, built in the Junø ecosystem by developers and contributors from across the globe.
                                </div>

                                <div className={'row'} data-sal="fade"
                                     data-sal-delay="600"
                                     data-sal-duration="1000">
                                    <div className={'col-auto'}>
                                        <a href={menu["start-searching"]}>
                                            <button type={'button'}>Start searching</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={'ecosystems-section'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                <h4 className={'mb-3 mb-lg-4 mb-xl-5'}
                                    data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000">Featured and New</h4>
                            </div>
                            <EcosystemSlider/>
                        </div>
                    </div>
                </section>

                <section className={'search-section pt-5 mt-4 mt-lg-5'}>
                    <div className={'container'}>

                        <div className={'row'}>
                            <div className={'col-12'}>
                                <h4 className={'mb-3 mb-lg-4 mb-xl-5'}
                                    data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000">Browse Juno ecosystem</h4>
                            </div>

                            <div className={'col-12 pb-5'}>
                                <div className={'row justify-content-between'}>
                                    <div className={'col-12 col-lg-4'}>
                                        <div className={'search-field'}>
                                            <input type="text" className={'form-control'} placeholder={'Search'}/>
                                        </div>
                                    </div>
                                    <div className={'col-12 col-lg-auto'}>
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button className="nav-link active" id="nav-all-tab"
                                                        data-bs-toggle="tab" data-bs-target="#nav-all" type="button"
                                                        role="tab" aria-controls="nav-all" aria-selected="true">All
                                                </button>
                                                <button className="nav-link" id="nav-dapp-tab"
                                                        data-bs-toggle="tab" data-bs-target="#nav-dapp" type="button"
                                                        role="tab" aria-controls="nav-dapp" aria-selected="true">Dapp
                                                </button>
                                                <button className="nav-link" id="nav-contracts-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-contracts" type="button" role="tab"
                                                        aria-controls="nav-contracts" aria-selected="false">Contracts
                                                </button>
                                                <button className="nav-link" id="nav-tools-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-tools" type="button" role="tab"
                                                        aria-controls="nav-tools" aria-selected="false">Tools
                                                </button>
                                                <button className="nav-link" id="nav-dao-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-dao" type="button" role="tab"
                                                        aria-controls="nav-dao" aria-selected="false">Dao
                                                </button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>


                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-all" role="tabpanel"
                                     aria-labelledby="nav-all-tab">
                                    <div className={'row'}>
                                        {ecosystems.map(ecosystem => {
                                            return (
                                                <div className={'col-12 col-sm-6 col-md-3 p-2'}>
                                                    <Ecosystem ecosystem={ecosystem}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="nav-dapp" role="tabpanel"
                                     aria-labelledby="nav-dapp-tab">
                                    <div className={'row'}>
                                        {ecosystems.map(ecosystem => {
                                            return (
                                                <div className={'col-6 col-md-3 p-2'}>
                                                    <Ecosystem ecosystem={ecosystem}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-contracts" role="tabpanel"
                                     aria-labelledby="nav-contracts-tab">dsadsad
                                </div>
                                <div className="tab-pane fade" id="nav-tools" role="tabpanel"
                                     aria-labelledby="nav-tools-tab">
                                    <div className={'row'}>
                                        {ecosystems.map(ecosystem => {
                                            return (
                                                <div className={'col-6 col-md-3 p-2'}>
                                                    <Ecosystem ecosystem={ecosystem}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-dao" role="tabpanel"
                                     aria-labelledby="nav-dao-tab">
                                    <div className={'row'}>
                                        {ecosystems.map(ecosystem => {
                                            return (
                                                <div className={'col-6 col-md-3 p-2'}>
                                                    <Ecosystem ecosystem={ecosystem}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default EcosystemPage
