<template>
  <div class="header">
    <div class="wrapper">
      <div class="head-div">
        <div style="cursor: pointer" @click="goHome">
          <img class="nav_logo" src='../assets/image/top_logo.svg'/>
        </div>
        <div class="menu_div">
          <router-link :active-class="'menu_tab'" class="btn_div" to="/">Arcade</router-link>
          <router-link :active-class="'menu_tab'" class="btn_div" to="/">Developers</router-link>
          <router-link :active-class="'menu_tab'" class="btn_div" to="/">Community</router-link>
          <router-link :active-class="'menu_tab'" class="btn_div" to="/">Blog</router-link>
        </div>
        <div class="lang_wallet">
          <a-button class="user_btn" type="link">
            <img class="user_img" src="../assets/image/user_img.png"/>
            <span>tmC5ebAZDYb9...</span>
          </a-button>

          <a-button class="lang_btn" type="link" @click="changeLangEvent">
            <img
                class="lang_img"
                :src="this.$i18n.locale === 'zh-CN'?require('@/assets/image/en_Icon.svg'):require('@/assets/image/cn_Icon.svg')"
            />
            <span>{{this.$i18n.locale === 'zh-CN'?'中文':'English'}}</span>
          </a-button>

          <a-button class="menu_btn" type="link">
            <img class="menu_img" src="../assets/image/top_menu.svg"/>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   export default {
      name: "topmenu",
      data() {
         return {

         };
      },
      methods: {
         goHome() {
            this.$router.push({path: '/', });
         },
        changeLangEvent() {
          if ( this.$i18n.locale === 'zh-CN' ) {
            this.$i18n.locale = 'en-US';
          }else {
            this.$i18n.locale = 'zh-CN';
          }
        }
      },
   };
</script>

<style lang="less">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #FFFFFF;
    z-index: 999;
    .wrapper {
      width: 100%;
      max-width: 1160px;
      margin: 0 auto;
    }
    .head-div {
      width: 100%;
      height: 64px;
      line-height: 64px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .nav_logo {
        display: block;
        width: 89px;
        height: 30px;
        margin-right: 40px;
      }
      .menu_div {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        .btn_div {
          width: 80px;
          font-size: 14px;
          font-family: WorkSans-Medium, WorkSans;
          color: #1C1C23;
          line-height: 16px;
          text-align: center;
          margin-right: 20px;
        }
      }
      .menu_tab {
        font-family: WorkSans-Bold, WorkSans;
      }
      .lang_wallet {
        display: flex;
        flex-direction: row;
        align-items: center;
        .user_btn, .lang_btn {
          color: #1C1C23;
          font-size: 12px;
          line-height: 17px;
          font-family: PingFangSC-Semibold, PingFang SC;
          .user_img, .lang_img {
            width: 20px;
            height: 20px;
            margin: 7px;
          }
        }
        .menu_img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .header {
      .wrapper {
        padding-left: 20px;
        padding-right: 20px;
        border-bottom: 1px solid #CCCCCC;
      }
      .head-div {
        justify-content: space-between;
        .menu_div {
          display: none;
        }
        .lang_wallet {
          .user_btn {
            display: none;
          }
        }
      }
    }
  }
</style>
