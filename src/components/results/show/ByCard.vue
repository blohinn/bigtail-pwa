<template>
  <div id="by-card">
    <div v-if="itemsList.length != 0">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-5">
          <div class="view-box">
            <p>Пока криво</p>
            <div class="owl-carousel">
              <div v-for="(photo, index) in itemsList[currentCard].links_photo.slice(0,4)" :key="index">
                <div v-if="itemsList[currentCard].links_photo[index].sizes[4].url" style="padding: 0;">
                  <img v-bind:src="itemsList[currentCard].links_photo[index].sizes[4].url">
                </div>
              </div>
            </div>
            <button type="button" v-on:click="prevCard()">Пред. карточка</button>
            <button type="button" v-on:click="nextCard()">След. карточка</button>
          </div>
        </div>
      </div>
    </div>
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
  },
  mounted() {
    $(document).ready(function() {
      $(".owl-carousel").owlCarousel({
        items: 1,
        lazyLoad: true
      });
    });
  }
};
</script>

<style>
</style>
