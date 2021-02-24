<template>
  <div class="modal-user">
    <form class="modal-user__form" @submit.prevent="submitHandler">
      <h1 class="modal-user__title">Добавить пользователя</h1>
      <button class="modal-user__button-close" @click="modalClose"></button>
      <div class="modal-user__input-field">
        <label class="modal-user__label" for="name">Имя</label>
        <input
          id="name"
          type="text"
          v-model="name"
          :class="{ invalid: $v.name.$dirty && !$v.name.required }"
        />
        <span
          v-if="$v.name.$dirty && !$v.name.required"
          class="modal-user__helper-text invalid"
          >Введите имя пользователя
        </span>
      </div>
      <div class="modal-user__input-field">
        <template>
          <label class="modal-user__label" for="phone">Телефон</label>
          <vue-tel-input
            id="phone"
            v-model="phone"
            :preferred-countries="[
              'ru',
              'bl',
              'by',
              'fr',
              'gr',
              'it',
              'gb',
              'uk',
              'ua',
              'us',
            ]"
            :valid-characters-only="true"
            select-label="Code"
            @input="onInput"
          >
          </vue-tel-input>
          <div class="modal-user__phone-info">
            <div v-if="tel.number" style="color: #e83e8c">
              <span>
                Номер:
                <strong>{{ tel.number }}</strong
                >,&nbsp;
              </span>
              <span>
                Корректность:
                <strong>{{ tel.valid }}</strong
                >,&nbsp;
              </span>
              <span>
                Страна:
                <strong>{{ tel.country }}</strong>
              </span>
            </div>
          </div>
          <div class="modal-user__phone-info">
            <v-row justify="start">
              <v-col cols="6">
                <v-btn @click="phone = '+7 916 703 4643'">Добавьте номер</v-btn>
              </v-col>
            </v-row>
          </div>
        </template>
      </div>
      <div class="modal-user__input-field" v-if="userList.length > 0">
        <span class="modal-user__label">Имя Начальника:</span>
        <select v-model="chief">
          <option value="chief">Выберите один из вариантов</option>
          <option v-for="user of userList" :key="user">
            {{ user.name }}
          </option>
        </select>
      </div>

      <button class="modal-user__button" type="submit">Сохранить</button>
    </form>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import { VueTelInput } from "vue-tel-input";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  components: {
    VueTelInput,
  },
  props: ["userList"],
  data: () => ({
    name: "",
    phone: {
      type: Number,
      default: 1,
    },
    chief: "",
    tel: {
      number: "",
      valid: false,
      country: undefined,
    },
  }),
  computed: mapGetters(["allUsers"]),
  validations: {
    name: { required },
  },
  methods: {
    modalClose() {
      this.$emit("modalClose");
    },
    ...mapMutations(["addUser"]),
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.addUser({
        name: this.name,
        phone: this.phone,
        chief: this.chief,
      });
      const parsed = JSON.stringify(this.allUsers);
      localStorage.setItem("users", parsed);
      this.name = "";
      this.phone = 1;
      this.chief = "";
      this.$emit("modalClose");
    },
    onInput(formattedNumber, { number, valid, country }) {
      this.tel.number = number.international;
      this.tel.valid = valid;
      this.tel.country = country && country.name;
    },
  },
};
</script>

<style lang="scss">
@import "./ModalUser.scss";
</style>