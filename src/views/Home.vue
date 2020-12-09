<template>
    <div class="home">     
        <Dashboard/>

    </div>
</template>

<script>

//import Stat from './Stat'
import Dashboard from '../views/admin/Dashboard'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: { Dashboard },
    data: function() {
        return {
            
        }
    },
    methods: {
        
    },
    
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
