<!--
  作者：hcodeb
  时间：2022年07月24日 11:08:34
-->
<template>
  <div class="tabs">
    <el-tag v-for="(tag, index) in tags" :key="tag.name" :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'" @click="changeMenu(tag)" @close="handleClose(tag, index)"
      size="small">
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTag',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    }),
  },
  watch: {},
  created() { },
  mounted() { },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu(tag) {
      this.$router.push(tag.name)
    },
    handleClose(tag, index) {
      const length = this.tags.length - 1
      this.close(tag)
      if (tag.name !== this.$route.name) {
        return
      }
      if (index === length) {
        this.$router.push(this.tags[index-1].name)
      } else {
        this.$router.push(this.tags[index].name)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;

  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
