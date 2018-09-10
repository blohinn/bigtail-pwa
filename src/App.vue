<template>
  <div id="app">

    <div class="container-fluid">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  created() {
    if (this.$cookies.get("accessToken")) {
      this.$store.commit("setAccessToken", this.$cookies.get("accessToken"));
      console.log("AccessToken loaded.");
    }
    if (this.$cookies.get("resultsViewType")) {
      this.$store.commit(
        "changeResultsViewType",
        this.$cookies.get("resultsViewType")
      );
    }
  }
};
</script>

<style>
</style>
