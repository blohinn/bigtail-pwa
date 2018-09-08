<template>
  <div id='auth-form-app'>
    <div class="text-center">
      <p>Авторизация необходима для получения списка участников закрытых групп. Вам не потребуется вводить логин и пароль от ВКонтакте, если вы уже авторизованы на сайте.
      </p>
      <a class="btn btn-primary btn-lg" href="https://oauth.vk.com/authorize?client_id=6678040&display=page&redirect_uri=http://localhost:8080/auth&scope=friends,offline,photos&response_type=token&v=5.84">
        <i class="fab fa-vk"></i> Войти через ВКонтакте</a>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style>
</style>

