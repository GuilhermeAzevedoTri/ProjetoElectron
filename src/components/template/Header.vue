<template>



  <header class="header">          
    <HeaderTitle title="Config 2" />
  </header>
</template>



<script>
import HeaderTitle from "./HeaderTitle";
export default {
  name: "Header",
  props: {},
  components: {
    HeaderTitle,
  },

  data: () => ({}),
};
</script>

<style>
.header {
  grid-area: header;
  /*background: linear-gradient(to right, gray, #000);*/
  background: gray;

  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}

.title a {
  color: #fff;
  text-decoration: none;
}

.title a:hover {
  color: #fff;
  text-decoration: none;
}


</style>