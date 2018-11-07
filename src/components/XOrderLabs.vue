<template>
  <div class="main">
    <div class="detail">
      <img src="static/image/labs_our_mission.png">
      <div class="introduce">
        <p class="introduce-title">Our Mission</p>
        <p class="introduce-content">X-Order Lab is a research institute that endeavours to explore the hidden order
          beneath the changing landscape of our economy and society. Our research area includes complex system theory,
          token economy, data science, distributed system, artificial intelligence, game theory, etc.</p>
        <p class="introduce-content">We seek to promote the well-being of humankind on earth to revolutionize people's
          understanding about the dynamics that are currently shaping our economy and our world..</p>
      </div>
    </div>
    <p class="title">Operating Principles</p>
    <div class="project" v-for="(item) of projects">
      <img :src="item.img">
      <div class="project-content">
        <p class="project-title">{{item.title}}</p>
        <p class="project-detail">{{item.content}}</p>
      </div>
    </div>
    <p class="team" style="text-align: left;margin-bottom: 50px">Research Proposals</p>
    <div class="proposal" v-for="(item) of proposals">
      <div class="proposal-line"></div>
      <div class="proposal-content">
        <p class="proposal-detail">{{item.title}}</p>
        <div class="proposal-keys">
          <p class="proposal-key" v-for="(key) of item.keys">#{{key}}</p>
        </div>
      </div>
    </div>
    <p class="interesting">If you are interested in these projects or have related ideas,please contact <a target="_blank" href="mailto:hr@xorder.ai">lab@xorder.ai</a></p>
    <p class="team">OUR PARTNERS</p>
    <div class="partners">
      <div class="partner" v-for="(item) of partners">
        <img :src="item">
      </div>
    </div>
    <div class="partners2">
      <img :src="item" v-for="(item) of partners2">
    </div>
    <!--<p class="team">Scientists</p>-->
    <!--<div class="members">-->
    <!--<div class="member" v-for="(item,index) of list">-->
    <!--<img src="">-->
    <!--<p class="member-name">name</p>-->
    <!--<p class="member-job">job</p>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '../assets/js/vue-bus.js'

  export default {
    data() {
      return {
        list: [1, 1, 1, 1, 1, 1],
        projects: [
          {
            img: 'static/image/labs_open_source.png',
            title: 'Create an open source collaborative environment',
            content: 'We believe that open source represents the approach to challenge the world in an innovative way, looking for new possibilities, and doing so in a collaborative and transparent environment.'
          },
          {
            img: 'static/image/labs_collaboration.png',
            title: 'Support Interdisciplinary collaboration',
            content: 'We are absolutely relentless at hammering down the boundaries created by academic disciplines and institutional structures.'
          },
          {
            img: 'static/image/labs_practical_based.png',
            title: 'Dedicated to both theoretical and application research',
            content:'While we are focused on practical applications of technologies, we believe our research should also provide the impetus for change in the way the world thinks about and deals with the pressing problems of our age.'
          },
          {
            img: 'static/image/labs_interdisciplinary.png',
            title: 'Push for integration with academia and industry',
            content: 'Industries should work in tangent with academia to pinpoint impactful questions and provide insights about and solutions to them.'
          },
          {
            img: 'static/image/labs_no_boundary.png',
            title: 'Dedicated to making research without boundary',
            content: 'We aim to integrate a diverse range of academic fields in our research efforts to discover new patterns over old phenomena.'
          },
        ],
        proposals: [
          {
            title: 'User Matching Within Specific Topics Between Different Social Media Platforms',
            keys: ['topic modeling', 'social listening']
          },
          {
            title: 'New Project/Token Detection and Tracking In Social Media',
            keys: ['SNS', 'web crawling']
          },
          {
            title: 'Key Opinion Leader Detection and Tracking (PART 1) - Based On Sub Community',
            keys: ['KOL detection']
          },
          {
            title: 'Key Opinion Leader Detection and Tracking (PART 2) - Based On Overall Platform',
            keys: ['KOL detection']
          },
          {
            title: 'Event Extraction and Causal Analysis In Token Area',
            keys: ['Natural language processing', 'knowledge graph']
          },
          {
            title: 'Authenticity Detection (News, White Paper, Etc.)',
            keys: ['knowledge graph', 'web crawling']
          },
//          {
//            title:'Detecting the relationship between academic research and industry market performance',
//            keys:['keywords','keywords']
//          },
        ],
        partners: [
          'static/image/about_partner_block.png',
          'static/image/about_partner_jizhi.png',
          'static/image/about_partner_labs.png',
          'static/image/about_partner_dfc.png',
          'static/image/about_partner_ngc.png',
          'static/image/about_partner_nus.png',
        ],
        partners2: ['static/image/about_partner_purdue.png', 'static/image/about_partner_tongji.png']
      }
    },
    mounted() {
      Bus.eventBus.$emit('select', 3);
    }
  }
</script>
<style scoped>
  .main {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  .detail {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 150px;
  }

  .detail img {
    max-width: 600px;
    max-height: 480px;
  }

  .introduce {
    width: 510px;
    margin-top: 110px;
  }

  .introduce-title {
    font-family: 'NunitoSans-Regular';
    font-size: 30px;
    color: #1D2D40;
    letter-spacing: 2.5px;
  }

  .introduce-content {
    font-family: 'NunitoSans-Regular';
    font-size: 16px;
    color: #666666;
    letter-spacing: 0;
    text-align: justify;
    line-height: 26px;
  }

  .team {
    width: 100%;
    font-family: 'NunitoSans-Regular';
    margin-top: 140px;
    font-size: 30px;
    color: #1D2D40;
    letter-spacing: 2.5px;
    text-align: center;
  }

  .members {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 220px 220px 220px;
    justify-content: space-between;
    grid-row-gap: 50px;
  }

  .member {
    display: flex;
    flex-direction: column;
  }

  .member img {
    width: 220px;
    height: 220px;
    /*max-width: 220px;*/
    /*max-height: 220px;*/
  }

  .member-name {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: 'NunitoSans-Regular';
    font-size: 20px;
    color: #00173b;
    letter-spacing: 1.67px;
    text-align: center;
  }

  .member-job {
    margin: 0;
    opacity: 0.6;
    font-family: 'NunitoSans-Regular';
    font-size: 14px;
    color: #00173b;
    letter-spacing: 0;
    line-height: 28px;
    text-align: center;
  }

  .partners {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /*display: grid;*/
    /*grid-template-columns: 300px 300px 300px;*/
    /*justify-content: center;*/
    /*justify-items: center;*/
    /*align-items: center;*/
    /*grid-row-gap: 70px;*/
    /*grid-column-gap: 100px;*/
  }

  .partner {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .partners img {
    max-width: 300px;
    max-height: 70px;
    margin: 50px 0;
  }

  .partners2 {
    /*display: grid;*/
    /*grid-template-columns: 300px 300px;*/
    /*justify-content: center;*/
    /*justify-items: center;*/
    /*align-items: center;*/
    /*grid-row-gap: 70px;*/
    /*grid-column-gap: 100px;*/
  }

  .partners2 img {
    max-width: 300px;
    max-height: 70px;
    margin: 50px;
  }

  .title {
    font-family: 'NunitoSans-Regular';
    margin-top: 140px;
    margin-bottom: 60px;
    font-size: 30px;
    color: #1D2D40;;
    letter-spacing: 2px;
    text-align: center;
  }

  .project {
    width: 1200px;
    margin: 20px auto;
    padding: 40px;
    background: #ffffff;
    box-shadow: 6px 8px 20px 0 rgba(213, 227, 242, 0.35);
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  .project img {
    max-width: 100px;
    max-height: 100px;
  }

  .project-content {
    flex: 1;
    margin-left: 30px;
  }

  .project-title {
    margin: 0;
    font-family: 'NunitoSans-Regular';
    font-size: 20px;
    color: #3697fb;
    letter-spacing: 0;
    text-align: left;
  }

  .project-detail {
    margin-top: 20px;
    margin-bottom: 0;
    font-family: 'NunitoSans-Regular';
    font-size: 16px;
    color: #666666;
    letter-spacing: 0;
    text-align: justify;
    line-height: 26px;
  }

  .proposal {
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 230px;
    margin-top: 30px;
  }

  .proposal-line {
    background: #3697fb;
    width: 10px;
    height: 60px;
  }

  .proposal-content {
    margin-left: 20px;
  }

  .proposal-detail {
    font-family: 'NunitoSans-Regular';
    font-size: 18px;
    color: #00173b;
    letter-spacing: 1.12px;
    text-align: justify;
    margin: 0;
  }

  .proposal-keys {
    margin-top: 15px;
    display: flex;
  }

  .proposal-key {
    font-family: 'NunitoSans-Regular';
    font-size: 16px;
    color: #3697fb;
    letter-spacing: 1px;
    text-align: justify;
    margin: 0 30px 0 0;
  }

  .interesting{
    width:100%;
    margin: 30px 0 0 200px;
    font-family: 'NunitoSans-Regular';
    font-size: 16px;
    color: #666666;
    letter-spacing: 0;
    text-align: left;
    line-height: 26px;
  }

  .interesting a{
    color: #3697fb;
  }
</style>
