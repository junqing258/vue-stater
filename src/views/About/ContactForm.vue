<template>
  <form class="contact-form">
    <legend>表单</legend>
    <input v-model="adresss" />
    <p>Adresss is: {{ adresss }}</p>

    <input v-model="sendMsg" />
    <button @click.prevent="setMessageAction(sendMsg)">send</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { sharedState, actions } from "./state";

export default defineComponent({
  data() {
    return {
      adresss: "江苏 苏州",
      sendMsg: "",
    };
  },
  setup() {
    return { sharedState };
  },
  methods: {
    ...actions,
  },
});
</script>

<style scoped lang="scss">
.contact-form {
  text-align: center;
}
</style>
