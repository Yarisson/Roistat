<template>
  <div class="users">

      <button class="users__button" @click="openModal">Добавить</button>

      <table class="users__table">
          
          <tr class="users__row">
              <th class="users__head">имя</th>
              <th class="users__head">телефон</th>
          </tr>
          <tr class="users__row">
              <td class="users__cell">Марина</td>
              <td class="users__cell">+7 915 530 27 42</td>
          </tr>
          <tr class="users__row">
              <td class="users__cell">Света</td>
              <td class="users__cell">+7 916 934 41 78</td>
          </tr>
          <tr class="users__row">
              <td class="users__cell">Игорь</td>
              <td class="users__cell">+7 915 461 64 62</td>
          </tr>
          <tr v-for="user of allUsers"
              :key="user"
              class="users__row">
              <th class="users__head">{{user.name}}</th>
              <th class="users__head">{{user.phone}}</th>
          </tr>
      </table>

    <ModalUser v-if="modalOpen"
               @modalClose="modalCloseHandler" />

  </div>
</template>

<script>
import ModalUser from '../components/ModalUser';
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: 'Users',
    data: () => ({
        modalOpen: false,
    }),
    computed: mapGetters(["allUsers"]),
    components: { 
        ModalUser,
    },
    methods: {
        ...mapMutations(["updateUsers"]),
        ...mapActions(["fetchUsers"]),
        openModal() {
            this.modalOpen = true
        },
        modalCloseHandler() {
            this.modalOpen = false
        },
    },
    async mounted() {
        console.log(localStorage.getItem('users'));
        if (localStorage.getItem('users')) {
            try {
                let localUsers;
                localUsers = JSON.parse(localStorage.getItem('users'));
                console.log(localUsers);
                await this.$store.dispatch("fetchUsers", localUsers);
            } catch(e) {}
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './Users.scss';
</style>
