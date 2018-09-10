<template>
  <div id="loader">
    <div class="text-center">
      <p>Загрузка результатов...</p>
      <p>Проблемы с загрузкой?
        <a href="#" v-on:click="logout()">Выйдите</a> и авторизуйтесь заново.
      </p>
      <p class="text-danger">Частая проблема - после выхода с сайта vk.com не подргужает результаты и тут.
      </p>
      <p class="text-danger">Если лень логиниться заново - переключите селектор типа отображения (списком/по-одному). Авось сработает.</p>
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
