<template>
  <div>
    <img class="token-bg" src="static/image/token_bg.png">
    <div class="main">
      <p class="token-title">XToken | Ponzi Structure and the Law of Expansion</p>
      <p class="token-time">2018/03/27</p>
      <div class="token-pic">
        <img class="token-img" src="static/image/token_bg.png">
        <div class="token-shadow" v-show="type==0"></div>
      </div>
      <div class="article" v-show="type>0">
        <p>A Primer</p>
        <p>In the past year, cryptocurrency market has grown exponentially. The scale and speed of its expansion has
          baffled people’s mind. Many question the inherent value of cryptocurrency, the question of whether
          cryptocurrency is a new kind of bubble or a new Ponzi scheme has crossed and hooked everyone’s mind save those
          few most ardent crusaders of cryptocurrency. It is not surprising then to see people from all backgrounds and
          working in the entire stratosphere of our economy show their eager curiosity about cryptocurrency by asking
          what
          exactly does cryptocurrency mean to our present day society?</p>
        <p>In order to answer this question, we need to understand the nature of the financial market, and how the
          market
          defines value. Let us begin this journey of discovery by first going down to the basics by rigorously
          examining
          the expansionary structures of financial assets.</p>
        <p>The Double Layered Structure of Capital</p>
        <p>When we attempt to comprehend the structure of capital expansion, we have to first employ the concept of a
          basis layer, which represents our inherent value orientation. This layer corresponds directly to our most
          basic
          human needs, such as to feel secure and to survive. For instance, this capital layer corresponds directly but
          is
          not limited to our need for food, clothes for warmth, and a safe place to live out our lives. On top of this
          is
          the expansion layer, which is the new capital expansion model we aspire to construct. From our perspective,
          the
          most basic capital expansion structure can be separated into two layers: the basis layer and the expansion
          layer.
        </p>
      </div>
      <div style="display: flex;justify-content: center;padding-top: 20px">
        <p class="token-more" @click="showArticle()">
          Read full article
          <img src="static/image/token_arrow.png">
        </p>
      </div>
      <p class="article-title">ARTICLES</p>
      <div class="detail">
        <a class="item" :href="item.url" v-for="(item,index) of data" target="_blank">
          <img :src="item.imgUrl">
          <p class="item-title">{{item.title}}</p>
          <p class="item-time">{{item.time}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '../assets/js/vue-bus.js'

  export default {
    data() {
      return {
        type: 0,
        data: [
          {
            'imgUrl': "https://miro.medium.com/fit/c/1190/358/1*LCdHtDvJ-OKXa74zt0bd2w.png",
            'title': 'XToken | Ponzi Structure and the Law of Expansion',
            'desc': 'Our civilization depends, not only for its origin but also for its…',
            'time':'2018/03/27',
            'url': 'https://medium.com/p/b4c894c6f79f?source=user_profile---------2------------------'
          },
          {
            'imgUrl': 'https://cdn-images-1.medium.com/max/600/1*vIJOJpPrZAONDzMfP4p8Uw.jpeg',
            'title': 'AMA by Tony Tao, Founder of X-Order',
            'desc': 'Tony started to tell us to stop buying, start selling or shorting in January 2018, Which was at the very top of the ICO boom. At that time, Tony was still serving as the secretary general of Neo Foundation and setting up Neo Global…',
            'time':'2018/10/02',
            'url': 'https://medium.com/p/ca985985423?source=user_profile---------4------------------'
          },
          {
            'imgUrl': 'https://cdn-images-1.medium.com/max/600/1*_B4c1I6Xf0eU3XfPLAO9wQ.png',
            'title': 'Why do we believe in token economy (Part 1)',
            'desc': '“The intellect has little to do on the road to discovery. There comes a leap in consciousness, call it intuition or what you will, the solution comes to you and you don’t know how or why.',
            'time':'2018/08/03',
            'url': 'https://medium.com//p/7f3bbf27310e?source=user_profile---------5------------------'
          },
          {
            'imgUrl': 'https://miro.medium.com/fit/c/1400/420/1*aJEp998491GN212bfizaUQ.jpeg',
            'title': 'The Extended Order in the lens of Complexity — Revelation for Complexity Economics',
            'desc': '',
            'time':'2018/07/11',
            'url': 'https://medium.com/@xorder/the-extended-order-in-the-lens-of-complexity-revelation-for-complexity-economics-b7393545e99e'
          },
          {
            'imgUrl': 'https://miro.medium.com/fit/c/856/256/1*a1OQIZ_tQ1GxhvyEb84WSg.png',
            'title': 'Hidden Order Inside Complex Adaptive System, Part Two',
            'desc': 'At worst, it will disclose new sights and perspectives. At best, it will reveal the general principles we seek.',
            'time':'2018/07/05',
            'url': 'https://medium.com/p/e1770bd04bc1?source=user_profile---------7------------------'
          },
          {
            'imgUrl': 'https://miro.medium.com/fit/c/1400/420/1*u5p-del-U2YFzlRd9u3wdg.jpeg',
            'title': 'Hidden Order Inside Complex Adaptive Systems, Part one',
            'desc': '',
            'time':'2018/07/02',
            'url': 'https://medium.com/p/a67d840c176f?source=user_profile---------8------------------'
          }
        ],
        list: [
          {
            img: 'static/image/home_article1.png',
            title: 'slkdfsldflksdjlkfjs'
          },
          {
            img: 'static/image/home_article2.png',
            title: 'slkdfsldflksdjlkfjs'
          },
          {
            img: 'static/image/home_article3.png',
            title: 'slkdfsldflksdjlkfjs'
          },
          {
            img: 'static/image/home_article4.png',
            title: 'slkdfsldflksdjlkfjs'
          },
          {
            img: 'static/image/home_article5.png',
            title: 'slkdfsldflksdjlkfjs'
          },
          {
            img: 'static/image/home_article6.png',
            title: 'slkdfsldflksdjlkfjs'
          },
        ],
      }
    },
    mounted() {
      Bus.eventBus.$emit('select', 1);
    },
    methods: {
      jumpMidum: function (url) {
        window.location.href = url
      },
      showArticle: function () {
        if (this.type == 0) {
          this.type = 1;
        }else {
          window.location.href='https://medium.com/p/b4c894c6f79f?source=user_profile---------2------------------'
        }
      },
    }
  }
</script>
<style scoped>
  .main {
    max-width: 1200px;
    margin: 0 auto;
  }

  .token-bg {
    margin-top: 70px;
    max-width: 100%;
  }

  .token-title {
    font-family: 'NunitoSans-Regular';
    margin: 50px 100px 20px 100px;
    font-size: 40px;
    color: #333333;
    letter-spacing: 0;
    text-align: left;
  }

  .token-time {
    margin-left: 100px;
    font-family: NunitoSans-SemiBold;
    font-size: 20px;
    color: #6a6f7a;
    letter-spacing: 0.29px;
    text-align: left;
  }

  .token-pic {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
  }

  .token-img {
    width: 1000px;
    height: 400px;
  }

  .token-shadow {
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0.00) 100%);
    width: 1000px;
    height: 120px;
  }

  .token-more {
    font-family: 'NunitoSans-Regular';
    font-size: 16px;
    color: #7f8b9d;
    letter-spacing: 0;
    line-height: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  .token-more img {
    width: 10px;
    height: 10px;
    margin-left: 5px;
  }

  .article-title{
    margin-top: 100px;
    margin-bottom: 0;
    font-family: 'NunitoSans-Regular';
    font-size: 34px;
    color: #1D2D40;
    letter-spacing: 2px;
    text-align: center;
  }

  .detail {
    margin-top: 20px;
    padding-bottom: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 320px;
    margin-top: 80px;
    text-decoration: none;
  }

  .item img {
    width: 100%;
    height: 180px;
  }

  .item-title {
    font-family: 'NunitoSans-Regular';
    width: 100%;
    height: 50px;
    font-size: 18px;
    color: #00173b;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }

  .item-time {
    font-family: 'NunitoSans-Regular';
    font-size: 14px;
    color: #6a6f7a;
    letter-spacing: 0.2px;
    text-align: left;
  }

  .article {
    width: 1000px;
    margin: 0 auto;
    font-family: 'NunitoSans-Regular';
    font-size: 16px;
    color: #666666;
    letter-spacing: 1px;
    line-height: 26px;
    text-align: left;
  }
</style>
