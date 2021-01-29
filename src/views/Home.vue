<template>
  <div class="home">
    <section class="top_div">
      <div class="home_top wrapper">
        <h1>A World of Blockchains<br>In Your Browser</h1>

        <div class="top_btn_div">
          <a-button class="red_btn">SEE GAME DEMO</a-button>
          <a-button class="black_btn">DEVELOPERS</a-button>
        </div>

        <p>Saito runs blockchain apps in your browser without cclosed plugins or non-open infrastrycture. Even better,
          it
          pays nodes to run the equipment needed to keep other networks free and decentralized. </p>

        <div class="top_link">
          <span>Lite paper</span>
          <div class="top_line"/>
          <span>Developer Getting Started</span>
          <div class="top_line"/>
          <span>Whitepaper</span>
        </div>
      </div>
    </section>

    <section class="home_banner">
      <div class="banner_div wrapper">
        <a-row class="banner_row" :gutter="20">
          <a-col :span="6" v-for="(item, index) in bannerText" :key="index">
            <div class="banner_item">
              <h3>{{item.title}}</h3>
              <p>{{item.text}}</p>
            </div>
          </a-col>
        </a-row>

        <a-carousel class="banner_column">
          <div class="banner_item" v-for="(item, index) in bannerText" :key="index">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
          </div>
        </a-carousel>
      </div>
    </section>

    <section class="home_icon wrapper">
      <h2>World Class Game Development Toolki</h2>
      <div class="icon_div">
        <a-row :gutter="[{md:0,lg:50}]">
          <a-col :md="24" :lg="8" v-for="(item, index) in iconData" :key="index">
            <div class="icon_item" :style="{backgroundImage: item.src}">
              <p>{{item.text}}</p>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <section class="home_trend">
      <div class="trend_div wrapper">
        <a-row>
          <a-col :md="24" :lg="8" v-for="(item, index) in trendData" :key="index">
            <div class="trend_item" :class="index == 1 && 'trend_hove'">
              <h2>{{item.theme}}</h2>
              <h4>{{item.title}}</h4>
              <p>{{item.text}}</p>
              <img :src="item.src"/>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <section class="home_roadmap">
      <h2>Roadmap</h2>
      <div class="roadmap_div wrapper">
        <div class="roadmap_item" v-for="(item, index) in roadmapData" :key="index">
          <h5 v-show="item.year">{{item.year}}</h5>
          <div class="roadmap_item_right">
            <p>{{item.topText}}</p>
            <div  class="roadmap_item_line" :style="{background: item.topText && 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'}"/>
            <img class="roadmap_item_node" src="../assets/image/dot_icon.png"/>
            <div  class="roadmap_item_line" :style="{background: item.bottomText && 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'}"/>
            <p>{{item.bottomText}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="supporters_foot">
      <div class="supporters_div wrapper">
        <h2>Our Supporters</h2>
        <div class="icon_div">
          <a-row :gutter="[{md:0,lg:15}]">
            <a-col :xs="12" :sm="12" :md="12" :lg="8" v-for="(item, index) in footIcon" :key="index">
              <div class="icon_item">
                <img :src="item.src"/>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>

      <div class="foot_div foot_pc wrapper">
        <div class="foot_column">
          <div class="foot_left">
            <img src="../assets/image/min_logo.svg"/>
          </div>
          <div>
            <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_github.svg" alt="github"/></a-button>
            <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_discord.svg" alt="discord"/></a-button>
            <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_javascript.svg" alt="javascript"/></a-button>
            <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_spectrum.svg" alt="spectrum"/></a-button>
            <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_html5.svg" alt="html5"/></a-button>
            <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_css3.svg" alt="css3"/></a-button>
            <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_reddit.svg" alt="reddit"/></a-button>
            <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_Twitter.svg" alt="Twitter"/></a-button>
          </div>
        </div>

        <div class="foot_column" style="border-bottom: 1px solid #1C1C23">
          <div class="foot_left">
            <p>© Proclus Technologies. All Rights Reserved</p>
          </div>
          <div>
            <a-button class="btn_link" type="link" href="" target="_blank"><img src="../assets/image/email_icon.svg" alt="email_icon"/>info@saito.tech</a-button>
            <a-button class="btn_link" type="link" href="" target="_blank">Arcade</a-button>
            <a-button class="btn_link" type="link" href="" target="_blank">Developers</a-button>
            <a-button class="btn_link" type="link" href="" target="_blank">Community</a-button>
            <a-button class="btn_link btn_lang" type="link" @click="changeLangEvent">
              <img
                  :class="this.$i18n.locale === 'zh-CN'?'en_lang_img':'cn_lang_img'"
                  :src="this.$i18n.locale === 'zh-CN'?require('@/assets/image/en_Icon_bot.svg'):require('@/assets/image/cn_Icon_bot.svg')"
                  alt="cn_Icon_bot"
              />
            </a-button>
          </div>
        </div>
      </div>

      <div class="foot_div foot_media wrapper">
        <div class="foot_left">
          <img src="../assets/image/min_logo.svg"/>
        </div>
        <div class="foot_right">
          <a-button class="btn_link" type="link" href="" target="_blank"><img src="../assets/image/email_icon.svg" alt="email_icon"/>info@saito.tech</a-button>
          <a-button class="btn_link btn_lang" type="link" @click="changeLangEvent">
            <img
                :class="this.$i18n.locale === 'zh-CN'?'en_lang_img':'cn_lang_img'"
                :src="this.$i18n.locale === 'zh-CN'?require('@/assets/image/en_Icon_bot.svg'):require('@/assets/image/cn_Icon_bot.svg')"
                alt="cn_Icon_bot"
            />
          </a-button>
        </div>
        <div class="foot_right">
          <a-button class="btn_link" type="link" href="" target="_blank">Arcade</a-button>
          <a-button class="btn_link" type="link" href="" target="_blank">Developers</a-button>
          <a-button class="btn_link" type="link" href="" target="_blank">Community</a-button>
        </div>
        <div class="foot_right">
          <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_github.svg" alt="github"/></a-button>
          <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_discord.svg" alt="discord"/></a-button>
          <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_javascript.svg" alt="javascript"/></a-button>
          <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_spectrum.svg" alt="spectrum"/></a-button>
          <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_html5.svg" alt="html5"/></a-button>
          <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_css3.svg" alt="css3"/></a-button>
          <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_reddit.svg" alt="reddit"/></a-button>
          <a-button class="link_btn" type="link" href="" target="_blank"><img src="../assets/image/brand_Twitter.svg" alt="Twitter"/></a-button>
        </div>
        <div class="foot_left">
          <p>© Proclus Technologies. All Rights Reserved</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                bannerText: [
                    {title: 'True Peer-to-Peer Web 3.0 Toolkit', text: 'Peer-to-peer ZKP-based gaming/economic functions like card dealing, blind auctions, and random number generation'},
                    {title: 'Polkadot Ecosystem', text: 'Full support for Polkadot and other leading web3 blockchains.'},
                    {title: 'Powerful Blockchain', text: 'Saito supports data-intensive application like games and social media, get as much consensus as you need'},
                    {title: 'Web DApp Platform', text: 'Saito also provides an easy-to-use DApp platform so devs can immediately get started, includes mobile friendly tools like QR codes/scanners'},
                    {title: 'Web 3.0 PKI Infrastructure', text: 'Use Saito the way Blockchains should be, as a decentralized trusted 3rd party, to finally handle data authentication and encyption in the right way'},
                    {title: 'Open Infrastructure', text: 'he infrastructure that keeps other blockchains running will run on Saito in a decentralize way'},
                    {title: 'Onchain Deployment', text: 'Distribute your DApp onchain in a true peer-to-peer way(coming soon, proof-of-concept demo available)'},
                    {title: 'Proper Economics', text: 'An elegant economic design that scales with throughput.'},
                ],
                iconData: [
                    {src: 'url(' + require('@/assets/image/truly_bg.svg') + ')', text: 'Truly Peer \n to Peer'},
                    {src: 'url(' + require('@/assets/image/data_bg.svg') + ')', text: 'Scalable \n Onchain \n Data'},
                    {src: 'url(' + require('@/assets/image/provably_bg.svg') + ')', text: 'Provably-Fair \n Cryptographically \n Secure Apps'},
                    {src: 'url(' + require('@/assets/image/browser_bg.svg') + ')', text: 'Browser \n Applications \n Without \n Metamask'},
                    {src: 'url(' + require('@/assets/image/js_bg.svg') + ')', text: 'All with the \n tools you know \n and love'},
                    {src: 'url(' + require('@/assets/image/qrcodes_bg.svg') + ')', text: 'QRCodes \n and Scanning'},
                ],
                trendData: [
                    {src: require('@/assets/image/day_icon.svg'), theme: 'Data Display', title: '30,000+ ', text: 'Transactions a Day \n and Growing' },
                    {src: require('@/assets/image/tana_icon.svg'), theme: 'Data Display', title: '7+ Million', text: 'Transactions' },
                    {src: require('@/assets/image/app_icon.svg'), theme: 'Data Display', title: '30+ Popular', text: ' Applications' },
                ],
                roadmapData: [
                    {year: '2020', topText: 'Arcade and \n community growth', bottomText: 'New Game Releases\n on Arcade'},
                    {year: '', topText: 'Team \n expansion',bottomText: 'Expansion of \n ERP/Logistics software'},
                    {year: '', topText: 'Social and \n traditional marketing', bottomText: 'Onboarding 3rd \n Party Developers'},
                    {year: '', topText: 'Fundraising through \n discount tranches', bottomText: ''},
                    {year: '2021', topText: 'Legals and Structure \n for Pubic Sale', bottomText: 'Hardening and \n Security Work'},
                    {year: '', topText: 'Legals and Structure \n for Pubic Sale', bottomText: 'Hardening and \n Security Work'},
                    {year: '', topText: 'Further Industry \n Partnerships', bottomText: 'Developer SDK'},
                    {year: '', topText: 'Listings', bottomText: 'Networking and \n Stack Optimisation'},
                    {year: '', topText: '', bottomText: 'Third Party Node \n Implementation'},
                ],
                footIcon: [
                    {src: require('@/assets/image/inblockchain.png')},
                    {src: require('@/assets/image/fengshui.png')},
                    {src: require('@/assets/image/ausvic.png')},
                    {src: require('@/assets/image/ngc.png')},
                    {src: require('@/assets/image/fission.png')},
                    {src: require('@/assets/image/bch.png')},
                ],
            }
        },
        methods: {
            changeLangEvent() {
                if ( this.$i18n.locale === 'zh-CN' ) {
                    this.$i18n.locale = 'en-US';
                }else {
                    this.$i18n.locale = 'zh-CN';
                }
            }
        },
    }
</script>

<style lang="less" scoped>
  .wrapper {
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
  }
  .home {
    width: 100%;
    .top_div {
      background-image: url("../assets/image/top_bg.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .home_top {
      background-image: url("../assets/image/banner_logo.svg");
      background-repeat: no-repeat;
      h1 {
        color: #1C1C23;
        font-size: 60px;
        line-height: 71px;
        font-family: WorkSans-Bold, WorkSans;
      }
      .top_btn_div {
        display: flex;
        flex-direction: row;
        padding: 50px 0;
        .red_btn, .black_btn {
          width: 200px;
          margin-right: 20px;
          font-size: 20px;
          font-family: WorkSans-Bold, WorkSans;
        }
      }
      p {
        width: 336px;
        font-size: 12px;
        color: #000000;
        line-height: 20px;
        font-family: WorkSans-Regular, WorkSans;
      }
      .top_link {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 50px;
        span {
          color: #000000;
          font-size: 14px;
          line-height: 20px;
          font-family: WorkSans-Regular, WorkSans;
        }
        .top_line {
          width: 1px;
          height: 12px;
          background: #A4A4A4;
          margin: 0 10px;

        }
      }
    }
    .home_banner {
      background: linear-gradient(135deg, #0A0A0A 0%, #58585C 100%);
      .banner_div {
        padding-top: 61px;
        padding-bottom: 11px;
        .banner_item {
          padding-bottom: 50px;
          h3 {
            color: #FE7A36;
            font-size: 16px;
            line-height: 19px;
            font-family: WorkSans-Bold, WorkSans;
            margin-bottom: 20px;
          }
          p {
            color: #FFFFFF;
            font-size: 12px;
            line-height: 20px;
            font-family: WorkSans-Regular, WorkSans;
          }
        }
      }
    }
    .home_icon {
      padding-top: 80px;
      padding-bottom: 19px;
      h2 {
        color: #1C1C23;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        font-family: WorkSans-Bold, WorkSans;
      }
      .icon_div{
        padding: 60px 0;
        .icon_item {
          width: 100%;
          height: 200px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
           p {
             color: #FFFFFF;
             font-size: 20px;
             line-height: 24px;
             white-space: pre;
             text-align: right;
             font-family: WorkSans-Medium, WorkSans;
           }
        }
      }
    }
    .home_trend {
      .trend_div {
        .trend_item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          h2 {
            display: none;
            color: #1C1C23;
            font-size: 30px;
            line-height: 35px;
            font-family: WorkSans-Bold, WorkSans;
          }
          h4 {
            color: #1C1C23;
            font-size: 20px;
            line-height: 24px;
            font-family: WorkSans-Bold, WorkSans;
            padding-top: 57px;
            padding-bottom: 5px;
          }
          p {
            height: 48px;
            color: #1C1C23;
            font-size: 14px;
            line-height: 16px;
            white-space: pre;
            text-align: center;
            font-family: WorkSans-Regular, WorkSans;
          }
        }

        .trend_hove {
          margin: -30px 0;
          width: 387px;
          height: 503px !important;
          background: #FFFFFF;
          box-shadow: 0px 5px 20px 0px rgba(205, 205, 205, 0.5);
          h2 {
            display: block;
          }
        }
      }
    }
    .home_roadmap {
      background-image: url("../assets/image/Roadmap_bg.png");
      background-repeat: no-repeat;
      h2 {
        color: #FFFFFF;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        font-family: WorkSans-Bold, WorkSans;
      }
      .roadmap_div::-webkit-scrollbar {
        height: 4px;
      }
      .roadmap_div::-webkit-scrollbar-track {
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.3)
      }
      .roadmap_div::-webkit-scrollbar:vertical {
        width: 6px;
      }
      .roadmap_div::-webkit-scrollbar:horizontal {
        height: 6px;
      }
      .roadmap_div::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #FFFFFF;
      }
      .roadmap_div {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
        padding-bottom: 45px;

        .roadmap_item {
          display: flex;
          flex-direction: row;
          align-items: center;
          h5 {
            color: #FFFFFF;
            font-size: 30px;
            line-height: 35px;
            font-family: WorkSans-Bold, WorkSans;
            padding-bottom: 30px;
          }
          .roadmap_item_right {
            width: 240px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .roadmap_item_line {
              width: 1px;
              height: 115px;
            }
            .roadmap_item_node {
              width: 34px;
              height: 34px;
            }
            p {
              height: 42px;
              color: #FFFFFF;
              font-size: 18px;
              white-space: pre;
              line-height: 21px;
              text-align: center;
              font-family: WorkSans-Bold, WorkSans;
            }
          }
        }
      }

    }
    .supporters_foot {
      background: #000000;
      .supporters_div {
        width: 100%;
        h2 {
          color: #FFFFFF;
          font-size: 30px;
          line-height: 35px;
          text-align: center;
          font-family: WorkSans-Bold, WorkSans;
        }
        .icon_div{
          padding: 60px 0;
          .icon_item {
            padding: 0 15px 30px;
            img {
              width: 100%;
            }
          }
        }
      }
      .foot_div {
        .foot_column {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding-top: 10px;
          padding-bottom: 74px;
        }
        .foot_left {
          flex: 1;
          p {
            color: #5E5E5E;
            font-size: 14px;
            line-height: 20px;
            font-family: PingFangSC-Regular, PingFang SC;
          }
        }
        .link_btn {
          padding: 6px;
        }
        .btn_link {
          color: #5E5E5E;
          font-size: 12px;
          line-height: 17px;
          font-family: PingFangSC-Regular, PingFang SC;
          img {
            margin-right: 10px;
          }
        }
        .btn_lang {
          &:hover {
            .en_lang_img {
              content: url("../assets/image/en_Icon_bot_hover.svg");
            }
            .cn_lang_img {
              content: url("../assets/image/cn_Icon_bot_hover.svg");
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px){
    .home {
      .home_top {
        padding-top: 80px;
        padding-bottom: 80px;
        background-size: 337px 384px;
        background-position: right center;
        h1 {
          font-size: 60px;
          line-height: 71px;
        }
        .top_btn_div {
          flex-direction: row;
        }
      }
      .home_banner {
        .banner_div {
          .banner_column {
            display: none;
          }
          .banner_row {
            display: block;
          }
        }
      }
      .home_icon {
        .icon_div {
          padding: 60px 0;
          .icon_item {
            margin-bottom: 50px;
          }
        }
      }
      .home_trend {
        border-top: 1px solid #CCCCCC;
        border-bottom: 1px solid #CCCCCC;
        margin-bottom: 131px;
        .trend_div {
          padding: 0 50px;
          .trend_item {
            height: 441px;
          }
        }
      }
      .home_roadmap {
        height: 820px;
        padding-top: 80px;
        padding-bottom: 110px;
        background-size: 100% 100%;
      }
      .supporters_foot {
        .supporters_div {
          padding: 100px 0 18px;
          .icon_div{
            padding: 60px 0;
            .icon_item {
              padding: 0 15px 30px;
              img {
                width: 100%;
              }
            }
          }
        }
        .foot_pc {
          .btn_link {
            padding: 0 0 0 40px;
          }
        }
        .foot_media {
          display: none;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .wrapper {
      padding-left: 20px;
      padding-right: 20px;
    }
    .home {
      .home_top {
        padding-top: 320px;
        background-size: 60%;
        background-position: center 5%;
        h1 {
          font-size: 30px;
          line-height: 35px;
          text-align: center;
        }
        .top_btn_div {
          flex-direction: column;
          align-items: center;
        }
        p, .top_link {
          display: none;
        }
      }
      .home_banner {
        .banner_div {
          .banner_column {
            display: block;
          }
          .banner_row {
            display: none;
          }
        }
      }
      .home_icon {
        .icon_div {
          padding: 30px 0;
          .icon_item {
            margin-bottom: 20px;
          }
        }
      }
      .home_trend {
        border: none;
        margin-bottom: 65px;
        .trend_div {
          .trend_item {
            height: 220px;
          }
        }
      }
      .home_roadmap {
        height: 620px;
        padding: 80px 20px 110px;
        background-size: auto 620px;
      }
      .supporters_foot {
        padding: 50px 0 18px;
        .supporters_div {
          .icon_div{
            padding: 30px 0;
            .icon_item {
              padding: 0 15px 30px;
              img {
                width: 100%;
              }
            }
          }
        }
        .foot_pc {
          display: none;
        }
        .foot_media {
          .foot_left {
            padding-bottom: 30px;
          }
          .btn_link {
            padding: 0 20px 0 0;
          }
          .link_btn {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>