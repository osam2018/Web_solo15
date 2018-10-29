<template>
    <el-main >

    <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            @row-click = "showRow"
            style="width:100%"
            :span-method="objectSpanMethod"
            border>
        <el-table-column
                prop="ability"
                label="Policy"
                width="180">
        </el-table-column>
        <el-table-column
                prop="state"
                label="Explanation"
                width="120">
        </el-table-column>
        <el-table-column label="Select" width="80" center>
            <template scope="scope" align="center">
                <el-radio class="radio" v-model="radio"  :label="scope.$index"  @change.native="getCurrentRow(scope.$index)" >&nbsp;</el-radio>
            </template>
        </el-table-column>
    </el-table>
    </el-main>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class DashBoard extends Vue{
        public $http:any;
        private info1:String[] = [];
        private radio:any = 0;
        public activePage:string ="SidePage1";
        public tableData : any[] = [
            {ability:"1",state:"~ 10권",index:1},
            {ability:"2",state:"~ 20권",index:2},
            {ability:"3",state:"~ 30권",index:3},
            {ability:"4",state:"~ 40권",index:4},
        ];

        private pointPriceTableData:any[]= [
            {
                radio: '1'
            },
            {
                radio: '2'
            },
            {
                radio: '3'
            },
            {
                radio: '4'
            },
            ]

        async mounted(){
            let result1 = await this.$http.get("./mockup_data/Table11.json");

            this.info1 = result1.data;
        }

        showRow(row){
            this.radio = this.tableData.indexOf(row);
        }

        handleCurrentChange(val,index){
            this.currentRow = val;
            this.$emit('data',val.pkg);
        }

        getCurrentRow(val){
            console.log(val)
        }

        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex % 3 === 0) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                }
            }
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