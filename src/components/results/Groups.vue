<template>
  <div id="results">
    <results-view-type-selector v-on:results-view-type-changed="onResultsViewChanged($event)"></results-view-type-selector>
    <show-by-list v-if="resultsViewType == 'list'" v-bind:itemsList="items" v-bind:page="page" v-on:prev-page="onPrevPage()" v-on:next-page="onNextPage()"></show-by-list>
    <show-by-card v-if="resultsViewType == 'card'" v-bind:itemsList="items" v-bind:page="page" v-on:prev-page="onPrevPage()" v-on:next-page="onNextPage()"></show-by-card>
  </div>
</template>

<script>
import ShowByList from "./show/ByList";
import ShowByCard from "./show/ByCard";
import PaginationMixIn from "./paginationmixin.js";
import ResultsViewTypeSelector from "../utils/ResultsViewTypeSelector";

export default {
  mixins: [PaginationMixIn],
  components: {
    ShowByList,
    ShowByCard,
    ResultsViewTypeSelector
  },
  data() {
    return {
      items: [],
      resultsViewType: this.$store.state.resultsViewType
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

      let screenName = url.searchParams.get("group-link").split("/")[3];
      let q = url.searchParams.get("user-fullname");
      let sex = url.searchParams.get("sex");
      let ageFrom = url.searchParams.get("min-age");
      let ageTo = url.searchParams.get("max-age");
      let country = url.searchParams.get("country");
      let city = url.searchParams.get("city-id");

      VK.Api.call(
        "execute.getGroupMembersList",
        {
          screen_name: screenName,
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
    },
    onResultsViewChanged(viewType) {
      this.resultsViewType = viewType;
      this.updateItems(this.page);
    }
  }
};
</script>

