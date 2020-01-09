<template>
  <div class="card-columns" >
    <div class="card" v-for="item in results" :key="item.id">
      <img v-if="item.media" class="card-img-top" :src="item.media[0].gif.url" :alt="item.title" @error="error(item)">
<!--      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text" v-html="truncate(item.description || item.abstract, 50)"></p>
      </div>
-->
    </div>
  </div>
</template>

<script lang="ts">
  import VsResults from './vs-results-class';
  export default VsResults;
</script>

<style lang="scss" scoped>
  @import './vs-results.scss';
</style>