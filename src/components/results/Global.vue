<template>
  <div id="results">
    <div v-for="item in items" :key="item.id">
      {{ item.first_name }} {{ item.last_name }}
    </div>
  </div>
</template>

<script>
export default {
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
  beforeCreate() {
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
        offset: 0,
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
};
</script>

