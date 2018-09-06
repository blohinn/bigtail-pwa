<template>
  <div id="friends-form" class="card card-body">
    <form action="/search/friends" method="get">
      <div class="form-group">
        <label for="user-link">Ссылка на пользователя:
          <span class="text-danger">*</span>
        </label>
        <input required type="url" class="form-control" id="user-link" name="user-link" placeholder="https://vk.com/i_blohin">
      </div>
      <div class="form-group">
        <label for="user-fullname">Имя и/или фамилия:</label>
        <input type="text" class="form-control" id="user-fullname" name="user-fullname" placeholder="Сергей">
        <small class="form-text text-muted">
          Необязательно.
        </small>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-lg btn-block">Найти</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
