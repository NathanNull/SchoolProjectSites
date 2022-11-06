<template>
  <div class="d-flex">
    <!-- For the phones, to display the website -->
    <div>
        <fake-navbar />
    </div>
    <div class="grid container-fluid content text-center mx-4">
        <display-element />
    </div>
  </div>
</template>

<script>
import FakeNavbar from "./components/FakeNavbar.vue";
import DisplayElement from "./components/DisplayElement.vue";

export default {
    name: "App",
    components: {
        FakeNavbar,
        DisplayElement,
    },
    methods: {
        getHost() {
            return window.location.host;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.content {
    height: 100vh;
    width: 100vw;
}
</style>
