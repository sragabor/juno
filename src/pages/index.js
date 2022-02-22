import * as React from "react"
import Layout from "../components/layout";

import HeroVideo from "../videos/hero.mp4"
import EcosystemVideo from "../videos/ecosystem.mp4"
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
  return (
      <main>
        <title>Juno - Home Page</title>
        <Layout>
          <section className={'hero-section'}>
              <div className={'video-container'}>
                  <div className={'video-wrapper'}>
                      <video autoPlay={true} loop={true} playsInline={true} muted={true}>
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
                                    <video autoPlay={true} loop={true} playsInline={true} muted={true}>
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

            <section className={'hacks-section'}>
                <div className={'bg'}/>
                <div className={'container'}>
                    <div className={'row align-items-center mb-5'}>
                        <div className={'col-12 col-md-6 pe-md-5'}>
                            <h2 className={'mb-4'}>Hacks and <br/>
                            Bounties</h2>
                            <div className={'text-box'}>
                                <p>
                                    The Moneta Hacks are the largest incentivised smart contract challenges in the world. Kickoff will be the completion of the Juno-1 main-net upgrade to support Cosmwasm.
                                </p>
                                <p>
                                    Finally developers from across the world may deploy smart contracts onto the permission-less interoperable smart contract base layer called Juno.
                                </p>
                            </div>
                            <a href={process.env.BOUNTINGPAGE}>
                                <div className={'link'}><i className={'icon-arrow'}></i> Learn more</div>
                            </a>
                        </div>
                        <div className={'col-12 col-md-6 ps-md-5'}>
                            <div className={'row'}>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty first'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/decentralized-finance.png'}
                                                alt={'Decentralized Finance'}
                                                width={218}
                                                height={96}
                                            />
                                        </div>
                                        <div className={'title'}>Decentralized Finance</div>
                                        <div className={'text-box'}>
                                            AMM/DEX, Lending/Borrowing, Derivatives/Super Fluid Staking etc.
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/gaming.png'}
                                                alt={'Gaming/Gamification'}
                                                width={96}
                                                height={97}
                                            />
                                        </div>
                                        <div className={'title'}>Gaming/Gamification</div>
                                        <div className={'text-box'}>
                                            Marketplaces, Inter NFT applications & inter-nft standard improvements.
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/non-fungible-tokens.png'}
                                                alt={'Non Fungible Tokens'}
                                                width={96}
                                                height={96}
                                            />
                                        </div>
                                        <div className={'title'}>Non Fungible Tokens</div>
                                        <div className={'text-box'}>
                                            Privacy preserving protocols on Juno
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/privacy.png'}
                                                alt={'Privacy'}
                                                width={96}
                                                height={96}
                                            />
                                        </div>
                                        <div className={'title'}>Privacy</div>
                                        <div className={'text-box'}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'row pt-5 align-items-center'}>
                        <div className={'col-12 col-md-6 pe-md-5'}>
                            <StaticImage
                                src={'../images/cosmwasm.png'}
                                alt={'Interoperable Smart Contracts - Home of CosmWasm'}
                                width={612}
                                height={570}
                            />
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <legend>COSMWASM</legend>
                            <h2 className={'mb-4'}>Interoperable Smart Contracts - Home of CosmWasm</h2>
                            <div className={'text-box'}>
                                Simple, secure and fast virtual machine set up to sandbox or partition your application’s actions for better testing, security, performance and speed.
                            </div>

                            <a href={process.env.COSMWASMPAGE}>
                                <div className={'link'}><i className={'icon-arrow'}></i> Learn more</div>
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
