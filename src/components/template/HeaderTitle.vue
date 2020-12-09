<template>
    <header class="headerTitle">
        <span>{{title}}</span>
    </header>
</template>

<script>
export default {
    name: 'HeaderTitle',
    props: {
        title: String
    },
}
</script>

<style>
    .header {
        grid-area: headerTitle;
        /*background: linear-gradient(to right, gray, #000);*/
        background: gray ;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    
</style>