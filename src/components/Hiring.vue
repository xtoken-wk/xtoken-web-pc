<template>
  <div class="main">
    <div class="hiring">
      <ul class="jobs">
        <li :class="select==index?'job select':'job'" v-for="(item,index) of list" @click="tabClick(index)">
          {{item.job}}
        </li>
      </ul>
      <div class='job-desc'>
        <p class="job-name">{{list[select].job}}</p>
        <div v-for="(item,index) in list[select].values">
          <p class="desc-title">{{item.key}}</p>
          <ul class="desc">
            <li v-for="(desc) in item.values">{{desc}}</li>
          </ul>
          <div class="explain">{{item.explain}}</div>
        </div>
        <p class="desc" v-for="(some) of list[select].some">{{some}}</p>
        <p class="desc">{{list[select].email}}
          <a class="email" target="_blank" href="mailto:hr@xorder.ai"> hr@xorder.ai </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '../assets/js/vue-bus.js'

  export default {
    data() {
      return {
        select: 0,
        list: [
          {
            job: 'Data Scientist',
            values: [
              {
                key: 'Description',
                values: ['Responsible for the transformation of domain expert knowledge into structured data.', 'Extract meaningful patterns from unstructured social data.', 'Responsible for the development of AI solutions for investment decision making assistance to domain experts.']
              },
              {
                key: 'Requirements',
                values: ['Experienced with the processing (oversea online community) unstructured text data. Familiar with culture of communities such as Github and Reddit. Have prior experience participating in projects on open platforms such as Github or Kaggle.', 'Have over 2 years of experience working or researching in a NLP related capacity.', 'Working knowledge of TensorFlow, PyTorch, or similar frameworks.', 'Strong programming skills with working knowledge of Python.', 'Have communication skills that enable effective teamwork with others.']
              },
              {
                key: 'Preferred',
                values: ['PhD in Computer Science, Computational Linguistics, Language Processing or Machine Learning.', 'Experience with building crawlers.', 'Experience with causality, Bayesian network and PC algorithm or related subjects.', 'Published 2-3 academic papers in data science, machine learning or economic modeling.']
              }
            ],
            some: ['Location: Shanghai'],
            email: 'Please send your resume and an intro to'
          },
          {
            job: 'Data Architect',
            values: [
              {
                key: 'Description',
                values: ['Responsible for the overall design of data infrastructure and integration with our partners data platforms.', 'Responsible for the optimization and maintenance of the data platform.', 'Responsible for research of new data technologies and evangelize them in the team.']
              },
              {
                key: 'Requirements',
                values: ['Have hands on experience in data quality, profiling and other data analysis. Have good knowledge of data issues that impact user experience and solutions to them.', 'Comfortable working with data scientists and product managers to design and implement data quality, data acquisition and data integration strategies.', '3+ years of of strong SQL and big data warehousing experience with big data lake.', 'Have experience with the management of unstructured social network data.', 'Possess knowledge of distributed computing algorithms and data structures.', 'Should be able to take the initiative to interact with others for new ideas about processes, implementation, and new findings.']
              },
              {
                key: 'Preferred',
                values: ['6+ years of data infrastructure building experience.', 'Experience of knowledge graph database.', 'Experience of embeddings in knowledge graph.']
              }
            ],
            some: ['Location: Shanghai'],
            email: 'Please send your resume and an intro to'
          },
          {
            job: 'Algorithm Engineer',
            values: [
              {
                key: 'Description',
                values: ['Familiar with modelling algorithms and build models based on the need of the project.', 'Employ data to design models, robustness and expansibility of targeted utilities and goals.']
              },
              {
                key: 'Requirements',
                values: ['Possess diplomas related to computer science, mathematics, statistics or related subjects.', 'Familiar with Python or R.', 'Won awards in high profile mathematical modelling competitions.', 'Strong teamwork spirit and communication ability.', 'Have specific interest in model algorithm design and willing to do proprietary research in developing needed algorithms.']
              }
            ],
            some: ['Location: Shanghai'],
            email: 'Please send your resume and an intro to'
          },
          {
            job: 'Project Analyst Intern',
            values: [
              {
                key: 'Description',
                values: ['The translation of important articles regarding token economics, network sciences, complex system theories, and other interdisciplinary fields from English to Chinese.', 'The editing and summary of translated articles.', 'Participation in ad-hoc projects to brainstorm and research potential uses and applications of emerging technology such as blockchain and evaluate their viability.'],
                explain: 'As our intern, you will learn about token economics, token market and public blockchain in perspectives and depths that you could not find online. We will help you create a learning roadmap on token economics and introduce you to a community that is enthusiastic about learning about and experimenting with blockchain and token. You will also have the opportunity to have a sponsored trip to a academic conference or an industry conference to achieve specific goals.'
              },
              {
                key: 'Requirements',
                values: ['You are able to comprehend and translate relatively complex English articles that may describe abstract models into Chinese and preserve the structure of the original arguments.', 'It is preferable but not necessary that you are pursuing studies in computer science, history, political science, economics, physics, biology, arts or related fields.', 'You must be able to ask intelligent questions and do meaningful research.', 'You are able to plan your time well and finish your tasks on time.', 'You are a believer in swift experimentation and iteration, and you see efforts spent in these actions are investments instead of waste.']
              }
            ],
            some: ['Location: Remote', 'Compensation: Unpaid', 'Length: 3 months minimum'],
            email: 'Please send your resume and an intro to'
          },
        ],
        enList: [
          {
            job: 'Data Scientist',
            values: [
              {
                key: 'Description',
                values: ['Responsible for the transformation of domain expert knowledge into structured data.', 'Extract meaningful patterns from unstructured social data.', 'Responsible for the development of AI solutions for investment decision making assistance to domain experts.']
              },
              {
                key: 'Requirements',
                values: ['Experienced with the processing (oversea online community) unstructured text data. Familiar with culture of communities such as Github and Reddit. Have prior experience participating in projects on open platforms such as Github or Kaggle.', 'Have over 2 years of experience working or researching in a NLP related capacity.', 'Working knowledge of TensorFlow, PyTorch, or similar frameworks.', 'Strong programming skills with working knowledge of Python.', 'Have communication skills that enable effective teamwork with others.']
              },
              {
                key: 'Preferred',
                values: ['PhD in Computer Science, Computational Linguistics, Language Processing or Machine Learning.', 'Experience with building crawlers.', 'Experience with causality, Bayesian network and PC algorithm or related subjects.', 'Published 2-3 academic papers in data science, machine learning or economic modeling.']
              }
            ],
            some: ['Location: Shanghai'],
            email: 'Please send your resume and an intro to'
          },
          {
            job: 'Data Architect',
            values: [
              {
                key: 'Description',
                values: ['Responsible for the overall design of data infrastructure and integration with our partners data platforms.', 'Responsible for the optimization and maintenance of the data platform.', 'Responsible for research of new data technologies and evangelize them in the team.']
              },
              {
                key: 'Requirements',
                values: ['Have hands on experience in data quality, profiling and other data analysis. Have good knowledge of data issues that impact user experience and solutions to them.', 'Comfortable working with data scientists and product managers to design and implement data quality, data acquisition and data integration strategies.', '3+ years of of strong SQL and big data warehousing experience with big data lake.', 'Have experience with the management of unstructured social network data.', 'Possess knowledge of distributed computing algorithms and data structures.', 'Should be able to take the initiative to interact with others for new ideas about processes, implementation, and new findings.']
              },
              {
                key: 'Preferred',
                values: ['6+ years of data infrastructure building experience.', 'Experience of knowledge graph database.', 'Experience of embeddings in knowledge graph.']
              }
            ],
            some: ['Location: Shanghai'],
            email: 'Please send your resume and an intro to'
          },
          {
            job: 'Algorithm Engineer',
            values: [
              {
                key: 'Description',
                values: ['Familiar with modelling algorithms and build models based on the need of the project.', 'Employ data to design models, robustness and expansibility of targeted utilities and goals.']
              },
              {
                key: 'Requirements',
                values: ['Possess diplomas related to computer science, mathematics, statistics or related subjects.', 'Familiar with Python or R.', 'Won awards in high profile mathematical modelling competitions.', 'Strong teamwork spirit and communication ability.', 'Have specific interest in model algorithm design and willing to do proprietary research in developing needed algorithms.']
              }
            ],
            some: ['Location: Shanghai'],
            email: 'Please send your resume and an intro to'
          },
          {
            job: 'Project Analyst Intern',
            values: [
              {
                key: 'Description',
                values: ['The translation of important articles regarding token economics, network sciences, complex system theories, and other interdisciplinary fields from English to Chinese.', 'The editing and summary of translated articles.', 'Participation in ad-hoc projects to brainstorm and research potential uses and applications of emerging technology such as blockchain and evaluate their viability.'],
                explain: 'As our intern, you will learn about token economics, token market and public blockchain in perspectives and depths that you could not find online. We will help you create a learning roadmap on token economics and introduce you to a community that is enthusiastic about learning about and experimenting with blockchain and token. You will also have the opportunity to have a sponsored trip to a academic conference or an industry conference to achieve specific goals.'
              },
              {
                key: 'Requirements',
                values: ['You are able to comprehend and translate relatively complex English articles that may describe abstract models into Chinese and preserve the structure of the original arguments.', 'It is preferable but not necessary that you are pursuing studies in computer science, history, political science, economics, physics, biology, arts or related fields.', 'You must be able to ask intelligent questions and do meaningful research.', 'You are able to plan your time well and finish your tasks on time.', 'You are a believer in swift experimentation and iteration, and you see efforts spent in these actions are investments instead of waste.']
              }
            ],
            some: ['Location: Remote', 'Compensation: Unpaid', 'Length: 3 months minimum'],
            email: 'Please send your resume and an intro to'
          },
        ],
        zhList: [
          {
            job: '数据科学家',
            values: [
              {key: '必要条件', values: ['对于海外社区非结构文本数据有丰富的处理经验。熟悉Github和reddit等社区文化，并在Github上有参与项目的经验。', '熟悉自然语言处理（NLP）']},
              {
                key: '岗位描述',
                values: ['熟练掌握各种数据分析方法的基础上，分析不同的业务需求，寻找并构建有效的行业解决方案；', '将领域专家知识转化为可供知识图谱专家处理的结构性知识；', '通过自然语言处理、机器学习等技术提取社媒非结构化知识；', '制定有效项目进度管理机制，按照项目上线时间表，推进项目研发工作；']
              },
              {
                key: '任职要求',
                values: ['拥有计算机科学、统计或相关学科的学位，或在人工智能及金融领域有工作经验；', '在自然语言处理（NLP）领域有2年以上工作或者开源项目经验；', '熟练掌握各种开源工具； Coding能力较强，主导过行业落地项目；', '良好的沟通能力和团队合作精神，有一定的组织协调能力；', '对于创造一款具有革命性地有价值的工具具有强烈的热忱。']
              }
            ],
            some: ['工作地点: 上海', '可面向优秀研究生应届毕业生'],
            email: '简历投递邮箱：'
          },
          {
            job: '数据仓库系统架构师/ 工程师',
            values: [
              {
                key: '岗位描述',
                values: ['基于外部合作方设计框架，负责公司图数据底层框架的整体实现；', '负责统一数据平台项目的整体设计、架构及关键模块的开发；', '负责架构优化及维护，解决开发过程中的技术难题；', '负责新技术的调研，并能在团队内进行推广应用；']
              },
              {
                key: '任职要求',
                values: ['计算机相关专业本科以上学历，3-5年工作经验，1年以上大数据相关经验；', '具有扎实的大数据和数据仓库的实践能力，处理过非结构化网络社交数据的管理，负责过大数据平台或数据仓库项目；', '具有一定算法基础，熟悉常见的数据结构，理解分布式算法和以上提到的分布式系统']
              }
            ],
            some: ['工作地点: 上海', '可面向优秀研究生应届毕业生'],
            email: '简历投递邮箱：'
          },
          {
            job: '量化算法工程师',
            values: [
              {key: '岗位描述', values: ['将主观交易策略系统化']},
              {
                key: '任职要求',
                values: ['有较好的数理基础和基本的统计知识，有2-3年的开发量化模型的经验', ' 2年以上量化实盘经验，能够将主观交易策略转化为量化策略，并协助过主观交易者进行量化分析；', '有量化投资基金工作经历，将策略转化为具体实时或离线的规则并跟进落实，最终部署在决策系统中', '跟踪策略实施情况，完善风控体系建立，并完成监控报告']
              }
            ],
            some: ['工作地点: 上海', '可面向优秀研究生应届毕业生'],
            email: '简历投递邮箱：'
          },
          {
            job: '算法工程师',
            values: [
              {
                key: '岗位描述',
                values: ['在熟悉基本的模型算法（如，树模型，图网络模型，最短路模型，遗传算法等）的基础上，根据项目要求进行建模分析；', '利用数据针对目标要求进行模型设计，稳定性以及扩展性分析；', '制定有效项目进度管理机制，按照项目上线时间表，推进项目研发工作；']
              },
              {
                key: '任职要求',
                values: ['拥有计算机科学、数学、统计或相关学科的学位；', '至少熟练掌握一种编程工具，matlab，python，R等，有较强的 Coding能力；', '研究生数学建模比赛获得二等奖及以上，或者美赛获奖的优先考虑；', '良好的沟通能力和团队合作精神，有一定的组织协调能力，较强的学习理解新知识的能力；', '对模型算法设计应用具有独特的兴趣，勇于尝试新的挑战；']
              }
            ],
            some: ['工作地点: 上海', '可面向优秀研究生应届毕业生'],
            email: '简历投递邮箱：'
          },
//          {
//            job: '数据挖掘工程师',
//            values: [
//              {
//                key: '岗位描述',
//                values: ['负责公司大数据底层框架的整体架构设计，结合公司实际业务情况进行技术选型；', '使用机器学习方法，针对海量数据进行数据挖掘、建模，设计实验方案，沟通验证实验效果，优化机器学习模型。', '指导团队爬取各种相关数据，维持爬虫稳定性和可维护性，提高爬虫作业的效率问题。']
//              },
//              {
//                key: '任职要求',
//                values: ['计算机相关专业本科及以上学历，熟悉linux基本操作；', '精通爬虫技术，可以应付各种复杂的数据抓取环境', '熟悉Python, Java，Shell, Scala 等常用编程语言中至少一种，有良好的代码习惯', '熟悉Hadoop、Spark、Hive 等大数据处理技术', '熟悉常用的数据结构和算法，熟悉常用机器学习算法', '思维敏捷，良好的逻辑分析能力、良好的沟通及组织能力', '有知识图谱经验优先']
//              }
//            ],
//            some: ['工作地点: 上海', '可面向优秀研究生应届毕业生'],
//            email: '简历投递邮箱：'
//          },
//          {
//            job: '前端开发工程师',
//            values: [
//              {key: '岗位描述', values: ['负责利用HTML/CSS/JavaScript进行网站前端开发；', '负责移动端页面开发；', '解决不同浏览器兼容性问题以及不同尺寸手机终端浏览兼容；']},
//              {
//                key: '任职要求',
//                values: ['本科以上学历，1年以上Web前端工作经验；', '具备熟练的网页编辑/布局/调试/优化技能；', '精通HTML5，JS，CSS3，能够熟练运用HTML5特性构建移动端的WebApp，熟悉HTML5通讯机制(AJAX、Websocket等)；', '熟悉页面布局，深刻理解主流浏览器及其不同版本和手机的兼容性问题；', '掌握Javascript的Dom操作，熟悉JavaScript面向对象编程和代码重用；', '善于学习和运用新知识，有强烈的团队意识和执行力;', '熟练使用VUE 开发项目.']
//              }
//            ],
//            some: ['工作地点: 上海', '可面向优秀研究生应届毕业生'],
//            email: '简历投递邮箱：'
//          },
        ]
      }
    },
    created() {
      Bus.eventBus.$on('lang', type => {
        if(type==0){
          this.list=this.zhList;
        }else {
          this.list=this.enList;
        }
      });
    },
    mounted() {
      Bus.eventBus.$emit('select', 4);
    },
    methods: {
      tabClick(index) {
        this.select = index;
      },
    }
  }
</script>
<style scoped>
  .main {
    max-width: 1100px;
    margin: 0 auto;
  }

  .hiring {
    width: 100%;
    display: flex;
    margin-top: 150px;
    padding-bottom: 100px
  }

  .jobs {
    width: 350px;
    flex-shrink: 0;
  }

  .job {
    font-family: 'NunitoSans-Regular';
    font-size: 18px;
    color: #90969c;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .select {
    color: #001743;
  }

  .job-desc {
    flex: 1;
  }

  .job-name {
    font-family: 'NunitoSans-Regular';
    margin: 0 0 30px 0;
    font-size: 24px;
    color: #666666;
  }

  .desc-title {
    font-family: 'NunitoSans-Regular';
    font-size: 16px;
    color: #666666;
  }

  .desc {
    font-family: 'NunitoSans-Regular';
    font-size: 14px;
    color: #666666;
  }

  .explain {
    font-family: 'NunitoSans-Regular';
    font-size: 14px;
    color: #666666;
    margin-top: 20px;
  }

  .email {
    font-family: 'NunitoSans-Regular';
    font-size: 14px;
    color: #666666;
  }
</style>
