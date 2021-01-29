<template>
  <div class="tab_div">
    <div style="cursor: pointer" @click="goHome">
      <img class="logo_div" src='../assets/icons/logo.svg'/>
    </div>

    <div class="menu_div">
      <ContentTop/>
      <router-link class="tab_item" to="/">{{$t('lang.首页')}}</router-link>
      <router-link :active-class="'head_tab'" class="tab_item" to="/lend">{{$t('lang.借贷')}}</router-link>
      <router-link :active-class="'head_tab'" class="tab_item" to="/pool">{{$t('lang.矿池')}}</router-link>
    </div>

    <div class="lang_div" @click="changeLangEvent">
      <img class="lang_img" :src="this.$i18n.locale === 'zh-CN'?require('@/assets/icons/en_icon.svg'):require('@/assets/icons/cn_icon.svg')"/>
      <p class="lang_text">{{this.$i18n.locale === 'zh-CN'? '简体中文':'English' }}</p>
    </div>
  </div>
</template>

<script>
   import ContentTop from "./contenttop";

   export default {
      name: "leftmenu",
      components: {ContentTop},
      methods: {
         goHome() {
            this.$router.push({path: '/', });
         },
        changeLangEvent() {
          if ( this.$i18n.locale === 'zh-CN' ) {
            this.$i18n.locale = 'en-US';//关键语句
            console.log('en-US')
          }else {
            this.$i18n.locale = 'zh-CN';//关键语句
            console.log('zh-CN')
          }
        }
      },
   };
</script>

<style lang="less">
.tab_div {
  width: 260px;
  height: 100%;
  border-right: 1px solid #1C1E24;
  display: flex;
  flex-direction: column;
  .logo_div {
    display: block;
    width: 103px;
    height: 83px;
    margin: 84px 78px 53px;
  }
  .menu_div {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    .balance_div {
      width: 179px;
      height: 50px;
      font-size: 12px;
      font-family: GothamProRBold;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 50px;
      border-radius: 5px;
      margin-bottom: 20px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #121b23;
      padding: 0 20px;
    }
    .tab_item {
      background: #121b23;
      width: 179px;
      height: 50px;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 400;
      font-family: AlibabaPuHuiTi-Regular, AlibabaPuHuiTi;
      text-align: center;
      line-height: 50px;
      border-radius: 5px;
      margin-bottom: 20px;
      border-right: 4px solid transparent;
      &:hover, &:focus {
        font-weight: 700 !important;
        background: #121b23 !important;
      }
    }
    .tab_item:after {
      width: 4px;
      height: 50px;
      background: #121b23;
      float: right;
      position: relative;
      bottom: 40px;
    }
  }
  .menu_bg {
    display: block;
    width: 100%;
    height: 411px;
  }
  .lang_div {
    margin: 40px;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    border-radius: 2px;
    border: 1px solid #3E3E50;
    .lang_img {
      width: 20px;
      height: 20px;
      margin-right: 18px;
    }
    .lang_text {
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 17px;
    }
    &:hover, &:focus {
      background: #1C1E24;
    }
  }
}
.head_tab {
  font-weight: 700 !important;
  background: #121b23 !important;
  border-right: 4px solid #81E592 !important;
}
</style>
