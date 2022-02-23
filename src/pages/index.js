import * as React from "react"
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";

import HeroVideo from "../videos/hero.mp4"
import EcosystemVideo from "../videos/ecosystem.mp4"
import PiechartVideo from "../videos/piechart.mp4"

import Contributors from "../components/contributors";

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
                                      <div className={'link'}><i className={'icon-arrow-right'}></i> Ecosystem </div>
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
                               <div className={'link'}><i className={'icon-arrow-right'}></i> View Ecosystem</div>
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
                                <div className={'link'}><i className={'icon-arrow-right'}></i> Learn more</div>
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
                                                placeholder="blurred"
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
                                                placeholder="blurred"
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
                                                placeholder="blurred"
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
                                                placeholder="blurred"
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

                    <div className={'row pt-5 align-items-top'}>
                        <div className={'col-12 col-md-6 pe-md-5'}>
                            <StaticImage
                                src={'../images/cosmwasm.png'}
                                alt={'Interoperable Smart Contracts - Home of CosmWasm'}
                                width={612}
                                height={570}
                                placeholder="blurred"
                            />
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <legend>COSMWASM</legend>
                            <h2 className={'mb-4'}>Interoperable Smart Contracts - Home of CosmWasm</h2>
                            <div className={'text-box'}>
                                Simple, secure and fast virtual machine set up to sandbox or partition your application’s actions for better testing, security, performance and speed.
                            </div>

                            <a href={process.env.COSMWASMPAGE}>
                                <div className={'link'}><i className={'icon-arrow-right'}></i> Learn more</div>
                            </a>

                            <div className={'row mt-4'}>
                                <div className={'col-6'}>
                                    <div className={'feature'}>
                                        <div className={'image ms-n5 mb-2'}>
                                            <StaticImage
                                                src={'../images/speed.png'}
                                                alt={'Speed'}
                                                width={158}
                                                height={177}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Speed</div>
                                        <div className={'text-box'}>Built on the Cosmos SDK ensures high throughput and fast contract execution</div>
                                    </div>
                                </div>
                                <div className={'col-6'}>
                                    <div className={'feature align-top'}>
                                        <div className={'image mb-4 ms-n4'}>
                                            <StaticImage
                                                src={'../images/cost.png'}
                                                alt={'Cost'}
                                                width={154}
                                                height={178}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Cost</div>
                                        <div className={'text-box'}>Low cost deployment up to 35000 times cheaper than gen 2 blockchain networks</div>
                                    </div>
                                </div>
                                <div className={'col-6'}>
                                    <div className={'feature'}>
                                        <div className={'image mb-4 ms-n3'}>
                                            <StaticImage
                                                src={'../images/interoperability.png'}
                                                alt={'Interoperability'}
                                                width={176}
                                                height={180}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Interoperability</div>
                                        <div className={'text-box'}>Deployment on Juno and interoperable with all networks in the cosmos ecosystem via IBC</div>
                                    </div>
                                </div>
                                <div className={'col-6'}>
                                    <div className={'feature align-top'}>
                                        <div className={'image mb-5 ms-n2'}>
                                            <StaticImage
                                                src={'../images/smart-contracts.png'}
                                                alt={'Smart Contracts'}
                                                width={186}
                                                height={159}
                                                placeholder="blurred"

                                            />
                                        </div>
                                        <div className={'title'}>Smart Contracts</div>
                                        <div className={'text-box'}>Code & deploy your contracts in multiple languages via the powerful CosmWasm Contract framework</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                        <div className={'junoswap-graph'}>
                            <StaticImage
                                src={'../images/junoswap.png'}
                                alt={'Smart Contracts'}
                                width={827}
                                height={781}
                                placeholder="blurred"
                            />
                        </div>
                        <div className={'col-12 col-md-5 pe-4'}>
                            <h2>Easy access to Osmosis and JunoSwap</h2>
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
                        <div className={'col-12 col-md-6'}>
                            <h2>
                                Core <br/>
                                Contributors
                            </h2>

                            <div className={'row mt-4'}>
                                <div className={'col-auto'}>
                                    <a href="cosmosation">
                                        <div className={'link'}><i className={'icon-arrow-right'}></i>View all</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <Contributors/>
                        </div>
                    </div>

                    <div className={'row piechart'}>
                        <div className={'col-12 col-md-8'}>
                            <div className={'video-container'}>
                                <div className={'video-wrapper'}>
                                    <video autoPlay={true} loop={false} playsInline={true} muted={true}>
                                        <source src={PiechartVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-4'}></div>
                    </div>

                </div>
            </section>
        </Layout>
      </main>
  )
}

export default IndexPage
