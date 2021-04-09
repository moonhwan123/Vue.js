<template>
  <div>
      <div v-for="ask in asks" v-bind:key="ask.index">{{ask.title}}</div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js'
export default {
  data() {
    return {
      asks : []
    }
  },

  created(){
    var vm = this;
    fetchAskList()
      .then(response=>{
        console.log(response);
        vm.asks = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  },//end created()

}
</script>

<style>

</style>