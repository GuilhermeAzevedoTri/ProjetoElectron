<template>
  <div id="account">
    <div class="topnav">
      <a v-if="session" :href="'#'" target="_blank" title="Open Session"
        ><font-awesome-icon :icon="['fas', 'store-alt']"
      /></a>
      <a v-else :href="'#'" target="_blank" title="Close Session"
        ><font-awesome-icon :icon="['fas', 'store-alt-slash']"
      /></a>
      <a :href="'#'" target="_blank" title="Manual Cashier SignOut"
        ><font-awesome-icon :icon="['fas', 'newspaper']"
      /></a>
    </div>

    <div class="row">
      <div class="columnMenu">
        <div class="menu">
          <div class="menu-filter">
            <i class="fa fa-search fa-lg"></i>
            <input
              type="text"
              placeholder="Digite para filtrar..."
              v-model="treeFilter"
              class="filter-field"
            />
          </div>
          <!--<Tree :data="treeData" :options="treeOptions" :filter="treeFilter" ref="tree" >
            <span>{{node.text}}</span>
          </Tree>                                           -->
          <Tree :data="treeData" :options="treeOptions" :filter="treeFilter" ref="tree">
            <span class="tree-text" slot-scope="{ node }">
              <template v-if="!node.hasChildren()">
                <!--<i :class="[getStyle(node)]"></i>                             -->
                <font-awesome-icon :icon="['fas', getStyle(node)]" />
                {{ node.text }}
              </template>

              <template v-else>
                <!--<i :class="[getStyle(node)]"></i>                                -->
                <font-awesome-icon :icon="['fas', getStyle(node)]" />
                {{ node.text }}
              </template>
            </span>
          </Tree>
        </div>
      </div>
      
      <div class="column" v-if="showContent">
        <div class="titulo">
          <h3>{{ machine.machineGroup }}</h3>
        </div>

        <div class="subTitulo">
          <span>{{ machine.data }}</span>
        </div>

        <br />
        <div class="menu">
          <div class="menu1">
            <span>Name: {{ machine.name }}</span>
          </div>
          <div class="menu2">
            <span>IP: {{ machine.ip }}</span>
          </div>
        </div>        
        <br />
        
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Tree from "liquor-tree";
import { baseApiUrl, showError } from "@/global.js";
import axios from "axios";
import Toast from 'primevue/toast';

export default {
  name: "Account",
  components: { Tree },
  computed: mapState(["session"]),
  data: function () {
    return {
      name: "",
      ip: "",
      treeFilter: "",
      treeData: this.getTreeData(),
      showContent: false,
      treeData1: {},
      treeOptions: {
        propertyNames: { text: "name" },
        filter: { emptyText: "Categoria não encontrada" },
      },
      machine: {
        machineGroup: "",
        data: "",
        name: "",
        ip: "",
      },
    };
  },
  methods: {
    getTreeData() {
      //const url = `${baseApiUrl}/rest/restConfig/getEngine/2/0`; //Exemplo
      return [
        {
          id: 1,
          name: "Game Terminals",
          parentId: null,
          connect: true,
          state: { expanded: false, visible: true, disabled: false },
          children: [
            {
              id: 3,
              name: "Teste (192.168.40.59)",
              parentId: 1,
              connect: true,
              state: { expanded: false, visible: true, false: true },
              children: [],
            },
          ],
        },
        {
          id: 2,
          name: "Cashiers",
          parentId: null,
          connect: false,
          state: { expanded: false, visible: true, disabled: false },
          children: [
            {
              id: 4,
              name: "Teste (192.168.40.177)",
              parentId: 2,
              connect: false,
              state: { expanded: false, visible: true, disabled: false },
              children: [],
            },
            {
              id: 5,
              name: "Teste (192.168.40.178)",
              parentId: 2,
              connect: true,
              state: { expanded: false, visible: true, disabled: false },
              children: [],
            },
          ],
        },
      ];
    },

    getTreeData2() {
      debugger;
      this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000})
      const url =
        `${baseApiUrl}/rest/restConfig/getEngine/2/0`
      debugger;
      axios.get(url).then((res) => {
        debugger;
        this.treeData1 = res.data;
      }).catch(showError);
    },

    onNodeSelect(node) {
      /*this.$router.push({
        name: "articlesByCategory",
        params: { id: node.id },
      });

      if (this.$mq === "xs" || this.$mq === "sm") {
        //this.$store.commit("toggleMenu", false);
      }
      */
      const treeData = this.getTreeData();
      this.machine = {};
      this.showContent = false;
      treeData.forEach((group) => {
        group.children.forEach((machine) => {
          if (machine.id == node.id) {
            this.showContent = true;
            this.machine.machineGroup = group.name;
            this.machine.data = group.name + " Data";
            const split = machine.name.split("(");
            this.machine.name = split[0];
            this.machine.ip = split[1].replace(/[)]+/g, "");
          }
        });
      });
    },
    getStyle(node) {
      let style = "";

      const treeData = this.getTreeData();
      treeData.forEach((group) => {
        group.children.forEach((machine) => {
          if (machine.id == node.id) {
            if (machine.connect) {
              style = "video";
            } else {
              style = "video-slash";
            }
          }
        });
        if (group.id == node.id) {
          if (group.connect) {
            style = "plane";
          } else {
            style = "plane-slash";
          }
        }
      });
      return style;
    },
  },
  mounted() {
    this.name = "";
    this.ip = "";
    this.$refs.tree.$on("node:selected", this.onNodeSelect);
  },
};
</script>

<style scoped src="@/css/styleModules.css">

</style>
