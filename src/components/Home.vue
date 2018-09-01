<template>
  <div id="home-app">
    <div class="row align-items-center justify-content-center row-h100">
      <div class="col-12 col-lg-5 text-center">
        <br>
        <div class="card text-center">
          <div class="card-body">
            <div>
              <h1 id="h1-app-name">Bigtail</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo sapien, scelerisque quis tristique a, bibendum lobortis metus. Aliquam sollicitudin purus id eros pulvinar pellentesque.</p>
              <hr>
              <auth-form v-if="!accessToken"></auth-form>

              <br>

              <p v-if="accessToken">Показываем формы поиска</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthForm from "./auth/AuthForm";

export default {
  components: {
    AuthForm
  },
  computed: {
    accessToken() {
      return this.$store.state.accessToken;
    }
  },
  created() {}
};
</script>

<style>
</style>


