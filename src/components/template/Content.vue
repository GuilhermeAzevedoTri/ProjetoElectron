<template>
    <div class="content">
<div>
  <b-tabs content-class="mt-3" fill>
    <b-tab title="Account" active><p>I'm the first tab</p>
    <div id="conteudo" style=" height: 150px;"></div>
    <Logs/>
    </b-tab>
    <b-tab title="Bonus"><p>I'm the second tab</p></b-tab>
    <b-tab title="Games"><p>I'm the tab with the very, very long title</p></b-tab>
    <b-tab title="Progressive" ><p>I'm a disabled tab!</p></b-tab>
    <b-tab title="Panel"><p>I'm a disabled tab!</p></b-tab>
    <b-tab title="Email Sender"><p>I'm a disabled tab!</p></b-tab>
    <b-tab title="User Management"><p>I'm a disabled tab!</p></b-tab>    
    <b-tab title="Configurations"><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>
    </div>
</template>

<script>

import Logs from "../template/Logs"
export default {
    name: 'Content',
    components: {
    Logs,
  },

  data: () => ({}),
}
</script>

<style>
    .content{
        grid-area: content;
        background-color: #efefef;
    }
    .logs{
        position: static;
        height: 100%;
        width: 100%;
        padding: 10px;
        margin: 43px auto;
        background-color: #DDD;
    }
</style>