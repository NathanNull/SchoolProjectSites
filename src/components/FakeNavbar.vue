<template>
    <nav class="navbar navbar-light fixed-top border bg-white g-0 shadow-sm">
        <div class="row text-center align-items-center g-0 fw-bold w-100">
            <div class="fs-3 fw-bolder text-danger text-center">NewsWeb.Site</div>
        </div>
        <div class="row justify-content-center align-items-center g-0 fw-bold w-100 text-center mt-1 px-2">
            <div class="col" 
                v-for="(itm, idx) in ['Research', 'Consider', 'Understand', 'Inform']"
                :key="idx">
                {{ itm }}</div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style>
</style>