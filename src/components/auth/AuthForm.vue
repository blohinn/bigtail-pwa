<template>
  <div id='auth-form-app'>
    <div class="text-center">
      <p>Авторизация необходима для получения списка участников закрытых групп. Вам не потребуется вводить логин и пароль от ВКонтакте, если вы уже авторизованы на сайте.
      </p>
      <a class="btn btn-primary btn-lg" v-bind:href="authLink">
        <i class="fab fa-vk"></i> Войти через ВКонтакте</a>
      <br>
      <br>
      <p style="font-size: 14px" class="text-muted">Токен доступа хранится на вашей стороне и не передается на сервер. Исходный код приложения открыт.</p>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    authLink() {
      const protocol =
        window.location.hostname == "localhost" ? "http" : "https";

      const authLink =
        "https://oauth.vk.com/authorize?client_id=6678040&display=page&redirect_uri=" +
        protocol +
        "://" +
        window.location.host +
        "/auth&scope=friends,offline,photos&response_type=token&v=5.84";

      return authLink;
    }
  }
};
</script>

<style>
</style>

