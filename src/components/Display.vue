<template>
    <div style="height: 5rem"></div>
	<span class="fs-1 fw-bold">Top 5 Historical Events - 1915-1945</span>
	<span class="row g-0 pb-4">{{ intro }}</span>
	<div class="border-start border-3 border-info" style="height: 10px"></div>
	<ListItem v-for="(item, idx) in list" :key="idx" :text="item" />
	<span class="row g-0 pt-4 fw-bold">Conclusion:</span>
	<span class="row g-0 pt-4">{{ conclusion }}</span>
	<span class="row g-0 pt-4">Sources:</span>
	<span class="row g-0 overflow-scroll" v-for="source in sources" :key="source">{{source}}</span>
    <div style="height: 1.5rem"></div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
    components: {
        ListItem,
    },
    data() {
        return {
            list: [],
            intro: "",
            conclusion: "",
            sources: [],
        };
    },
    created() {
        this.list = require("raw-loader!@/assets/article.txt").default.split("##ITEM##");
        this.list.forEach((item, idx, arr) => {
            let t = item.split(/\r?\n/);
            if (t[0] == "") {
                t.shift();
                arr[idx] = t.join("\n");
            }
        });
        this.intro = this.list.shift();
        this.sources = this.list.pop().split("///");
        this.conclusion = this.list.pop();
    },
};
</script>

<style>
</style>