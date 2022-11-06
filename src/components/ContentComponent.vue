<template>
    <img v-if="type=='img'" :src="getImg(`${content}`)">

    <div v-else-if="type=='text'" class="row g-0 text-justify mx-2">&emsp;{{ content }}</div>

    <div v-else-if="type=='list'" class="row g-0 mx-4 justify-content-center">
        <div :class="rowOfLen(content.cols)" v-for="(row, idx) in content.items" :key="idx">
            <div v-for="(item, idx2) in row" :key="idx2" :class="listItemClass(item, idx)">
                {{ item.content }}
            </div>
        </div>
    </div>

    <div v-else-if="type=='break'" class="row br-h"></div>

    <div v-else-if="type=='class'" :class="classObj(content.classes)">{{ content.text }}</div>

    <div v-else>broken {{ content }} or something</div>
</template>

<script>
export default {
    props: ["content","type"],
    methods: {
        getImg(src) {
            if (src.startsWith("@/")) return require(`${src}`)
            else return src
        },
        listItemClass(item, row)
        {
            let classes = {}
            classes[`col-${item.col_w} border border-dark`] = true
            classes["border-3 fw-bolder"] = row==0
            return classes
        },
        rowOfLen(length)
        {
            let classes = {}
            classes[`row row-cols-${length}`] = true
            return classes
        },
        classObj(classes)
        {
            let classobj = {}
            classobj[classes] = true
            return classobj
        }
    }
}
</script>

<style>
img {
    max-width: 100%;
}
.br-h {
    height: 1rem;
}
.text-justify {
    text-align: justify;
}
</style>