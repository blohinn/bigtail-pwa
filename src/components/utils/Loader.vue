<template>
  <div id="loader">
    <div class="text-center">
      <p>Загрузка результатов...</p>
      <p>Проблемы с загрузкой?
        <a href="#" v-on:click="logout()">Выйдите</a> и авторизуйтесь заново.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$cookies.remove("accessToken");
      window.location.replace("/");
    }
  }
};
</script>
