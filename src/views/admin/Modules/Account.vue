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

      <div class="column">
        <h3>{{ machine.machineGroup }}</h3>
        <p>
          <br />
          <button @click="getTreeData2">Botão</button>
          <ul>
            <li v-for="id in treeData1.items" :key="id">{{ id }}</li>
          </ul>
          <span>{{ machine.data }}</span>
          <br />
          <span>{{ machine.name }}</span>
          <br />
          <span>{{ machine.ip }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Tree from "liquor-tree";
import { baseApiUrl } from "@/global.js";
import axios from "axios";
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
      const url =
        "https://api.github.com/search/repositories?q=language%3AJava&sort=stars&page=1"; //`${baseApiUrl}/rest/restConfig/getEngine/2/0`
      debugger;
      axios.get(url).then((res) => {
        debugger;
        this.treeData1 = res.data;
        alert(res.status);
      });
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
      treeData.forEach((group) => {
        group.children.forEach((machine) => {
          if (machine.id == node.id) {
            this.machine.machineGroup = group.name;
            this.machine.data = group.name + " Data";
            const split = machine.name.split("(");
            this.machine.name = "Name: " + split[0];
            this.machine.ip = "Ip: " + split[1].replace(/[)]+/g, "");
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

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Create three equal columns that floats next to each other */
.columnMenu {
  float: left;
  width: 33.33%;
  padding: 15px;
}
.column {
  float: left;
  width: 33.33%;
  padding: 15px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

.menu a,
.menu a:hover {
  color: #fff;
  text-decoration: none;
}

.menu .tree-node.selected > .tree-content,
.menu .tree-node .tree-content:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.tree-arrow.has-child {
  filter: brightness(2);
}

.menu .menu-filter {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #aaa;
}

.menu .menu-filter i {
  color: #aaa;
  margin-right: 10px;
}

.menu input {
  color: #ccc;
  font-size: 1.3rem;
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
}

.tree-filter-empty {
  color: #ccc;
  font-size: 1.3rem;
  margin-left: 20px;
}
</style>
