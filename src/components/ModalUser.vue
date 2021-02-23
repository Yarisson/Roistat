<template>
    <div class="modal-user">
        <form class="modal-user__form" @submit.prevent="submitHandler">
            <h1 class="modal-user__title">Добавить пользователя</h1>
            <button class="modal-user__button-close" @click="modalClose"></button>
            <div class="modal-user__input-field">
                <label for="name">Имя</label>
                <input
                    id="name"
                    type="text"
                    v-model="name"
                    :class="{ invalid: ($v.name.$dirty && !$v.name.required) }"
                >
                <span v-if="$v.name.$dirty && !$v.name.required"
                      class="modal-user__helper-text invalid">Введите имя пользователя
                </span>
            </div>
            <div class="modal-user__input-field">
                <label for="phone">Телефон</label>
                <template> <vue-tel-input id="phone" v-model="phone"></vue-tel-input>  </template>
                <!-- <input
                    id="phone"
                    type="phone"
                    v-model="phone"
                > -->
                <!-- <input id="phone" type="tel" placeholder="+380____________" v-model="phone" required pattern="+[0-9()-.^+\/*%^]"> -->
                <span
                      class="modal-user__helper-text invalid">Введите корректный номер мобильного телефона
                </span>
            </div>
            <div class="modal-user__input-field" v-if="allUsers.length > 0">
                <span>Имя Начальника:</span>
                <select v-model="chief"
                        v-for="user of allUsers"
                        :key="user">
                    <option value="chief">Выберите один из вариантов</option>
                    <option>{{user.name}}</option>
                </select>
            </div>

            <button class="modal-user__button" type="submit">Сохранить</button>          
        </form>
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
import { VueTelInput } from 'vue-tel-input';
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
    components: {
        VueTelInput,
    },
    data: () => ({
        name: '',
        phone: {
            type: Number,
            default: 1,
        },
        chief: ''
    }),
    computed: mapGetters(["allUsers"]),
    validations: {
        name: { required },
    },
    methods: {
        modalClose() {
            this.$emit('modalClose');
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
                chief: this.chief
            });
            const parsed = JSON.stringify(this.allUsers);
            localStorage.setItem('users', parsed);
            this.name = '';
            this.phone = 1;
            this.chief = '';
            this.$emit('modalClose');
        },     
    },
}
</script>

<style lang="scss">
@import './ModalUser.scss';
</style>