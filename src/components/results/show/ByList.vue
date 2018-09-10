<template>
  <div id="results-list">
    <div class="row">
      <div v-for="item in itemsList" :key="item.id" class="col-xs-12 col-sm-6 view-box-wrapper">
        <div class="view-box">

          <div class="user-info">
            <a v-bind:href="'https://vk.com/id' + item.id">
              <p>
                {{ item.first_name }} {{ item.last_name }}
              </p>
            </a>
          </div>

          <div v-for="(photo, index) in item.links_photo.slice(0,4)" :key="index">
            <div v-if="item.links_photo[index].sizes[3].url" class="col-xs-12 col-sm-6 view-box-img" style="padding: 0;">
              <img v-bind:src="item.links_photo[index].sizes[3].url">
            </div>
          </div>

        </div>
        <br>
      </div>
    </div>

    <ul class="pagination pagination-lg justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" v-on:click.prevent="prevPage()" tabindex="-1">Назад</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" v-on:click.prevent="nextPage()">Далее</a>
      </li>
    </ul>

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
  },
  mounted() {
    $(document).ready(function() {
      var $container = $(".view-box");
      var $test = $(".row");
      $container.imagesLoaded(function() {
        $container.masonry({
          columnWidth: ".view-box-img",
          itemSelector: ".view-box-img"
        });
        $test.masonry({
          columnWidth: ".view-box-wrapper",
          itemSelector: ".view-box-wrapper"
        });
      });
    });
  }
};
</script>

<style>
img {
  max-width: 100%;
}

.view-box-skeleton {
  margin-bottom: 15px;
}

.view-box {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.user-info {
  padding: 2px 5px 0 5px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.47);
  position: relative;
  z-index: 2;
}

.user-info p {
  opacity: 0.9;
  font-size: 15px;
  color: white;
  display: inline-block;
}

.view-box-img {
  padding: 0;
}

.likes-info {
  padding: 2px 5px 0 5px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.47);
  position: absolute;
  bottom: 0px;
  right: 1px;
  left: 0px;
  z-index: 2;
}

.likes-info span {
  opacity: 0.9;
  font-size: 15px;
  display: inline-block;
}

.likes-icon {
  color: white;
  vertical-align: middle !important;
  transition: 0.5s;
}

.likes-count {
  color: white;
}

.likes-icon:hover {
  cursor: pointer;
  color: red;
  transition: 0.5s;
}

.likes-count {
  font-size: 14px !important;
}
</style>
