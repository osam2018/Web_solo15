<template>
    <el-container>
        <el-aside width="280px" class="aside" style="height:160px;">

            <genre-menu ></genre-menu>

        </el-aside>
        <el-main>
            <router-view/>
            <div class="block" style="float:left; margin-left:70px;">
                <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>
            </div>
        </el-main>
    </el-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import GenreMenu from './genre-page-sub/GenreMenu.vue';
    import GenrePage1 from './genre-page-sub/GenrePage1.vue';
    import GenrePage2 from './genre-page-sub/GenrePage1.vue';
    import GenrePage3 from './genre-page-sub/GenrePage1.vue';
    import GenrePage4 from './genre-page-sub/GenrePage1.vue';


    @Component({
        components: {
            GenreMenu,
            GenrePage1,
            GenrePage2,
            GenrePage3,
            GenrePage4
        }
    })
    export default class GenrePage extends Vue {
        public activePage:string ="GenrePage1";

        handleOpen(key:string, keyPath:string) {
            console.log("open ", key, keyPath);
        }

        handleClose(key:string, keyPath:string) {
            console.log("close", key, keyPath);
        }

        handleSelect(key:string, keyPath:string){
            console.log("select", key, keyPath);
            this.$router.replace("/genrepage/"+key);
        }

    }
</script>

<style scoped>
</style>