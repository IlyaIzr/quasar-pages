<template>
  <div class="row">
    <div class="col"></div>
    <div class="col-12 col-md-8">
      <Container :data="localData" />
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
import Container from "./Container";
export default {
  name: "Main",
  components: { Container },
  data() {
    return {
      localData: undefined,
    };
  },

  beforeCreate() {
    // Public function to set any data from window. Vue will update
    window.mainPageData = (data) => {
      if (data) this.localData = data;
      else console.log("no data provided");
      return data;
    };
  },
};
</script>

<style>
</style>