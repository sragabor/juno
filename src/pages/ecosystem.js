import * as React from "react"
import Layout from "../components/layout";
import Ecosystem from "../components/ecosystem";

const menu = require('../contents/urls.json');
const ecosystems = require('../contents/ecosystems.json');

const EcosystemPage = () => {
    return (
        <div>
            <title>Juno - Ecosystem</title>
            <Layout>
                <section className={'hero-section'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-12 col-lg-8'}>
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
                                <h4 className={'mb-5'}>Featured and New</h4>
                            </div>

                            {ecosystems.map(ecosystem => {
                                return (
                                    <div className={'col-6 col-md-3'}>
                                        <Ecosystem ecosystem={ecosystem}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <section className={'ecosystems-section pt-5 mt-5'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                <h4 className={'mb-5'}>Browse Juno ecosystem</h4>
                            </div>

                            {ecosystems.map(ecosystem => {
                                return (
                                    <div className={'col-6 col-md-3'}>
                                        <Ecosystem ecosystem={ecosystem}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default EcosystemPage
