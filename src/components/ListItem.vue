<template>
    <div class="row g-0">
        <div class="row fw-bold fs-4 w-auto g-0 justify-content-start">{{ title }}</div>
        <!-- <img class="row g-0 bg-dark w-100" style="max-width:100%" :src="require('@/assets/'+image)"/> -->
        <small class="row text-muted g-0 pb-2 justify-content-start fst-italic">{{ caption }}</small>
        <div class="row g-0" ref="content">{{ content }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: "",
            title: "",
            image: "logo.png",
            caption: "",
            year: "",
        };
    },
    props: ["text"],
    methods: {
        readFile() {
            let d = document.createElement("div")
            d.textContent = "wwwwwwwwww"
            this.$refs.content.appendChild(d)
            let text = this.text.split(/\r?\n/);
            this.title = text.shift();
            this.year = text.shift();
            this.image = text.shift();
            this.caption = text.shift();
            this.content = text.join(" ");
        },
    },
    mounted() {
        this.readFile();
    },
};
</script>

<style>
img {
    max-width: 75%;
    max-height: 75%;
}
</style>