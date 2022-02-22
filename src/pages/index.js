import * as React from "react"
import Layout from "../components/layout";

import HeroVideo from "../videos/hero.mp4"
import EcosystemVideo from "../videos/ecosystem.mp4"

const IndexPage = () => {
  return (
      <main>
        <title>Juno - Home Page</title>
        <Layout>
          <section className={'hero-section'}>
              <div className={'video-container'}>
                  <div className={'video-wrapper'}>
                      <video autoPlay={true} loop={true} playsInline={true}>
                          <source src={HeroVideo} type="video/mp4" />
                      </video>
              </div>
              </div>
              <div className={'container'}>
                  <div className={'row'}>
                      <div className={'col-12 col-md-6'}>
                          <h1>Smart <br/>
                              Contracts <br/>
                              Evolved
                          </h1>

                          <div className={'text-box'}>
                              Use & create interoperable applications on Juno. <br/>
                              A decentralized, public, permission-less network for cross-chain smart contracts.
                          </div>

                          <div className={'row'}>
                              <div className={'col-auto'}>
                                  <a href={process.env.GETSTARTEDPAGE}>
                                      <button type={'button'}>Get Started</button>
                                  </a>
                              </div>
                              <div className={'col-auto'}>
                                  <a href={process.env.ECOSYSTEMPAGE}>
                                      <div className={'link'}><i className={'icon-arrow'}></i> Ecosystem </div>
                                  </a></div>
                          </div>

                      </div>
                  </div>
              </div>
          </section>

           <section className={'ecosystem-section'}>
               <div className={'container'}>
                   <div className={'row align-items-center'}>
                       <div className={'col-12 col-md-6'}>
                            <div className={'video-container'}>
                                <div className={'video-wrapper'}>
                                    <video autoPlay={true} loop={true} playsInline={true}>
                                        <source src={EcosystemVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                       </div>
                       <div className={'col-12 col-md-6'}>
                           <legend>ECOSYSTEM</legend>
                           <h2>47 apps, contracts, tools and 1400 DAO's built on Juno</h2>
                           <div className={'text-box'}>
                               Discover a wide variety of dapps, contracts and tools, built in the Junø ecosystem by developers and contributors from across the globe
                           </div>
                           <a href={process.env.ECOSYSTEMPAGE}>
                               <div className={'link'}><i className={'icon-arrow'}></i> View Ecosystem</div>
                           </a>
                       </div>
                   </div>
               </div>
           </section>

        </Layout>
      </main>
  )
}

export default IndexPage
