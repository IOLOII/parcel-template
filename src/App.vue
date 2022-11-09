<template>
  <el-container>
    <el-header style="background-color: #2175ef" class="top">
      <el-row justify="space-between">
        <el-col :span="4" class="left-title">交通智管通</el-col>
        <el-col :span="4" class="right-title">驾驶舱</el-col>
      </el-row>
    </el-header>
    <el-container class="main-wapper">
      <el-main height="100%">
        <div class="card main-top-menus">
          <div>应用列表</div>
          <div>数字公路</div>
          <div>公路保洁</div>
          <div>运输监管</div>
          <div>应急工单</div>
          <div>长智寻路</div>
        </div>
        <div class="main-wrapper">
          <div style="flex-grow: 1">
            <h2>数据总览</h2>
            <div style="display: flex; flex-direction: column; gap: 20px">
              <div class="card data-total">
                <div class="card-item">
                  <div>
                    <span>乡镇(个)</span>
                  </div>
                  <div>icon</div>
                </div>
                <div class="card-item">
                  <div>
                    <span>街道(个)</span>
                  </div>
                  <div>icon</div>
                </div>
                <div class="card-item">
                  <div>
                    <span>中心机构(个)</span>
                  </div>
                  <div>icon</div>
                </div>
                <div class="card-item">
                  <div>
                    <span>管理站(个)</span>
                  </div>
                  <div>icon</div>
                </div>
                <div class="card-item">
                  <div>
                    <span>保洁公司(个)</span>
                  </div>
                  <div>icon</div>
                </div>
              </div>
              <div class="card">
                <h2>数字公路</h2>
                <div class="digit-road data-total">
                  <div>管养里程 part1</div>
                  <div>管养里程 part2</div>
                </div>
              </div>
              <div class="left-bottom data-total">
                <div>
                  <div class="card">运输监管</div>
                  <div class="card">公路保洁</div>
                </div>
                <div class="card">应急工单</div>
              </div>
            </div>
          </div>
          <div style="width: 400px; flex-base: 400px">
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
  }
  div {
    // border: 1px solid black;
    box-sizing: border-box;
  }
</style>

<style lang="scss" scoped>
  $topHeight: 90px;
  $radius: 8px;
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
        background: linear-gradient(180deg, #4cbcfc, #2d7ffa);
        // box-shadow: 0 10px 25px -5px #4CBCFC;
        box-shadow: 0 10px 25px -3px #2d7ffa;
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
      > div {
        height: 180px;
        width: calc(50% - 10px);
        // min-width:700px;
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
        width: 100%;
      }
    }
  }
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
</style>
