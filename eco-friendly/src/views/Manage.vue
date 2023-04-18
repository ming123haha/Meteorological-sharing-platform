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
    }
  },
  methods: {

  }
}
</script>
<style>

</style>