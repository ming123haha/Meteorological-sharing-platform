<template>
      <div class="datasearch">
        <div>
          <inputdata></inputdata>
          <div class="search">
            <search></search>
          </div>
          <linedata></linedata>
        </div>
      </div>
</template>

<script>
import  linedata from "@/components/linedata"
import inputdata from "@/components/inputdata"
export default {
  name: "datasearch",
  components: {
    linedata: linedata,
    inputdata:inputdata,
  }
}


</script>

<style scoped>
.datasearch{
  width: 100vw;
  height: 100vh;
  /*background-image: url(../assets//images/bgc.jpg);*/
}



</style>