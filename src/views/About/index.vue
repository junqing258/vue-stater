<template>
  <div class="about">
    <h1>{{ `This is an ${name} page ${count}` }}</h1>
    <ContactForm />
    <h3>Receive message: {{ sharedState.message }}</h3>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { sharedState } from "./state";
import ContactForm from "./ContactForm.vue";

export default defineComponent({
  name: "About",
  components: {
    ContactForm,
  },
  data() {
    return {
      timer: null,
      name: "about",
      count: 1,
    };
  },
  setup() {
    return { sharedState };
  },
  methods: {
    counter() {
      this.count++;
    },
  },
  mounted() {
    this.timer = setInterval(this.counter, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
});
</script>
