<template>
    <div style="height: 5rem"></div>
	<span class="fs-1 fw-bold">Government Reconciliation Efforts: <br/> Could They Be Doing More?</span>
	<ContentComponent v-for="(item, idx) in list" :key="idx" :content="item.content" :type="item.type" />
    <div style="height: 1.5rem"></div>
</template>

<script>
import ContentComponent from "./ContentComponent.vue";

export default {
    components: {
        ContentComponent,
    },
    data() {
        return {
            list: [],
        };
    },
    methods: {
        /**
         * 
         * @param {string[]} line The text to turn into a component
         * @returns {{content: 
         *      string | {
         *          items:{
         *              content:string,
         *              col_w:int
         *          }[],
         *          cols:int
         *      }[] | {
         *          classes: string,
         *          text: string
         *      },
         *      type: string
         *  }} The element, containing a type and a content field
         */
        makeComponent(line) {
            switch (line[0]) {
                case "img":
                    line.shift()
                    return {content: line, type: "img"}
            
                case "list": {
                    line.shift()

                    let widths
                    if (line[0].startsWith("cw-"))
                    {
                        widths = line.shift().split("-")
                        widths.shift()
                        widths = widths.map(i=>parseInt(i))
                    } else { widths = [] }

                    let eles = line.join(" ").split(/ ?;; ?/)
                    eles = eles.map((l=>l.split(/ ?; ?/).map(
                        (itm, idx, arr)=>{
                            let col_w = widths.length >= arr.length?widths[idx]:Math.floor(12/arr.length)
                            return {
                                content: itm, col_w
                            }
                        }
                    )));
                    eles.pop()

                    let cols = widths.length != 0 ? widths.reduce((c,i)=>c+i) : eles[0].length

                    return {content: {items: eles, cols}, type: "list"}
                }

                case "br":
                    return {content: "", type: "break"}
                
                case "class": {
                    line.shift()
                    let [classes, text] = line.join(" ").split(";")
                    return {content: {classes, text}, type: "class"}
                }

                default:
                    return {content: line.join(" "), type: "text"}
            }
        }
    },
    created() {
        let list = require("@/assets/article.txt").default.split(/\r?\n/);
        while (list[0] == "") list.shift()
        list = list.join(" ").split(/<|>/).map(l=>l.split(" "))
        this.list = list.map(this.makeComponent)
    },
};
</script>

<style>
</style>