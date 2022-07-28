<!--
  作者：hcodeb
  时间：2022年07月19日 16:36:00
-->
<template>
  <header>
    <div class="l-content">
      <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
      <!-- <h3 style="color: #fff">首页</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :class="$route.name === item.name ? 'bread-crumb' : 'bread-crumb1'" v-for="item in tags"
          :key="item.path + ''" :to="item.path">{{ item.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="user" :src="userImg" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CommonHeader',
  data() {
    return {
      userImg: require('@/assets/images/user.png')
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  },
  watch: {},
  created() { },
  mounted() { },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    },
    logOut() {
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.l-content {
  display: flex;
  align-items: center;

  .el-button {
    margin-right: 20.0025px;
  }
}

.r-content {
  .user {
    width: 39.9975px;
    height: 39.9975px;
    border-radius: 50%;
  }
}

.bread-crumb /deep/ .el-breadcrumb__inner {
  color: #fff !important
}

.bread-crumb1 /deep/ .el-breadcrumb__inner {
  color: #606266 !important
}
</style>
