<template>
  <div class="users">
    <button class="users__button" @click="openModal">Добавить</button>

    <table class="users__table">
      <tr class="users__row">
        <th class="users__head">имя</th>
        <th class="users__head">телефон</th>
      </tr>
      <tr v-for="user of allUsers" :key="user" class="users__row">
        <th class="users__head">{{ user.name }}</th>
        <th class="users__head">{{ user.phone }}</th>
      </tr>
    </table>

    <ModalUser
      v-if="modalOpen"
      :userList="allUsers"
      @modalClose="modalCloseHandler"
    />
  </div>
</template>

<script>
import ModalUser from "../components/ModalUser";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Users",
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
      this.modalOpen = true;
    },
    modalCloseHandler() {
      this.modalOpen = false;
    },
  },
  async mounted() {
    if (localStorage.getItem("users")) {
      try {
        let localUsers;
        localUsers = JSON.parse(localStorage.getItem("users"));
        await this.$store.dispatch("fetchUsers", localUsers);
      } catch (e) {}
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./Users.scss";
</style>
