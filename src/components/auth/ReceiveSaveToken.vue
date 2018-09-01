<template>
  <div id="receive-save-token">
    <div class="row">
      <div class="col-12">
        <br>
        <template v-if="accessTokenReceived">
          <h1>Авторизация...</h1>
          <p>В случае успешной авторизации вы будете автоматически переадресованы на главную страницу.</p>
        </template>

        <template v-if="accessToken">
          <h1>Вы уже авторизованы.</h1>
          <a href="/">Вернуться на главную</a>
        </template>

        <template v-if="!accessToken && !accessTokenReceived">
          <h1>Ошибка авторизации.</h1>
          <p>Данная страница нужна лишь для обработки запросов на авторизацию.</p>
          <p>Если вы хотите авторизоваться - сделайте это через ссылку на
            <a href="/">главной</a> странице сайта.</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accessTokenReceived: false
    };
  },
  computed: {
    accessToken() {
      return this.$store.state.accessToken;
    }
  },
  created() {
    // Пытаемся получить токен из адресной строки
    let url_after_sharp = window.location.hash.substr(1);

    let accessToken = url_after_sharp.split("&")[0].split("=")[1];

    if (accessToken) {
      this.accessTokenReceived = true;
      this.$cookies.set("accessToken", accessToken, { expires: 7 });
      window.location.replace("/");
    }
  }
};
</script>

