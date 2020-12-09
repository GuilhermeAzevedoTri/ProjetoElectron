<template>
    <div class="pageTitle">
        <h1><i v-if="icon" :class="icon"> </i>{{main}}</h1>
        <h2>{{sub}}</h2>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['icon', 'main', 'sub']
}
</script>

<style scoped>
.page-title h1 {
        margin: 0px;
        
        text-align: center;
    }

    .page-title h2 {
        color: #777;
        margin-top: 5px;
        font-size: 1.3rem;
    }
</style>