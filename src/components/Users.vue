<template>
  <div class="users">
    <button class="users__button" @click="openModal">Добавить</button>

    <table class="users__table">
      <tr class="users__row">
        <th @click="sortByName" class="users__head">имя</th>
        <th @click="sortByPhone" class="users__head">телефон</th>
      </tr>
      <tr v-for="user of receivedUsers" :key="user" class="users__row">
        <th class="users__head">{{ user.name }}</th>
        <th class="users__head">{{ user.phone }}</th>
      </tr>
    </table>

    <ModalUser
      v-if="modalOpen"
      :userList="receivedUsers"
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
    receivedUsers: [],
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
    sortByName() {
      return this.receivedUsers.sort( (a,b) => a.name.localeCompare(b.name));
    },
    sortByPhone() {
      return this.receivedUsers.sort( (a,b) => String(a.phone).localeCompare(String(b.phone)));
    },
  },
  async mounted() {
    if (localStorage.getItem("users")) {
      try {
        let localUsers;
        localUsers = JSON.parse(localStorage.getItem("users"));
        await this.$store.dispatch("fetchUsers", localUsers);
      } catch (e) {}

      this.receivedUsers = this.$store.getters.allUsers;
      console.log(this.receivedUsers);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./Users.scss";
</style>
