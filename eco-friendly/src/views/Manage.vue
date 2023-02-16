<template>
  <el-container style="height: 100vh ">
    <el-container>
      <el-header  style="background-color:#204F71;position: relative">
        <Header/>
      </el-header>
        <router-view/>
    </el-container>
  </el-container>
</template>

<script>

import Header from "@/components/Header";


export default {
  components: {Header},
  data() {
    return {
      collapseBtnClass: 'el-icon-s-fold',
      isCollapsed:false,
      sideWidth:150,
      logoTextShow:true,
    }
  },
  methods: {

  }
}
</script>
<style>

</style>