<template>
    <div class="footer">
      <div class="footer-tabs">
        <a class="tab" href="https://www.reddit.com/user/XToken_org/" target="_blank">REDDIT</a>
        <a class="tab" href="https://medium.com/@xorder" target="_blank">MEDIUM</a>
        <a class="wechat" href="javascript:void(0)">
          WECHAT
          <img class="code" src="static/image/foot_wechat.png">
        </a>
        <a class="tab" href="mailto:contact@xorder.ai" target="_blank">CONTACT@XORDER.AI</a>
        <a class="tab" href="http://trans.xorder.ai:9090" target="_blank">STARGAZERS</a>
      </div>
      <p class="explain">X-Order ©2018 All rights reserved</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data(){
        return{

        }
      }
    }
</script>
<style scoped>
  .footer{
    background:#fafafa;
    height:120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-tabs{
    display: flex;
  }

  .tab{
    margin: 0 20px;
    text-decoration : none;
    opacity:0.6;
    font-family:NunitoSans-SemiBold;
    font-size:16px;
    color:#00173b;
    letter-spacing:0;
    text-align:justify;
  }

  .explain{
    opacity:0.5;
    font-size:14px;
    color:#00173b;
    letter-spacing:0;
    text-align:justify;
    margin: 18px 0 0 0;
  }

  .wechat{
    margin: 0 20px;
    font-size:16px;
    color:rgba(0,23,59,0.6);
    text-decoration : none;
    position: relative;
    overflow: visible;
  }

  .code{
    position: absolute;
    top: -130px;
    left: -50px;
    opacity: 0;
    transition: opacity 0.2s;
    border-radius: 2px;
    overflow: visible;
  }

  .wechat:hover .code{
    opacity: 1;
  }

</style>
