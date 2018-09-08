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

    let screenName = url.searchParams.get("user-link").split("/")[3];
    let q = url.searchParams.get("user-fullname");

    VK.Api.call(
      "execute.getFriendsList",
      {
        screen_name: screenName,
        q: q,
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

