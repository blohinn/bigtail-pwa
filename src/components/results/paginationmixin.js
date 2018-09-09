let mixin = {
  data() {
    return {
      page: 1
    };
  },
  methods: {
    onPrevPage() {
      this.page--;
      if (this.page <= 0) {
        this.page = 1;
      } else {
        this.updateItems(this.page);
      }
    },
    onNextPage() {
      this.page++;
      this.updateItems(this.page);
    }
  },
  created() {
    window.onpopstate = function(event) {
      // window.location.replace(document.location);
      window.location.replace("/");
    };
    let url = new URL(window.location.href);
    if (!url.searchParams.get("page")) {
      window.history.pushState(null, null, window.location.href + "&page=1");
    }
    let page = url.searchParams.get("page") ? url.searchParams.get("page") : 1;

    this.page = parseInt(page);

    this.updateItems(this.page);
  }
};

export default mixin;
