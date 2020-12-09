<template>
  <div id="app">
    <Header title="Config 1"/>
    <Content/>
    
    <Footer status="Ready" sessionStatus="Session Closed" version="5.2.0"/>
  </div>
</template>

<script >
import Header from "@/components/template/Header"
import Content from "@/components/template/Content"
import Footer from  "@/components/template/Footer"



export default {
  name: "App",
  
  props:{
    title: String
  },

  methods:{
   
  },

  components: {
    Header, Content, Footer
    
  },

  data: () => ({
  
  })
};
</script>

<style>

* {
		font-family: "Lato", sans-serif;
	}

	body {
		margin: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 1fr;
		grid-template-areas:
			"header"
			"content"
			"rodape";
	}

	#app.hide-menu {
		grid-template-areas:
			"header"
			"content"
			"rodape";
	}
</style>