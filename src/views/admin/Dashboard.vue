<template>
    <div class="admin-pages">     
        <section>
        <b-tabs type="is-boxed">
            <b-tab-item label="Account" icon="file">
                <Account />
            </b-tab-item>
            <b-tab-item label="Bonus" icon="pig">
                <Bonus />
            </b-tab-item>
            <b-tab-item label="Games" icon="gamepad-variant">
                <Games />
            </b-tab-item>
            <b-tab-item label="Progressive" icon="trophy">
                <Progressive />
            </b-tab-item>
            <b-tab-item label="Panel" icon="television">
                <Panel />
            </b-tab-item>
            <b-tab-item label="Email" icon="email">
                <Email />
            </b-tab-item>
            <b-tab-item label="User" icon="account">
                <User />
            </b-tab-item>
            <b-tab-item label="Configurations" icon="cog">
                <Configurations />
            </b-tab-item>

        </b-tabs>        
    </section>
    

        
    </div>
</template>

<script>
//import PageTitle from '@/components/template/PageTitle'
import Account from "../admin/Modules/Account"
import Bonus from "../admin/Modules/Bonus"
import Games from "../admin/Modules/Games"
import Progressive from "../admin/Modules/Progressive"
import Panel from "../admin/Modules/Panel"
import Email from "../admin/Modules/Email"
import User from "../admin/Modules/User"
import Configurations from '../admin/Modules/Configurations'


export default {
    name: 'AdminPages',
    components: { Account, Bonus, Games, Progressive, Panel, Email, User, Configurations}
}
</script>
<style scoped>

</style>


