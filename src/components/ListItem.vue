<template>
    <div class="row g-0">
        <div class="col-2 g-0 overflow-hidden">
            <div class="row g-0 border-start border-bottom border-3 border-info fw-bold fs-5 text-primary ps-1">{{ year }}</div>
            <div class="row g-0 border-start border-3 border-info h-100"></div>
        </div>
        <div class="col-9 g-0 mb-4 mt-3 ms-2">
            <div class="row fw-bold fs-4 w-auto g-0 justify-content-start">{{ title }}</div>
            <img class="row g-0 bg-dark w-100" style="max-width:100%" :src="require('@/assets/'+image)"/>
            <small class="row text-muted g-0 pb-2 justify-content-start fst-italic">{{ caption }}</small>
            <div class="row g-0">{{ content }}</div>
        </div>
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