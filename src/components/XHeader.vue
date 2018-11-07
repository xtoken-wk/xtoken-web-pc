<template>
  <div id="header" :class="{'show-bg': showBg}">
    <div class="header-content">
      <img src="static/image/xorder_logo.png">
      <div style="flex: 1"></div>
      <div class="header-titles">
        <div class="header-title" v-for="(item,index) of list">
          <p :class="select==index?'title select':'title'" @click="jumpPage(index,item.path)">{{item.title}}</p>
          <div class="title-lines" v-show="(select == index)&&show">
            <div class="title-line"></div>
          </div>
          <div class="hiring" v-if="index==(list.length-1)">
            <p class="lang" @click="language(0)">中文</p>
            <div class="lang-line"></div>
            <p class="lang" @click="language(1)">English</p>
          </div>
        </div>
        <div class="line" v-show="!show"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '../assets/js/vue-bus.js';

  export default {
    data() {
      return {
        select: 0,
        list: [
          {
            path: 'home',
            title: "Home"
          },
          {
            path: 'articles',
            title: "Token Economy"
          },
          {
            path: 'lab',
            title: "Investment Intelligence"
          },
          {
            path: 'about',
            title: "X-Order Lab"
          },
          {
            path: 'hiring',
            title: "Hiring"
          },
        ],
        showBg: false,
        height: 70,
        show: true
      }
    },
    created() {
      Bus.eventBus.$on('select', target => {
        this.calculationOffset(target)
      });
    },
    mounted() {
//      this.height = document.documentElement.clientHeight || document.body.offsetHeight;
      document.onscroll = (e) => {
        if (window.pageYOffset > this.height) {
          this.showBg = true
        } else {
          this.showBg = false
        }
      }
    },
    methods: {
      jumpPage: function (index) {
        this.show = false;
        this.calculationOffset(index)
      },
      language:function (index) {
        this.show = false;
        this.calculationOffset(4)
        setTimeout(function() {
          Bus.eventBus.$emit('lang', index);
        },100)
      },
      calculationOffset: function (index) {
        this.select = index;
        var dives = document.getElementsByClassName('header-title')
        var offset = dives[this.select].offsetLeft + (dives[this.select].clientWidth - 30) / 2;
        $('.line').css({'transform': 'translateX(' + offset + 'px)'})

        this.$router.push({name: this.list[index].path})
      }
    }
  }
</script>
<style scoped>
  #header {
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
  }

  .show-bg {
    background: #ffffff;
  }

  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .header-content img {
    max-width: 160px;
    max-height: 20px;
  }

  .header-titles {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .header-title {
    height: 100%;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .title {
    font-size: 16px;
    color: #b5b5b5;
    cursor: pointer;
    font-family: 'NunitoSans-Regular';
  }

  .title-lines {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .title-line {
    background: #3697fb;
    width: 30px;
    height: 2px;
  }

  .select {
    color: #3697fb;
  }

  .line {
    position: absolute;
    left: 0;
    bottom: 10px;
    background: #3697fb;
    width: 30px;
    height: 2px;
    transition: all 0.3s;
  }

  .hiring {
    position: absolute;
    top: 70px;
    left: 0;
    background: #ffffff;
    box-shadow: 6px 8px 20px 0 rgba(213, 227, 242, 0.35);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: none;
    text-decoration-line: none;
  }

  .lang {
    width: 130px;
    color: #666666;
    margin: 0;
    font-size: 14px;
    cursor: pointer;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    text-decoration-line: none;
  }

  .lang-line{
    width:100%;
    height:1px;
    background: rgba(213, 227, 242, 0.35);
  }

  .header-title:hover .hiring{
    display: block;
  }
</style>
