<template>
  <div id="home-app">
    <div class="row align-items-center justify-content-center row-h100">
      <div class="col-12 col-lg-5">
        <br>
        <div class="card">
          <div class="card-body">
            <div>
              <template v-if="!searchFormsActivated">
                <h1 class="text-center" id="h1-app-name">Bigtail</h1>
                <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo sapien, scelerisque quis tristique a, bibendum lobortis metus. Aliquam sollicitudin purus id eros pulvinar pellentesque.</p>
                <hr>
              </template>

              <auth-form v-if="!accessToken"></auth-form>

              <div v-if="accessToken" id="search-form-type-selector">
                <h5 class="text-center">Поиск среди...</h5>
                <p></p>
                <div class="d-flex justify-content-around">
                  <button type="button" class="btn btn-outline-primary" v-bind:class="{active: currentForm == 'groups'}" v-on:click="searchFormsActivated = true; currentForm = 'groups'">Группы</button>
                  <button type="button" class="btn btn-outline-primary" v-bind:class="{active: currentForm == 'friends'}" v-on:click="searchFormsActivated = true; currentForm = 'friends'">Друзей</button>
                  <button style="font-size: 14px" type="button" class="btn btn-outline-primary" v-bind:class="{active: currentForm == 'global'}" v-on:click="searchFormsActivated = true; currentForm = 'global'">Глобально</button>
                </div>
              </div>

              <br>

              <groups-form v-if="currentForm == 'groups'"></groups-form>
              <friends-form v-if="currentForm == 'friends'"></friends-form>
              <global-form v-if="currentForm == 'global'"></global-form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthForm from "./auth/AuthForm";
import GroupsForm from "./searchforms/Groups";
import FriendsForm from "./searchforms/Friends";
import GlobalForm from "./searchforms/Global";

export default {
  components: {
    AuthForm,
    GroupsForm,
    FriendsForm,
    GlobalForm
  },
  data() {
    return {
      currentForm: null,
      searchFormsActivated: false
    };
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


