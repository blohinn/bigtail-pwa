<template>
  <div id="by-card">
    <div v-if="itemsList.length != 0">
      {{ itemsList[currentCard].first_name }} {{ itemsList[currentCard].last_name }}
    </div>
    <button type="button" v-on:click="prevCard()">Пред. карточка</button>
    <button type="button" v-on:click="nextCard()">След. карточка</button>
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
  data() {
    return {
      currentCard: 0
    };
  },
  methods: {
    prevCard() {
      if (this.currentCard == 0) {
        this.prevPage();
      } else {
        this.currentCard--;
      }
    },
    nextCard() {
      if (this.currentCard == 9) {
        this.nextPage();
      } else {
        this.currentCard++;
      }
    },

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
      if (this.page != 1) {
        this.currentCard = 9;
      }
    },
    nextPage() {
      history.pushState(
        null,
        null,
        window.location.search.replace(/page=\d+/gi, "page=" + (this.page + 1))
      );

      this.$emit("next-page");
      this.currentCard = 0;
    }
  }
};
</script>

