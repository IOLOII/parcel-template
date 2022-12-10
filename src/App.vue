<template>
  <el-container class="home-page">
    <el-header style="background-color: #2175ef" class="top">
      <el-row justify="space-between">
        <el-col :span="12" class="left-title">
          <!-- <icon type="icon-logotubiao" style="font-size: 48px" /> -->
          <el-image
            style="width: 48px; height: 48px; border-radius: 4px"
            src="./static/logo_white.png"
            fit="fill"
          ></el-image>
          <span style="padding-left: 8px">图书馆管理决策系统</span>
        </el-col>
        <el-col
          :span="12"
          class="right-title"
          @click="open('http://183.248.49.207:8085/#/')"
        >
          <icon type="icon-jiashicangtubiao" style="font-size: 24px" />
          <span style="padding-left: 8px">吴老师</span>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="main-wapper">
      <el-main height="100%">
        <div class="card main-top-menus">
          <div v-for="(app, index) in staticData.appList" :key="index">
            <div class="top-icon" @click="index !== 0 ? open(app.link) : void 0">
              <icon :type="app.icon" />
              <div>
                {{ app.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="main-wrapper">
          <!-- 左侧 -->
          <div style="flex-grow: 1">
            <h2 class="h2-title">数据总览</h2>
            <div style="display: flex; flex-direction: column; gap: 20px">
              <!-- 顶部应用 -->
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
                    <div style="font-size: 16px">{{ data.label }}</div>
                    <div style="font-size: 48px">
                      {{ data.value }}
                    </div>
                  </div>
                  <div style="position: relative">
                    <div class="circle-bg"></div>
                    <icon
                      :type="data.icon"
                      style="width: 48px; height: 48px; padding: 8px; position: relative"
                    />
                  </div>
                </div>
              </div>
              <!-- 中部数据Menus -->
              <div class="card">
                <h3 class="h3-title">入馆人员分布</h3>
                <div class="digit-road data-total">
                  <el-row style="overflow: hidden">
                    <el-col :span="11">
                      <div>
                        <h3 style="font-size: 16px; margin: 20px 0 0; padding: 0">
                          <!-- 养管里程 -->
                        </h3>
                        <div>
                          <span class="blue-num">{{ digitNums.totlalLeftMil }}</span>
                          <span> 人 </span>
                          <!-- <span class="blue-num">{{
                            digitNums.totalLeftNum
                          }}</span>
                          <span> 条 </span> -->
                        </div>
                      </div>
                      <el-row
                        style="
                          font-size: 12px;
                          line-height: 25px;
                          margin-top: 20px;
                          color: #8f8f8f;
                        "
                      >
                        <el-col :span="24">
                          <span>学生(人)</span>
                          <span style="font-size: 15px" class="red-num"
                            >{{ digitNums.groad }}
                            <!-- /{{
                              digitNums.groadNum
                            }} -->
                          </span>
                        </el-col>
                        <el-col :span="24">
                          <span>教职工(人)</span>
                          <span style="font-size: 15px" class="green-num"
                            >{{ digitNums.sroad }}
                            <!-- /{{
                              digitNums.sroadNum
                            }} -->
                          </span>
                        </el-col>
                        <!-- <el-col :span="24">
                          <span>县道(公里/条)</span>
                          <span style="font-size: 15px" class="orange-num"
                            >{{ digitNums.xroad }}/{{
                              digitNums.xroadNum
                            }}</span
                          >
                        </el-col> -->
                      </el-row>
                    </el-col>
                    <el-col :span="13">
                      <v-chart class="chart" :option="option" theme="RGYB" />
                    </el-col>
                  </el-row>
                  <el-row align="middle">
                    <el-col
                      :span="index % 2 ? 10 : 14"
                      v-for="(col, index) in digitNums.totalRight"
                      class="digit-road-single-col-info"
                    >
                      <div
                        style="
                          width: 37%;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                        "
                      >
                        <div class="blue-num">{{ col.v1 }}</div>
                        <span>{{ col.label[0] }}</span>
                      </div>
                      <el-row align="middle" style="width: 67%">
                        <el-col :span="24" style="flex-wrap: wrap">
                          <span style="display: inline-block">{{ col.label[1] }}</span>
                          <span class="green-num">
                            {{ col.v2 }}{{ col.v3 >= 0 ? '/' + col.v3 : '' }}
                          </span>
                        </el-col>
                        <el-col :span="24" style="flex-wrap: wrap">
                          <span style="display: inline-block">{{ col.label[2] }}</span>
                          <span class="orange-num">
                            {{ col.v4 }}{{ col.v5 >= 0 ? '/' + col.v5 : '' }}
                          </span>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <!-- 下部数据 -->
              <div class="left-bottom data-total">
                <!-- 左侧 数据总览第一部分 -->
                <div>
                  <!-- 上部 -->
                  <div class="card">
                    <h3 class="h3-title">当年学院借阅分布</h3>
                    <el-row style="height: calc(100% - 67px)">
                      <!-- 数据元素 -->
                      <el-col :span="11" style="height: 220px">
                        <v-chart class="chart" :option="option_bar" theme="RGYB" />
                      </el-col>
                      <!-- 数据元素 -->
                      <el-col
                        :span="13"
                        style="display: flex; align-items: center; flex-direction: row"
                      >
                        <div
                          style="
                            width: 165px;
                            border-left: 2px solid #ebebeb;
                            padding-left: 30px;
                            height: 64%;
                            display: flex;
                            align-items: flex-start;
                            flex-direction: column;
                            justify-content: center;
                          "
                        >
                          <div class="blue-num" style="line-height: 1.5">7180</div>
                          <span>累计人数(人)</span>
                        </div>
                        <el-row align="middle">
                          <el-col :span="24" style="line-height: 2.5">
                            <span>借阅书本(本)</span>
                            <span class="green-num">13423</span>
                          </el-col>
                          <el-col :span="24">
                            <span>人均阅读(本)</span>
                            <span class="orange-num">1.86</span>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </div>
                  <!-- 下部 -->
                  <div class="card">
                    <div style="display: flex">
                      <h3 class="h3-title" style="flex-basis: 50%">空间管理</h3>
                      <h3 class="h3-title" style="flex-basis: 50%">阅读推广</h3>
                    </div>
                    <el-row>
                      <el-col
                        :span="12"
                        style="
                          height: 100%;
                          display: flex;
                          align-items: center;
                          flex-direction: row;
                          margin: 20px 0;
                          justify-content: space-around;
                        "
                      >
                        <div
                          style="
                            width: 165px;
                            padding-left: 30px;
                            height: 64%;
                            display: flex;
                            align-items: flex-start;
                            flex-direction: column;
                            justify-content: center;
                          "
                        >
                          <div>
                            <span class="blue-num" style="line-height: 1.5">{{
                              roadClean[0].reduce((a, b) => {
                                return a + b
                              }, 0)
                            }}</span>
                            <span> 张</span>
                          </div>
                          <el-row
                            style="
                              font-size: 12px;
                              line-height: 25px;
                              margin-top: 20px;
                              color: #8f8f8f;
                            "
                          >
                            <el-col :span="24">
                              <span>在用桌椅</span>
                              <span style="font-size: 15px" class="red-num">{{
                                roadClean[0][0]
                              }}</span>
                            </el-col>
                            <el-col :span="24">
                              <span>空留桌椅</span>
                              <span style="font-size: 15px" class="green-num">{{
                                roadClean[0][1]
                              }}</span>
                            </el-col>
                            <el-col :span="24">
                              <span>故障桌椅</span>
                              <span style="font-size: 15px" class="orange-num">{{
                                roadClean[0][2]
                              }}</span>
                            </el-col>
                          </el-row>
                        </div>
                        <el-row align="middle" style="height: 127px; width: 50%">
                          <v-chart class="chart" :option="option_pie" theme="RGYB" />
                        </el-row>
                      </el-col>

                      <el-col
                        :span="12"
                        style="
                          height: 100%;
                          display: flex;
                          align-items: center;
                          flex-direction: row;
                          margin: 20px 0;
                          justify-content: space-around;
                        "
                      >
                        <div
                          style="
                            width: 165px;
                            border-left: 2px solid #ebebeb;
                            padding-left: 30px;
                            height: 64%;
                            display: flex;
                            align-items: flex-start;
                            flex-direction: column;
                            justify-content: center;
                          "
                        >
                          <div>
                            <span class="blue-num" style="line-height: 1.5">
                              4021
                              <!-- {{
                              roadClean[1].reduce((a, b) => {
                                return a + b;
                              }, 0)
                            }} -->
                            </span>
                            <span> 人</span>
                          </div>
                          <el-row
                            style="
                              font-size: 12px;
                              line-height: 25px;
                              margin-top: 20px;
                              color: #8f8f8f;
                            "
                          >
                            <el-col :span="24">
                              <span>推文</span>
                              <span style="font-size: 15px" class="red-num">{{
                                roadClean[1][0]
                              }}</span>
                            </el-col>
                            <el-col :span="24">
                              <span>活动</span>
                              <span style="font-size: 15px" class="green-num">{{
                                roadClean[1][1]
                              }}</span>
                            </el-col>
                            <el-col :span="24">
                              <span>讲坛</span>
                              <span style="font-size: 15px" class="orange-num">{{
                                roadClean[1][2]
                              }}</span>
                            </el-col>
                          </el-row>
                        </div>
                        <el-row align="middle" style="height: 127px; width: 50%">
                          <v-chart class="chart" :option="option_pie2" theme="RGYB" />
                        </el-row>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <!-- 右侧 数据总览第二部分 -->
                <div class="card">
                  <h3 class="h3-title">累计借阅</h3>
                  <el-row style="height: calc(100% - 67px)">
                    <el-col :span="24" style="height: 220px">
                      <v-chart class="chart" :option="option_bar2" theme="RGYB" />
                    </el-col>
                    <el-col :span="24" style="height: 50%">
                      <el-row style="padding: 0px 25px 10px">
                        <el-col
                          :span="12"
                          v-for="(i, index) in data_order"
                          :key="index"
                          style="padding: 10px 10px"
                        >
                          <div
                            style="
                              font-size: 14px;
                              line-height: 64px;
                              display: flex;
                              justify-content: space-between;
                              padding: 0 20px;
                              background: #f5f6f8;
                              border-radius: 4px;
                            "
                            :style="{
                              borderLeft: '4px solid ' + i.color
                            }"
                          >
                            <span>{{ i.label }}</span>
                            <span>{{ i.value }}</span>
                          </div>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div>
          <!-- 右侧 -->
          <div style="width: 400px; min-width: 400px">
            <div>
              <h2 class="h2-title">通知公告</h2>
              <div style="overflow: hidden" class="card">
                <div class="notice-area">
                  <div v-for="not in notifies" :key="not.id">
                    <div>
                      <div class="roll">{{ not.title }}</div>
                    </div>
                    <!-- <span>2022-11-02</span> -->
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 class="h2-title">中心职责</h2>
              <div class="card" style="padding: 20px">
                <el-carousel height="140px">
                  <el-carousel-item
                    v-for="item in [
                      '/static/imgs/a449824b35de4123b9769ebd54b64d90_1920_600.jpg',
                      '/static/imgs/pagebanner.jpg'
                    ]"
                    :key="item"
                  >
                    <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
                    <img
                      :src="item"
                      alt=""
                      fit="fill"
                      style="width: 400px; height: 140px"
                    />
                  </el-carousel-item>
                </el-carousel>
                <div
                  style="
                    height: 258px;
                    font-size: 12px;
                    color: #969697;
                    line-height: 28px;
                    background: #f4f6f8;
                    margin-top: 20px;
                    overflow-y: auto;
                    padding: 20px;
                    text-indent: 2em;
                  "
                >
                  <p style="margin: 0">
                    本馆设有综合办公室、信息技术部、信息咨询部、采编部和流通阅览部5个部门。
                  </p>
                  <p style="margin: 0">
                    除开展常规的图书借阅服务和图书资源建设外，还开展了个性化的图书情报专题服务，为读者提供科技查新、查收查引、专业咨询、文献传递、课题信息情报检索等服务。
                  </p>
                  <p style="margin: 0">
                    同时，建立了专业馆员制度，每个二级学院和部分职能部门都有对应的专业馆员，帮助学校教职工充分利用图书馆文献信息资源，为教学和科研提供深层次服务。
                  </p>
                  <p style="margin: 0">
                    通过指导青山湖读书协会，每年举办读书月系列活动，定期举办读书沙龙活动以及组织好书推荐服务等多种方式，将图书馆的读者导读和阅读推广工作推向深入，营造了良好的读书氛围。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
  <div id="visibility-tips">
    <el-empty
      :image-size="200"
      description="当前显示分辨率过小，请缩放浏览器或调整显示器（分辨率 >= 1200px）"
    />
  </div>
</template>

<script setup>
  // import
  import { ref, reactive, onMounted, nextTick } from 'vue'
  import axios from 'axios'
  import icon from '@/components/icon'
  import NP from 'number-precision'
  import * as seamless from 'seamscroll'
  // import { getDingSdk } from '@/lib/dingSdk'

  // variables & refs & run
  const _refs = ref(null)
  const _reactive = reactive({})

  const staticData = {
    appList: [
      {
        name: '应用列表',
        icon: 'icon-yingyongliebiaotubiao',
        link: ''
      },
      {
        name: '入馆人员',
        icon: 'icon-shuzigonglutubiao'
        // link: "https://cxjt.91jt.net:9090/rmsRoad/sys/zzdLoginByRmsRoad",
      },
      {
        name: '借阅',
        icon: 'icon-gonglubaojietubiao'
        // link:
        //   "https://cxjt.91jt.net:9090/clean_sys/#/datascreen/view?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NjM4OTIyODEsInVzZXJuYW1lIjoiY2hhbmd4aW5nIn0._Vncz61WYXjhCXR5_4e2i8vziuYOWXl7_VrDI08NGH8",
      },
      {
        name: '数字资源方案',
        icon: 'icon-yunshujianguantubiao'
        // link: "https://cxjg.91jt.net:9090/danger_jgd/a/login",
      },
      {
        name: '读者画像',
        icon: 'icon-yingjigongdantubiao'
        // link: "https://cxjg.91jt.net:9090/rmsRoad/sys/zzdLogin",
      },
      {
        name: '图书借阅排行榜',
        icon: 'icon-changzhixunlutubiao'
        // link:
        // "https://app.changxinghuiyuan.com/electronic-map/elec-admin/index.html#/login",
      }
    ],
    dataCenter: [
      {
        label: '人脸识别闸机(台)',
        value: '6',
        icon: 'icon-jiedaotubiao',
        color: ['#4cbcfc', '#2d7ffa']
      },
      {
        label: '查询预览一体机(台)',
        value: '9',
        icon: 'icon-xiangzhentubiao',
        color: ['#4CE09B', '#07B077']
      },
      {
        label: '在馆工作人员(人)',
        value: '23',
        icon: 'icon-zhongxinjigoutubiao',
        color: ['#FFDD33', '#FAA700']
      },
      {
        label: '服务中心(个)',
        value: '5',
        icon: 'icon-guanlizhantubiao',
        color: ['#FFC042', '#FA7414 ']
      },
      {
        label: '馆藏图书(万册)',
        value: '135',
        icon: 'icon-baojiegongsitubiao',
        color: ['#FA8B4B', '#F55240']
      }
    ]
  }
  // 养管里程
  const option = ref({
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '85%',
        radius: [0, 70],
        data: [
          { value: 189, name: '学生' },
          { value: 17, name: '教职工' }
          // { value: 0, name: "" },
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
  // 数字公路-运输监管
  const option_bar = ref({
    tooltip: {
      trigger: 'axis'
    },
    yAxis: {
      type: 'category',
      data: [
        '财经学院',
        '管理学院',
        '机电工程学院',
        '建筑工程学院',
        '人文社科学院',
        '信息工程学院',
        '外语外贸学院'
      ]
    },
    xAxis: {
      type: 'value',
      show: false
    },
    series: [
      {
        data: [1246, 1453, 800, 1709, 991, 451, 530],
        type: 'bar',
        barWidth: 15,
        color: '#1e6aed'
      }
    ],
    grid: {
      left: 120,
      // right:10,
      top: 20,
      bottom: 20
      // height: '166px'
    }
  })
  // 数字公路-应急工单
  const option_bar2 = ref({
    tooltip: {
      trigger: 'axis'
    },
    yAxis: {
      type: 'category',
      data: [
        '财经学院',
        '管理学院',
        '机电工程学院',
        '建筑工程学院',
        '人文社科学院',
        '信息工程学院',
        '外语外贸学院'
      ]
    },
    xAxis: {
      type: 'value',
      show: false
    },
    series: [
      {
        data: [16446, 33213, 22212, 17090, 20711, 15001, 31342],
        type: 'bar',
        barWidth: 20,
        color: '#f34b3c'
      }
    ],
    grid: {
      left: 120,
      right: 80,
      top: 10,
      bottom: 10,
      height: '176px'
    }
  })
  const data_order = ref([
    { value: 135, label: '馆藏纸质图书(万册)', color: '#FF9F00' },
    { value: 565, label: '纸质报刊(类)', color: '#F55545' },
    { value: 2.6, label: '数字资源量(GB)', color: '#2175EF' },
    { value: 58.98, label: '电子图书(万册)', color: '#00B853' },
    { value: 9000, label: '电子学术期刊(种)', color: '#F55545' },
    { value: 200, label: '多媒体电脑(台)', color: '#FF9F00' }
  ])

  // 公路保洁-左侧
  const option_pie = ref({
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['55%', '95%'],
        label: {
          show: false
        },
        data: [
          { value: 122, name: '在用桌椅' },
          { value: 678, name: '空留桌椅' },
          { value: 22, name: '故障桌椅' }
        ]
      }
    ]
  })
  const option_pie2 = ref({
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['55%', '95%'],
        label: {
          show: false
        },
        data: [
          { value: 129, name: '推文' },
          { value: 16, name: '活动' },
          { value: 5, name: '讲坛' }
        ]
      }
    ]
  })

  const digitNums = ref({
    groad: 189,
    groadNum: 0,
    sroad: 17,
    sroadNum: 0,
    xroad: 0,
    xroadNum: 0,
    totlalLeftMil: 216,
    totalLeftNum: 0,

    xxroad: 0,
    xxroadNum: 0,
    croad: 0,
    croadNum: 0,
    totalRightMil: 0,
    totalRight: [
      {
        label: ['农村公路(公里)', '乡道(公里/条)', '村道(公里/条)'],
        v1: 0,
        v2: 0,
        v3: 0,
        v4: 0,
        v5: 0
      },
      {
        label: ['桥梁(座)', '桥梁(延米)', '公交站台(个)'],
        v1: 292,
        v2: 32259.387,
        v4: 230
      },
      {
        label: ['绿化(万平方米)', '绿化率', '服务站'],
        v1: 216.2,
        v2: 100,
        v4: 6
      },
      {
        label: ['涵洞(座)', '交调站点(个)', '治超站点(个)'],
        v1: 32,
        v2: 22,
        v4: 4
      }
    ]
  })

  const roadClean = ref([
    [122, 378, 22],
    [129, 6, 5]
  ])

  const notifies = ref([])
  // lifecycle
  onMounted(() => {
    notifies.value = [
      {
        id: '0',
        title: '关于国庆节期间开放安排的通知-2022-09-29'
      },
      {
        id: '1',
        title: '关于进出馆的指引-2022-09-21'
      },
      {
        id: '2',
        title: '关于中秋节期间开放安排的通知-2022-09-09'
      },
      {
        id: '3',
        title: '关于全面启动RFID自助借还服务的通知-2022-09-02'
      },
      {
        id: '4',
        title: '关于图书馆暑假借还书的温馨提示-2022-07-05'
      }
    ]

    nextTick(() => {
      seamless.init({
        dom: document.querySelector('.notice-area'),
        step: 0.2,
        singleHeight: 0
      })
    })

    return
    $axios
      .post('https://cxjg.91jt.net:9090/danger_jgd/a/mobile/GetListOwner')
      .then(({ body: res }) => {
        const { ownerType, ownerCount, warehouseType, workType } = res

        // 数字公路-运输监管
        let t1 = []
        let t2 = []
        ownerType.forEach(({ name, value }) => {
          t1.push(name)
          t2.push(value)
        })
        option_bar.value.series[0].data = t2
        option_bar.value.yAxis.data = t1
        // 数字公路-应急工单-part1
        t1 = []
        t2 = []
        warehouseType.forEach(({ name, value }) => {
          t1.push(name)
          t2.push(value)
        })
        option_bar2.value.series[0].data = t2
        option_bar2.value.yAxis.data = t1

        // 数字公路-应急工单-part2
        // workType
        // "plan",  -- 应急预案    "warehouse",  -- 应急仓库   "ranks",  -- 应急队伍  "ranksnumber",  -- 应急队伍人数   "individual",  -- 应急单兵  "vehicle" -- 应急车辆
        data_order.value[0].value = workType[0].plan
        data_order.value[1].value = workType[0].warehouse
        data_order.value[2].value = workType[0].ranks
        data_order.value[3].value = workType[0].ranksnumber
        data_order.value[4].value = workType[0].individual
        data_order.value[5].value = workType[0].vehicle
      })
      .catch(err => {
        console.log(err)
      })
    axios({
      method: 'post',
      url: 'https://szncl.zjcx.gov.cn:12443/xmzx/api/api/pc/pcHome/queryRoadIndexCount',
      data: 330522000000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(({ data: res }) => {
        // 国道 groad groadNum
        // 省道 sroad sroadNum
        // 县道 xroad xroadNum
        // 乡道 xxroad xxroadNum
        // 村道 croad croadNum
        const {
          nationalMileage: groad = 0,
          nationalNums: groadNum = 0,

          provincialMileage: sroad = 0,
          provincialNums: sroadNum = 0,

          countyMileage: xroad = 0,
          countyNums: xroadNum = 0,

          townshipMileage: xxroad = 0,
          townshipNums: xxroadNum = 0,

          villageMileage: croad = 0,
          villageNums: croadNum = 0
        } = res
        digitNums.value = Object.assign(digitNums.value, {
          groad,
          groadNum,
          sroad,
          sroadNum,
          xroad,
          xroadNum,
          totlalLeftMil: NP.plus(groad, sroad, xroad),
          totalLeftNum: NP.plus(groadNum, sroadNum, xroadNum),

          xxroad,
          xxroadNum,
          croad,
          croadNum,
          totalRightMil: NP.plus(xxroad, croad),
          totalRight: [
            {
              label: ['农村公路(公里)', '乡道(公里/条)', '村道(公里/条)'],
              v1: NP.plus(xxroad, croad),
              v2: xxroad,
              v3: xxroadNum,
              v4: croad,
              v5: croadNum
            },
            {
              label: ['桥梁(座)', '桥梁(延米)', '公交站台(个)'],
              v1: 292,
              v2: 32259.387,
              v4: 230
            },
            {
              label: ['绿化(万平方米)', '绿化率', '服务站'],
              v1: 216.2,
              v2: 100,
              v4: 6
            },
            {
              label: ['涵洞(座)', '交调站点(个)', '治超站点(个)'],
              v1: 32,
              v2: 22,
              v4: 4
            }
          ]
        })
        option.value.series[0].data = [
          { value: groad, name: `国道(公里)` },
          { value: sroad, name: `省道(公里)` },
          { value: xroad, name: `县道(公里)` }
        ]
      })
      .catch(err => {
        console.log(err)
      })
    $axios
      .get('/yg_clean/highwayClean/statistics')
      .then(({ statistics }) => {
        option_pie.value.series[0].data = [
          { value: statistics.vehicle.VT001, name: '洒水车' },
          { value: statistics.vehicle.VT003, name: '大型清扫车' },
          { value: statistics.vehicle.VT005, name: '大型洗扫车' }
        ]
        roadClean.value[0][0] = statistics.vehicle.VT001
        roadClean.value[0][1] = statistics.vehicle.VT003
        roadClean.value[0][2] = statistics.vehicle.VT005

        option_pie2.value.series[0].data = [
          { value: statistics.person.WT001, name: '保洁' },
          { value: statistics.person.WT003, name: '边坡' }
        ]
        roadClean.value[1][0] = statistics.person.WT001
        roadClean.value[1][1] = statistics.person.WT003
      })
      .catch(err => {
        console.log(err)
      })
    $axios
      .get('/rmsRoad/notify/notifyPcDtos?current=0&size=30')
      .then(({ records: res }) => {
        notifies.value = res

        nextTick(() => {
          seamless.init({
            dom: document.querySelector('.notice-area'),
            step: 0.2,
            singleHeight: 0
          })
        })
      })
  })

  // events & funs
  const _foo = () => {}

  const getAuthCode = async () => {
    // const { dd } = await getDingSdk()
    // console.log(dd)
    // return new Promise((res, rej) => {
    //   dd.getAuthCode({})
    //     .then(({ auth_code }) => {
    //       res(auth_code)
    //     })
    //     .catch(err => rej({ err, msg: '获取授权码失败' }))
    // })
  }

  // todo 钉钉无法直接重定向，使用 iframe 替代
  const openSystem = url => {
    const iframe = document.createElement('iframe')
    iframe.src = url
    iframe.setAttribute('class', 'system-iframe')

    document.body.append(iframe)
  }

  const closeSystem = () => {
    document
      .querySelectorAll('.system-iframe')
      .forEach(dom => document.body.removeChild(dom))
  }

  const open = link => {
    if (!link) return
    getAuthCode().then(authCode => {
      openSystem(`${link}?authcode=${authCode}`)
    })
  }
</script>
<style lang="scss">
  .system-iframe {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;
    border: 0;

    background-color: #ebeef5;
    z-index: 999;
  }

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

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
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
      display: flex;
      align-items: center;
    }
    .right-title {
      text-align: right;
      color: white;
      line-height: 90px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      &:hover {
        cursor: pointer;
      }
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
      justify-content: space-between;
      align-items: center;

      font-size: 24px;
      color: #ababc0;
      padding-right: 160px;
      > div:not(:first-child) {
        .top-icon:hover {
          background: #2174ef0f;
          cursor: pointer;
          border-radius: 10px;
        }
      }
      .top-icon {
        padding: 20px;
      }

      & > div:first-child {
        // padding: 0 75px !important;
        // height: 100px;
        border-right: 2px solid #ebebeb;
        padding: 0 127px;
        .top-icon > svg.icon {
          border-radius: 50%;
          border: 1px dashed #b8b8b8;
          padding: 10px;
          background: #ededed;
        }
      }
    }
    @media screen and (max-width: 1400px) {
      .main-top-menus {
        padding-right: 40px;
        & > div:first-child {
          padding: 0 75px !important;
        }
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
          // width: 60px;
          & > div {
          }
        }
        .circle-bg {
          position: absolute;
          width: 65px;
          height: 65px;
          background: rebeccapurple;
          border-radius: 50%;
          top: 0;
          background: linear-gradient(0deg, var(--color-start), transparent) !important;
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
      width: 400px;
      display: flex;
      flex-direction: column;
      height: 445px;
      // overflow-y: auto;
      overflow: unset !important;
      // gap: 5px;
      > div {
        line-height: 60px;
        border-bottom: 1px solid #e8e8e8;
        color: #626262;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        &:hover {
          background: #2174ef0f;
        }
      }
    }
    .digit-road {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 36px;
      padding-top: 0;
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
      align-items: flex-start;
      > div {
        width: calc(50% - 10px);
      }
      > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 20px;
        > div {
          // height: 210px;
        }
      }
      > div:nth-child(2) {
        // height: 440px;
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
    @media screen and (max-width: 1600px) {
      .left-bottom > div:nth-child(1) .card:nth-child(2) {
        .el-col {
          flex: 0 0 100%;
          max-width: 100%;
        }
        > .el-row .el-col-12:nth-child(2) {
          div {
            border-left: unset !important;
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
  .top-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .icon {
      width: 36px;
      height: 36px;
      // color:#979797;
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
    // padding-left: 5px;
  }
  .orange-num {
    color: #ff9f00;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding-left: 5px;
  }
  .red-num {
    color: #f55545;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding-left: 5px;
  }
  .green-num {
    color: #00b853;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding-left: 5px;
  }
  .h2-title {
    font-size: 24px;
    margin: 40px 0 20px;
    &::before {
      content: '';
      width: 4px;
      height: 20px;
      border-radius: 5px;
      vertical-align: bottom;
      background: linear-gradient(0deg, #2e80fa, #4bbafc);
      margin-right: 8px;
      display: inline-block;
      transform: translateY(-25%);
    }
  }
  .h3-title {
    font-size: 16px;
    padding-left: 20px;
    margin: 20px 0 10px;
    &::before {
      content: '';
      width: 8px;
      height: 8px;
      vertical-align: bottom;
      background: linear-gradient(0deg, #2e80fa, #4bbafc);
      margin-right: 8px;
      display: inline-block;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }

  .roll {
    white-space: nowrap;
    &:hover {
      animation: move 6s ease-in-out;
      // animation-direction: alternate;
      animation-iteration-count: infinite;
      animation-delay: 0.3s;
    }
  }
  div:has(> .roll) {
    overflow: hidden;
  }
  @keyframes move {
    100% {
      // margin-right: 100%;
      transform: translateX(-100%);
    }
  }
</style>
