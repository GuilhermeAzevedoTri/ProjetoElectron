<template>
    <div class="content">
      <router-view></router-view>

    </div>
</template>

<script>


export default {
    name: 'Content',
    components: {
    
  },

  data: () => ({}),
}
</script>

<style>
    .content{
        grid-area: content;
        background-color: #efefef;
    }
   
</style>