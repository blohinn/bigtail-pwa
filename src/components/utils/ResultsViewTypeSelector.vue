<template>
  <div id="results-view-type-selector">
    <div class="form-group">
      <div class="radio">
        <label><input v-on:change="changeViewType($event.target.value)" type="radio" name="optradio" value="list" checked>Списком</label>
      </div>
      <div class="radio">
        <label><input v-on:change="changeViewType($event.target.value)" v-model="resultsViewType" type="radio" name="optradio" value="card">По одному</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reloadPage: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      resultsViewType: this.$store.state.resultsViewType
    };
  },
  methods: {
    changeViewType(value) {
      let availableTypes = ["list", "card"];
      if (availableTypes.includes(value)) {
        this.$store.commit("changeResultsViewType", value);
        this.$cookies.set("resultsViewType", value, { expires: 365 });
        this.$emit("results-view-type-changed", value);
      }
      if (this.reloadPage) {
        location.reload();
      }
    }
  }
};
</script>

