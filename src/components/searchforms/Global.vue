<template>
  <div id="friends-form" class="card card-body">
    <form action="/search/global" method="get">
      <div class="form-group">
        <label for="user-fullname">Имя и/или фамилия:</label>
        <input type="text" class="form-control" id="user-fullname" name="user-fullname" placeholder="Сергей">
        <small class="form-text text-muted">
          Необязательно.
        </small>
      </div>
      <label>Меня интересуют:</label>
      <div class="d-flex justify-content-between">
        <label class="radio-inline"><input type="radio" value="0" name="sex" checked> Все</label>
        <label class="radio-inline"><input type="radio" value="1" name="sex"> Девушки</label>
        <label class="radio-inline"><input type="radio" value="2" name="sex"> Парни</label>
      </div>
      <div class="form-group">
        <label>Возраст:</label>
        <div class="form-row">
          <div class="col">
            <input type="number" min="14" class="form-control" value="18" name="min-age" placeholder="18">
          </div>
          <div class="col">
            <input type="number" min="14" class="form-control" value="25" name="max-age" placeholder="25">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="country">Страна:</label>
        <select class="form-control" id="country" name="country">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <small class="form-text text-muted">
          Необязательно.
        </small>
      </div>
      <div class="form-group">
        <label for="city">Город:</label>
        <input type="text" class="form-control" id="city" name="city" placeholder="Выберите страну" disabled>
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
