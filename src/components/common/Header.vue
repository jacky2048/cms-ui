<template>
  <el-header>
    <el-row>
      <el-col :span='6'><div class="text-logo">{{ msg }}</div></el-col>
      <el-col :span='16'><div class="date-style">{{ nowTime }}</div></el-col>
      <el-col :span='2'>
        <div>
          <el-dropdown>
            <span>admin</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看个人信息</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'CMS System',
      nowTime: ''
    }
  },
  methods: {
    logout () {
      this.$router.replace({path: '/login'})
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    },
    // 获取当前时间函数
    timeFormate () {
      let newDate = new Date()
      let date = this.zeroPadding(newDate.getFullYear(), 4) + '年' + this.zeroPadding(newDate.getMonth() + 1, 2) +
      '月' + this.zeroPadding(newDate.getDate(), 2) + '日'
      let time = this.zeroPadding(newDate.getHours(), 2) + ':' + this.zeroPadding(newDate.getMinutes(), 2) + ':' + this.zeroPadding(newDate.getSeconds(), 2)
      this.nowTime = date + ' ' + time
    },
    // 定时器函数
    nowTimes () {
      this.timeFormate()
      setInterval(this.nowTimes, 1000)
    }
  },
  mounted () {
    this.nowTimes()
  }
}
</script>

<style>
  .el-header {
    background-color: rgb(10, 47, 88);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    height: 70px;
  }
  .text-logo {
    display: inline-block;
    vertical-align: middle;
    border-style: none;
    font-size: 25px;
    color: white;
    text-align: center;
  }
  .date-style {
    text-align: right;
    color: black;
  }
</style>
