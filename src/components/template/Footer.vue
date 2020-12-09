<template>
    <footer class="rodape">
        <span> {{status}}  | <strong> {{sessionStatus}} </strong> | <strong> {{version}}</strong> </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props:{
        status: String,
        sessionStatus: String,
        version: String,
        
    },
}
</script>

<style>
    .rodape{
        grid-area: rodape;
        background-color: #ddd;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>