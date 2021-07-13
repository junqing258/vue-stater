<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" @click="handleClick" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    handleClick: function () {
      alert("1");
    },
  },
};
</script>
