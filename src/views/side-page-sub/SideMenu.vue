<template>
    <el-menu
            default-active="sidepage1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @select="handleSelect"
            @close="handleClose"
    >
        <el-menu-item index="sidepage1" style="width:260px;">
            <span>Explanation</span>
        </el-menu-item>
        <el-menu-item index="sidepage2" style="width:260px;">
            <span>Duration</span>
        </el-menu-item>
        <el-menu-item index="sidepage3" style="width:260px;">
            <span>Price Range</span>
        </el-menu-item>
        <el-menu-item index="sidepage4" style="width:260px;">
            <span>Maximum Volume</span>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    @Component
    class GenreMenu extends Vue {
        public activePage:string ="GenrePage1";

        handleOpen(key:string, keyPath:string) {
            console.log("open ", key, keyPath);
        }

        handleClose(key:string, keyPath:string) {
            console.log("close", key, keyPath);
        }

        handleSelect(key:string){
            console.log("select", key);
            this.$router.replace("/about/"+key);
        }
    }
    @Component
    export default class SideMenu extends Vue {
        public activePage:string ="SidePage1";

        handleOpen(key:string, keyPath:string) {
            console.log("open ", key, keyPath);
        }

        handleClose(key:string, keyPath:string) {
            console.log("close", key, keyPath);
        }

        handleSelect(key:string, keyPath:string){
            console.log("select", key, keyPath);
            this.$router.replace("/sidepage/"+key);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
