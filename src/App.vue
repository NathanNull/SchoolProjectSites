<template>
  <div class="d-flex">
    <!-- For the laptop, to tell people where to go to find the site -->
    <div class="d-none d-md-flex bg-black text-white content justify-content-center align-items-center">
        <h1>
            Go to http://{{ getHost() }} on your phone to see the website<br />
        </h1>
    </div>
    <!-- For the phones, to display the website -->
    <div class="d-md-none">
        <fake-navbar />
    </div>
    <div class="grid d-md-none container content">
        <display />
    </div>
  </div>
</template>

<script>
import FakeNavbar from "./components/FakeNavbar.vue";
import Display from "./components/Display.vue";

export default {
    name: "App",
    components: {
        FakeNavbar,
        Display,
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
