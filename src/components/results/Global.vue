<template>
  <div id="results">
    <show-by-list v-bind:itemsList="items" v-bind:page="page" v-on:prev-page="onPrevPage()" v-on:next-page="onNextPage()"></show-by-list>
  </div>
</template>

<script>
import ShowByList from "./show/ByList";
import PaginationMixIn from "./paginationmixin.js";

export default {
  mixins: [PaginationMixIn],
  components: {
    ShowByList
  },
  data() {
    return {
      items: []
    };
  },
  computed: {
    accessToken() {
      return this.$store.state.accessToken;
    }
  },
  methods: {
    updateItems(page = 1) {
      let url = new URL(window.location.href);

      let q = url.searchParams.get("user-fullname");
      let sex = url.searchParams.get("sex");
      let ageFrom = url.searchParams.get("min-age");
      let ageTo = url.searchParams.get("max-age");
      let country = url.searchParams.get("country");
      let city = url.searchParams.get("city-id");

      VK.Api.call(
        "execute.getGlobalSearchList",
        {
          q: q,
          sex: sex,
          age_from: ageFrom,
          age_to: ageTo,
          country: country,
          city: city,
          count: 10,
          offset: (page - 1) * 10,
          v: 5.84,
          access_token: this.accessToken
        },
        r => {
          if (r.response.items) {
            this.items = r.response.items;
            console.log(this.items);
          } else {
            console.error("Error while request to VK API.");
            console.log(r);
          }
        }
      );
    }
  }
};
</script>

