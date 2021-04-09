<template>
  <div>
      <div v-for="job in jobs" v-bind:key="job.index">{{job.title}}</div>
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js'

export default {
  data() {
    return{
      jobs : []
    }
  },

  created(){
    var vm = this;
    fetchJobsList()
      .then(
        response => {
          console.log(response);
          vm.jobs = response.data;
        } 
      )
      .catch(
        error => {
          console.log(error);
        }
      )
  }//end created()

}
</script>

<style>

</style>