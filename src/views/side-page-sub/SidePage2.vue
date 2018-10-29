<template>
    <el-main >
        <el-table
                :data="info1.tableData"
                style="width: 100%">
            <el-table-column
                    prop="policy"
                    label="Policy"
                    width="180">
            </el-table-column>

            <el-table-column
                    prop="explanation"
                    label="Explanation"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="select"
                    label="Select"
                    width="180">
                <template scope="scope">
                    <input type="radio">
                </template>
            </el-table-column>
        </el-table>
        <br><br>
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left" @click="handleSelect('sidepage1')">Prev Page</el-button>
            <el-button type="primary" @click="handleSelect('sidepage3')">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
        </el-button-group>
    </el-main>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class DashBoard extends Vue{
        public $http:any;
        private info1:String[] = [];
        public activePage:string ="SidePage1";

        async mounted(){
            let result1 = await this.$http.get("./mockup_data/Table9.json");

            this.info1 = result1.data;
        }

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