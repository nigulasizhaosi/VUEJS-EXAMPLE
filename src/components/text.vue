<template>
  <div class="pptList">
     <a href="javascript:;" v-on:click='ckFn'>点击</a>
  </div>
</template>
<script>
 import {mapGetters,mapState} from 'vuex';
export default {
  data () {
    return {
        
    }
  },
  computed: mapState ({
        count: state => state.count,
        countAlias: 'count',    // 别名 `count` 等价于 state => state.count
    }),
  methods : {
    ckFn (){
      console.log(this.$store.state.count);
    }
  }
}


</script>
 
<style>
</style>