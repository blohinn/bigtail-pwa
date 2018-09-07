<template>
  <div id="country-city-selector">
    <div class="form-group">
      <label for="country">Страна:</label>
      <select v-model="selectedCountryId" class="form-control" id="country" name="country">
        <option value>Не важно</option>
        <option value="1">Россия</option>
        <option value="2">Украина</option>
        <option value="3">Беларусь</option>
        <option value="4">Казахстан</option>
        <option value="5">Азербайджан</option>
        <option value="6">Армения</option>
        <option value="7">Грузия</option>
        <option value="8">Израиль</option>
        <option value="9">США</option>
        <option value="65">Германия</option>
        <option value="11">Кыргызстан</option>
        <option value="12">Латвия</option>
        <option value="13">Литва</option>
        <option value="14">Эстония</option>
        <option value="15">Молдова</option>
        <option value="16">Таджикистан</option>
        <option value="17">Туркменистан</option>
        <option value="18">Узбекистан</option>
      </select>
      <small class="form-text text-muted">
        Необязательно.
      </small>
    </div>
    <div class="form-group">
      <label for="city">Город:</label>
      <input type="text" class="form-control typeahead" id="city" name="city" placeholder="Выберите страну" v-on:input="onCityInputChange($event.target.value)" v-bind:disabled="!selectedCountryId" data-provide="typeahead">
      <small class="form-text text-muted">
        Необязательно.
      </small>
      {{ selectedCityId }}
    </div>
    <input type="hidden" id="cityId" name="cityId">
  </div>
</template>

<script>
$(document).ready(function() {});
export default {
  data() {
    return {
      selectedCountryId: "",
      selectedCityId: null,
      cities: [],
      $cityInputField: null
    };
  },
  computed: {
    accessToken() {
      return this.$store.state.accessToken;
    }
  },
  methods: {
    onCityInputChange(value) {
      VK.Api.call(
        "database.getCities",
        {
          v: "5.84",
          country_id: this.selectedCountryId,
          q: value,
          count: 5
        },
        r => {
          if (r.error) {
            console.error("To many requests to VK API.");
            return false;
          }
          if (r.response.items) {
            this.cities = [];
            r.response.items.forEach(item => {
              this.cities.push({
                value: item.id,
                label: item.title + (item.region ? ", " + item.region : "")
              });
            });
            $("#city").autocomplete("option", { source: this.cities });
          }
        }
      );
    }
  },
  mounted() {
    $("#city").autocomplete({
      focus: function(event, ui) {
        $("#city").val(ui.item.label);
        return false;
      },
      select: (event, ui) => {
        $("#city").val(ui.item.label);
        $("#cityId").val(ui.item.value);
        this.selectedCityId = ui.item.value;
        return false;
      }
    });
  }
};
</script>

<style>
.ui-autocomplete {
  max-height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
}
* html .ui-autocomplete {
  height: 100px;
}
</style>
