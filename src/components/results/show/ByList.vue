<template>
  <div id="results-list">
    <div v-for="item in itemsList" :key="item.id">
      {{ item.first_name }} {{ item.last_name }}
    </div>
    <button type="button" v-on:click="prevPage()">Назад</button>
    <button type="button" v-on:click="nextPage()">Далее</button>
  </div>
</template>

<script>
export default {
  props: {
    itemsList: {
      type: Array,
      required: true
    },
    page: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevPage() {
      if (this.page == 1) {
        history.pushState(
          null,
          null,
          window.location.search.replace(/page=\d+/gi, "page=" + this.page)
        );
      } else {
        history.pushState(
          null,
          null,
          window.location.search.replace(
            /page=\d+/gi,
            "page=" + (this.page - 1)
          )
        );
      }

      this.$emit("prev-page");
    },
    nextPage() {
      history.pushState(
        null,
        null,
        window.location.search.replace(/page=\d+/gi, "page=" + (this.page + 1))
      );

      this.$emit("next-page");
    }
  }
};
</script>

<style>
</style>
