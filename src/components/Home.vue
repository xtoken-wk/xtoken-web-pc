<template>
  <div class="wrap">
    <router-view class="content"></router-view>
    <XFooter></XFooter>
    <XHeader></XHeader>
  </div>
</template>

<script type="text/ecmascript-6">
  import XHeader from './XHeader.vue'
  import XFooter from './XFooter.vue'

  export default {
    components: {
      XHeader,
      XFooter
    },

  }
</script>
<style scoped>
  .wrap {
    position: relative;
    height: 100%;
    /*display: flex;*/
    /*flex-direction: column;*/
  }

  .content {
    min-height: calc(100% - 120px);
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
