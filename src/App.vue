<template>
  <el-container class="home-page">
    <el-header style="background-color: #2175ef" class="top">
      <el-row justify="space-between">
        <el-col :span="4" class="left-title">交通智管通</el-col>
        <el-col :span="4" class="right-title">驾驶舱</el-col>
      </el-row>
    </el-header>
    <el-container class="main-wapper">
      <el-main height="100%">
        <div class="card main-top-menus">
          <div v-for="(app, index) in staticData.appList" :key="index">
            {{ app.name }}
          </div>
        </div>
        <div class="main-wrapper">
          <div style="flex-grow: 1">
            <h2>数据总览</h2>
            <div style="display: flex; flex-direction: column; gap: 20px">
              <div class="card data-total">
                <div
                  class="card-item"
                  v-for="(data, index) in staticData.dataCenter"
                  :key="index"
                  :style="{
                    '--color-start': data.color[0],
                    '--color-end': data.color[1]
                  }"
                >
                  <div>
                    <span>{{ data.label }}</span>
                  </div>
                  <div>icon</div>
                </div>
              </div>
              <div class="card">
                <h2>数字公路</h2>
                <div class="digit-road data-total">
                  <el-row>
                    <el-col :span="12">
                      <div>
                        <h3>养管里程</h3>
                        <div>
                          <span class="blue-num">330.364</span>
                          <span> 公里 </span>
                          <span class="blue-num">22</span>
                          <span> 条 </span>
                        </div>
                      </div>
                      <el-row style="font-size: 12px; line-height: 25px">
                        <el-col :span="24">
                          <span>国道(公里/条)</span>
                          <span style="font-size: 15px" class="red-num">77.813/3</span>
                        </el-col>
                        <el-col :span="24">
                          <span>省道(公里/条)</span>
                          <span style="font-size: 15px" class="green-num">49.687/3</span>
                        </el-col>
                        <el-col :span="24">
                          <span>县道(公里/条)</span>
                          <span style="font-size: 15px" class="orange-num"
                            >202.864/16</span
                          >
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="12">
                      <v-chart class="chart" :option="option" theme="RGYB" />
                    </el-col>
                  </el-row>
                  <el-row align="middle">
                    <el-col
                      :span="index % 2 ? 10 : 14"
                      v-for="(col, index) in 4"
                      class="digit-road-single-col-info"
                    >
                      <div>
                        <div class="blue-num">2058.278</div>
                        <span>农村公路(公里)</span>
                      </div>
                      <el-row align="middle">
                        <el-col :span="24">
                          <span>省道(公里/条)</span>
                          <span class="green-num">49.687/3</span>
                        </el-col>
                        <el-col :span="24">
                          <span>省道(公里/条)</span>
                          <span class="orange-num">49.687/3</span>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="left-bottom data-total">
                <div>
                  <div class="card">
                    <h2>数字公路</h2>
                    <el-row style="height: calc(100% - 67px)">
                      <el-col :span="12" style="height: 100%">
                        <v-chart class="chart" :option="option" theme="RGYB" />
                      </el-col>
                      <el-col :span="12">
                        <div>
                          <div class="blue-num">2058.278</div>
                          <span>农村公路(公里)</span>
                        </div>
                        <el-row align="middle">
                          <el-col :span="24">
                            <span>省道(公里/条)</span>
                            <span class="green-num">49.687/3</span>
                          </el-col>
                          <el-col :span="24">
                            <span>省道(公里/条)</span>
                            <span class="orange-num">49.687/3</span>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="card">
                    <h2>公路保洁</h2>
                    <el-row style="height: calc(100% - 67px)">
                      <el-col :span="12" style="height: 100%">
                        <v-chart class="chart" :option="option" theme="RGYB" />
                      </el-col>
                      <el-col :span="12" style="height: 100%">
                        <v-chart class="chart" :option="option" theme="RGYB" />
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <div class="card">
                  <h2>应急工单</h2>
                  <el-row style="height: calc(100% - 67px)">
                    <el-col :span="24" style="height: 50%">
                      <v-chart class="chart" :option="option" theme="RGYB" />
                    </el-col>
                    <el-col :span="24" style="height: 50%">
                      <v-chart class="chart" :option="option" theme="RGYB" />
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div>
          <div style="width: 400px; min-width: 400px">
            <div>
              <h2>通知公告</h2>
              <div>
                <div class="card notice-area">
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                </div>
              </div>
            </div>
            <div>
              <h2>中心职责</h2>
              <div>
                <el-carousel height="140px">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
                <div class="card notice-area" style="height:396px;">
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                  <div>2022年春节前安全道路维护</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
  // import
  import { ref, reactive, onMounted } from 'vue'

  // variables & refs & run
  const _refs = ref(null)
  const _reactive = reactive({})

  const staticData = {
    appList: [
      {
        name: '应用列表',
        icon: '',
        link: ''
      },
      {
        name: '数字公路',
        icon: '',
        link: ''
      },
      {
        name: '公路保洁',
        icon: '',
        link: ''
      },
      {
        name: '运输监管',
        icon: '',
        link: ''
      },
      {
        name: '应急工单',
        icon: '',
        link: ''
      },
      {
        name: '长智寻路',
        icon: '',
        link: ''
      }
    ],
    dataCenter: [
      {
        label: '乡镇(个)',
        value: '',
        icon: '',
        color: ['#4cbcfc', '#2d7ffa']
      },
      {
        label: '街道(个)',
        value: '',
        icon: '',
        color: ['#4CE09B', '#07B077']
      },
      {
        label: '中心机构(个)',
        value: '',
        icon: '',
        color: ['#FFDD33', '#FAA700']
      },
      {
        label: '管理站(个)',
        value: '',
        icon: '',
        color: ['#FFC042', '#FA7414 ']
      },
      {
        label: '保洁公司(个)',
        value: '',
        icon: '',
        color: ['#FA8B4B', '#F55240']
      }
    ]
  }
  const option = ref({
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '85%',
        data: [
          { value: 1048, name: 'Search \n Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })

  // lifecycle
  onMounted(() => {})

  // events & funs
  const _foo = () => {}
</script>
<style lang="scss">
  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  *::-webkit-scrollbar-thumb {
    face-color: #a8a8a8;
    background-color: #a8a8a8;
    border-radius: 10px;
  }
  *::-webkit-scrollbar-track {
    background-color: #f3f4f6;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #a8a8a8;
  }
  *::-webkit-scrollbar-thumb:active {
    background-color: #787878;
  }

  html,
  body,
  #app {
    background: #f6f7f9;
    box-sizing: border-box;
    font-weight: 400;
  }
  div {
    // border: 1px solid black;
    box-sizing: border-box;
  }
</style>

<style lang="scss" scoped>
  $topHeight: 90px;
  $radius: 8px;

  .home-page {
    font-size: 16px;
    color: #1f1f1f;
  }
  .top {
    padding: 0 40px 0 80px;
    height: $topHeight;
    .left-title {
      text-align: left;
      color: white;
      font-size: 28px;
      line-height: 90px;
      font-weight: bolder;
    }
    .right-title {
      text-align: right;
      color: white;
      line-height: 90px;
      font-weight: bold;
    }
  }
  .main-wapper {
    height: calc(100vh - $topHeight);
    .el-main {
      padding: 40px;
      display: flex;
      flex-direction: column;
      gao: 20px;
    }

    .main-top-menus {
      width: 100%;
      min-height: 160px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      font-size: 24px;
      color: #ababc0;
      > div {
        height: auto;
      }
    }
    .main-wrapper {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
    .data-total {
      display: flex;
      flex-direction: row;
      align-items: center;
      // height:120px;
      padding: 20px;
      justify-content: flex-start;
      gap: 20px;
      flex-wrap: wrap;
      // margin: 0 auto;
      width: 100%;
      .card-item {
        height: 120px;
        // flex-grow: 1;

        width: calc(20% - 16px);
        border-radius: $radius;
        background: linear-gradient(180deg, var(--color-start), var(--color-end));
        // box-shadow: 0 10px 25px -5px #4CBCFC;
        box-shadow: 0 5px 25px -3px var(--color-end);
        border: unset;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: white;
        font-size: 16px;
        > div {
          width: 60px;
        }
      }
      @media screen and (max-width: 1400px) and (min-width: 1000px) {
        .card-item {
          min-width: calc(33% - 12px);
        }
      }
      @media screen and (max-width: 999px) {
        .card-item {
          min-width: calc(50% - 10px);
        }
      }
      @media screen and (max-width: 750px) {
        .card-item {
          width: 100%;
        }
      }
    }
    .notice-area {
      padding: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 436px;
      overflow-y: auto;
      // gap: 5px;
      > div {
        line-height: 60px;
      }
    }
    .digit-road {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 36px;
      > div {
        height: 180px;
        width: calc(50% - 10px);
        // min-width:700px;
      }
      > div:nth-child(1) {
        // width: 200px;
        // flex-grow: 1;
        width: calc(45% + 10px);
      }
      > div:nth-child(2) {
        // padding: 0 20px;
        width: calc(55% - 30px);
      }
    }

    .left-bottom {
      flex-wrap: wrap;
      padding: unset;
      > div {
        width: calc(50% - 10px);
      }
      > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 20px;
        > div {
          height: 210px;
        }
      }
      > div:nth-child(2) {
        height: 440px;
      }
    }
    @media screen and (max-width: 1400px) and (min-width: 1000px) {
      .digit-road > div,
      .left-bottom > div {
        width: 100% !important;
      }
      .digit-road > div {
        .digit-road-single-col-info {
          border-left: unset;
          > div {
            padding: 0;
          }
        }
      }
    }
  }
  .digit-road-single-col-info {
    display: flex;
    flex-direction: row;
    // > div
    // flex-grow: 1;
    // width: 65%;
    border-left: 2px solid #ebebeb;
    // padding: 0 20px;
    font-size: 16px;
    .el-col {
      padding-left: 20px;
    }
    > div {
      padding-left: 20px;
    }
  }

  // .digit-road-single-col-info:nth-child(2),
  // .digit-road-single-col-info:nth-child(4) {
  //   width: 35%;
  //   background: red;
  //   flex-grow: 0;
  // }
  // common
  .card {
    background: white;
    border-radius: $radius;
    min-height: 50px;
    min-width: 50px;
    display: inline-block;
    box-shadow: 0px 10px 28px -7px rgba(0, 0, 0, 0.1);
  }
  .card-item {
    background: linear-gradient(0deg, #2e80fa, #4bbafc);
  }

  .blue-num {
    color: #2175ef;
    font-size: 36px;
    line-height: 40px;
    font-weight: bold;
  }
  .orange-num {
    color: #ff9f00;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  .red-num {
    color: #f55545;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  .green-num {
    color: #00b853;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
</style>
