<template>
    <el-main >
    <h4>Duration</h4>
    <p>
        서비스를 이용할 수 있는 시간을 나타냅니다.
    </p>
        <h4>Book Price Range</h4>
        <p>
            서비스 이용 가능 시간동안 볼 수 있는 책의 가격 범위를 나타냅니다.
        </p>
        <h4>Maximum Volumes</h4>
        <p>
            한번에 볼 수 있는 책의 최대 권 수를 나타냅니다,
        </p>
        <br><br>
        <el-button-group>
            <el-button index="sidepage4" @click="handleSelect('sidepage4')" type="primary" icon="el-icon-arrow-left">Prev Page</el-button>
            <el-button index="sidepage2" @click="handleSelect('sidepage2')" type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
        </el-button-group>
    </el-main>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class SidePage extends Vue {
        public activePage:string ="SidePage1";

        handleOpen(key:string, keyPath:string) {
            console.log("open ", key, keyPath);
        }

        handleClose(key:string, keyPath:string) {
            console.log("close", key, keyPath);
        }

        handleSelect(key:string){
            console.log("select", key);
            this.$router.replace("/sidepage/"+key);
        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
</style>