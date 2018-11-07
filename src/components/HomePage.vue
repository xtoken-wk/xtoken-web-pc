<template>
  <div class="main">
    <div class="head">
      <img class="head-img" src="static/image/home_head_bg.png">
      <!--<div class="titles">-->
      <!--<p class="titles-item">ENVISIONING</p>-->
      <!--<p class="titles-item">A NEW</p>-->
      <!--<p class="titles-item">FINANCIAL</p>-->
      <!--<p class="titles-item" style="color: #007aff;">ORDER</p>-->
      <!--<div style="display: flex;justify-content: flex-end">-->
      <!--<p class="titles-content">X-Order is first and foremost an investment company. We came out of NEO blockchain in order to pursue our vision of the future where blockchain is much more about new ways to foster mass innovation online.-->
      <!--</p>-->
      <!--</div>-->

      <!--</div>-->
    </div>
    <!--<p class="what">WHAT WE DO</p>-->
    <!--<div class="frames">-->
    <!--<div class="frame" v-for="(item) of frames">-->
    <!--<img :src="item.img">-->
    <!--<p class="frame-title">{{item.title}}</p>-->
    <!--<p class="frame-content">{{item.content}}</p>-->
    <!--</div>-->
    <!--</div>-->
    <div class="projects">
      <img class="projects-img" src="static/image/home_token_economy.png">
      <div class="project">
        <p class="project-title">Token Economy</p>
        <p class="project-content">We are foreseeing a thriving token economy embedded in a more sustainable and
          sophisticated digital economy, enabled by various scalable peer to peer cooperation approaches.</p>
        <p class="project-content">However, few theoretical frameworks have been created into that domain. Hence, we are
          combining the expertise from Complex Systems and traditional Macro Economy theories to facilitate intriguing
          conversations into that topic.</p>
        <p class="project-more" @click="jumpMore(1)">LEARN MORE
          <img src="static/image/home_arrow.png">
        </p>
      </div>
    </div>
    <div class="labs">
      <div class="lab">
        <p class="project-title">Investment Intelligence</p>
        <p class="project-content">We are dedicated to discover innovations that have the potential to grow
          exponentially and change our world for the better. </p>
        <p class="project-content">Through Web Mining, Natural Language Processing, Knowledge Graph, and Machine
          Learning technologies, we excavate and evaluate information from online communities and other multiple sources
          to unveil the hidden investment value.</p>
        <p class="project-more" @click="jumpMore(2)">LEARN MORE
          <img src="static/image/home_arrow.png">
        </p>
      </div>
      <img class="lab-img" src="static/image/home_investment_intelligence.png">
    </div>
    <div class="projects">
      <img class="projects-img" src="static/image/home_order_lab.png">
      <div class="project">
        <p class="project-title">X-ORDER LAB</p>
        <p class="project-content">X-Order Laboratory is a research institute that endeavors to explore the hidden order
          beneath the changing landscape of our economy and society. We aim to facilitate the discovery of new
          socio-technological systems and shed light on what we can do to bring a better future closer.</p>
        <p class="project-content">Our research areas include complex system theory, artificial intelligence, data
          science, and their applications within the blockchain domain.</p>
        <p class="project-more" @click="jumpMore(3)">LEARN MORE
          <img src="static/image/home_arrow.png">
        </p>
      </div>
    </div>
    <div class="articles">
      <p class="project-title" style="text-align: center">ARTICLES</p>
      <div class="articles-info">
        <a class="articles-item" :href="item.url" v-for="(item,index) of data" target="_blank">
          <img :src="item.imgUrl">
          <p class="article-title">{{item.title}}</p>
          <div class="article-content">
            <p class="article-profile">{{item.desc}}</p>
            <p :class="index!=2?'article-label':'article-label label-color'">#{{item.label}}</p>
          </div>
          <p class="article-time">{{item.time}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '../assets/js/vue-bus.js';

  export default {
    data() {
      return {
        data: [
          {
            'imgUrl': "https://static.wixstatic.com/media/7336fe_ad03127632ac4bc28e25b93c53dc24aa~mv2.png/v1/fill/w_192,h_181,al_c,lg_1,q_80/7336fe_ad03127632ac4bc28e25b93c53dc24aa~mv2.webp",
            'title': 'XToken | Ponzi Structure and the Law of Expansion',
            'desc': 'Bubble is not a scam. Economic structures are naturally expanding orders that tend to lead to the emergence of new asset classes. The capital market is a complex system that grows, but also shrinks.',
            'label': 'Token Economy',
            'url': 'https://medium.com/p/b4c894c6f79f?source=user_profile---------2------------------',
            'time': '2018/03/27'
          },
          {
            'imgUrl': 'https://miro.medium.com/fit/c/1400/420/1*aJEp998491GN212bfizaUQ.jpeg',
            'title': 'The Extended Order in the lens of Complexity — Revelation for Complexity Economics',
            'desc': 'Future economic analysis is going to be more about looking at the economy as a complex adaptive system that can be studied through agent based simulation.',
            'label': 'Token Economy',
            'url': 'https://medium.com/@xorder/the-extended-order-in-the-lens-of-complexity-revelation-for-complexity-economics-b7393545e99e',
            'time': '2018/07/11'
          },
          {
            'imgUrl': 'https://static.wixstatic.com/media/7336fe_37bb0a741d8e492f91ed756f73f417e2~mv2.png/v1/fill/w_278,h_262,al_c,q_80,usm_0.66_1.00_0.01/7336fe_37bb0a741d8e492f91ed756f73f417e2~mv2.webp',
            'title': 'Knowledge Graph Based Value Discovering Environment for The Token World',
            'desc': 'We can use knowledge graph to make causal inferences between concepts that are derived from the limitless data on the web to identify',
            'label': 'Investment Intelligence',
            'url': 'https://medium.com/@lizeng_44669/knowledge-graph-based-value-discovering-environment-for-the-token-world-45c9f65d23af',
            'time': '2018/10/22'
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
        ],
        partners: [
          'static/image/home_partner1.png',
          'static/image/home_partner2.png',
          'static/image/home_partner3.png',
          'static/image/home_partner4.png',
          'static/image/home_partner5.png'
        ]
      }
    },
    computed: {
      fullHeight() {
        var height = document.documentElement.clientHeight || document.body.offsetHeight;
        console.log(height)
        return height;
      },
    },
    mounted: function () {

    },
    methods: {
      jumpMore: function (index) {
        Bus.eventBus.$emit('select', index);
      },
    }
  }
</script>
<style scoped>
  .main {
    position: relative;
  }

  .head-img {
    max-width: 100%;
  }

  .titles {
    position: absolute;
    top: 120px;
    right: 65px;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .titles-item {
    font-family: Avenir-Black;
    margin: 0;
    font-size: 80px;
    color: #333333;
    letter-spacing: 8px;
    text-align: right;
    line-height: 90px;
  }

  .titles-content {
    margin-top: 30px;
    width: 540px;
    font-family: 'NunitoSans-Regular';
    font-size: 16px;
    color: #666666;
    letter-spacing: 0;
    text-align: right;
    line-height: 26px;
  }

  .overview {
    max-width: 100%;
    height: 100%;
    background: url('../../static/image/home_head_bg.png') no-repeat center center;
    background-size: cover;
    overflow: visible;
  }

  .title {
    width: 100%;
    height: calc(100% - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slogn {
    max-width: 790px;
    max-height: 500px;
  }

  .what {
    font-family: 'NunitoSans-Regular';
    font-size: 30px;
    color: #1D2D40;;
    letter-spacing: 2.5px;
    text-align: center;
  }

  .frames {
    margin: 100px auto;
    display: flex;
  }

  .frame {
    margin: 0 25px;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .frame img {
    max-width: 80px;
    max-height: 80px;
  }

  .frame-title {
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: 'NunitoSans-Regular';
    font-size: 16px;
    color: #001743;
    letter-spacing: 0;
    line-height: 26px;
    text-align: center;
  }

  .frame-content {
    margin: 0;
    font-family: 'NunitoSans-Regular';
    font-size: 14px;
    color: #90969c;
    letter-spacing: 0;
    text-align: center;
    line-height: 20px;
  }

  .projects {
    margin: 100px auto;
    display: flex;
  }

  .projects-img {
    max-width: 700px;
    max-height: 550px;
  }

  .project {
    margin-left: 50px;
    width: 380px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .project-title {
    font-family: 'NunitoSans-Regular';
    margin: 0 0 10px 0;
    font-size: 34px;
    color: #1D2D40;
    letter-spacing: 2px;
    text-align: left;
  }

  .project-content {
    font-family: 'NunitoSans-Regular';
    margin: 10px 0;
    width: 380px;
    opacity: 0.6;
    font-size: 18px;
    color: #00173b;
    letter-spacing: 0;
    line-height: 28px;
    text-align: left;
  }

  .project-more {
    position: relative;
    margin-top: 50px;
    width: 120px;
    font-size: 16px;
    color: #7f8b9d;
    letter-spacing: 0;
    line-height: 16px;
    padding-bottom: 3px;
    /*border-bottom: 4px solid #3698fc;*/
    text-decoration: none;
    cursor: pointer;
  }

  .project-more::after {
    content: '';
    display: block;
    /*开始时候下划线的宽度为0*/
    width: 0;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: -10px;
    background: #3698fc;
    /*这里我们设定所有改变都有动画效果，可以自己指定样式才有动画效果*/
    transition: all 0.3s ease-in-out;
  }

  .project-more:hover::after {
    width: 100%;
  }

  .project-more img {
    max-width: 10px;
    max-height: 10px;
  }

  .labs {
    margin: 150px auto;
    display: flex;
  }

  .lab {
    width: 420px;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .lab-img {
    max-width: 720px;
    max-height: 480px;
    margin-left: 70px;
  }

  .articles {
    width: 1200px;
    margin: 150px auto;
    display: flex;
    flex-direction: column;
  }

  .articles-info {
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
  }

  .articles-item {
    width: 320px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .articles-item img {
    border-radius: 6px;
    width: 350px;
    height: 350px;
  }

  .article-title {
    font-family: 'NunitoSans-Regular';
    height: 50px;
    margin: 10px 0;
    font-size: 16px;
    color: #00173b;
    letter-spacing: 0;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }

  .article-content {
    height: 150px;
  }

  .article-profile {
    font-family: 'NunitoSans-Regular';
    margin: 0;
    font-size: 16px;
    color: #6a6f7a;
    letter-spacing: 0.2px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }

  .article-label {
    font-family: 'NunitoSans-Regular';
    font-size: 16px;
    color: #f78e1e;
    letter-spacing: 1.07px;
  }

  .label-color {
    color: #36b4fc;
  }

  .article-time {
    font-family: 'NunitoSans-Regular';
    margin: 0;
    font-size: 16px;
    color: #6a6f7a;
    text-align: left;
    letter-spacing: 0.23px;
  }
</style>
