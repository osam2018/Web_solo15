<template>
    <el-row>
        <el-button index="genrepage1" @click="handleSelect('genrepage1')" style="width:280px; margin:0px;">Fiction</el-button>
        <el-button  index="genrepage2" @click="handleSelect('genrepage2')" style="width:280px; margin:0px;">IT</el-button>
        <el-button index="genrepage3" @click="handleSelect('genrepage3')" style="width:280px; margin:0px;">Society</el-button>
        <el-button index="genrepage4" @click="handleSelect('genrepage4')" style="width:280px; margin:0px;">Science</el-button>
    </el-row>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class GenreMenu extends Vue {
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
