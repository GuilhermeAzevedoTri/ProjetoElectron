<template>
  <div v-if="logs.length" class="panel" style=" height: 200px; overflow: auto;">
    <ul>
      <li v-for="log in logs" :key="log">{{ log }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Logs",

  data: () => ({
      logs: [
            'set/09/2020 12:48:40:357 (SYSTEM) : Bonus [Pig Boom!] InBonus: False, WaitShowPrize: False, Fase: False, ForceWait: False, isRestartingBonus: False, Engine: Underwater Riches SS',
            'set/09/2020 12:48:40:357 (SYSTEM) : Verified Pig Boom! [Pig Boom!] CanStart Current Mr Champion: [Mr Champion], Engine: Underwater Riches SS',
            'set/09/2020 12:48:40:357 (SYSTEM) : Verifying if can start Bonus [Mr Champion] True',
            'set/09/2020 12:48:40:357 (SYSTEM) : Mr. Champion [Mr Champion] GetNumTerminalsElegiblesMystery [0]',
            'set/09/2020 12:48:40:357 (SYSTEM) : Mr. Champion [Mr Champion] Terminals Elegible: 0',
            'set/09/2020 12:48:40:357 (SYSTEM) : Mr. Champion [Mr Champion] Terminals Elegible: 0',
            'set/09/2020 12:48:40:357 (SYSTEM) : Mr. Champion [Mr Champion] Terminals Elegible: 0',
            'set/09/2020 12:48:40:357 (SYSTEM) : Mr. Champion [Mr Champion] Terminals Elegible: 0',
            'set/09/2020 12:48:40:357 (SYSTEM) : Mr. Champion [Mr Champion] Terminals Elegible: 0',
            'set/09/2020 12:48:40:357 (SYSTEM) : Mr. Champion [Mr Champion] Terminals Elegible: 0',
            'set/09/2020 12:48:40:357 (SYSTEM) : Mr. Champion [Mr Champion] Terminals Elegible: 0',
            'set/09/2020 12:48:40:357 (SYSTEM) : Mr. Champion [Mr Champion] Terminals Elegible: 0',
            'set/09/2020 12:48:40:357 (SYSTEM) : Mr. Champion [Mr Champion] Terminals Elegible: 0',
            
      ]
      }),
};
</script>

<style>

/* Área dos Logs */
.panel{
    
}
.logs ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
}

.logs ul li {
    display: flex;                    
    border-radius: 3px;
}


</style>
