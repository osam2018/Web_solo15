<template>
    <el-container>

        <el-main>
            <router-view/>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="num"
                        label="Num"
                        width="500">
                </el-table-column>
                <el-table-column
                        prop="topic"
                        label="Topic"
                        width="500"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="Time"
                        width="500"
                >
                </el-table-column>
                <el-table-column
                        prop="view"
                        label="View"
                        width="500"
                        align="right"
                >
                </el-table-column>
            </el-table>

        </el-main>
        <el-footer>
        <div id="write"><el-button type="primary" icon="el-icon-edit" circle style="float:right; "></el-button></div>
            <el-button type="danger" icon="el-icon-delete" circle style="float:right; margin-right:10px"></el-button>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </el-footer>
    </el-container>

</template>


<script>
    export default {
        data() {
            return {
                tableData: [{
                    num: '1',
                    topic: 'Topic #1',
                    time : '2018-10-24 17:03',
                    view : 0
                }, {
                    num: '2',
                    topic: 'Topic #2',
                    time : '2018-10-24 17:03',
                    view : 0
                }, {
                    num: '3',
                    topic: 'Topic #3',
                    time : '2018-10-24 17:03',
                    view : 0
                }, {
                    num: '4',
                    topic: 'Topic #4',
                    time : '2018-10-24 17:03',
                    view : 0
                }, {
                    num: '5',
                    topic: 'Topic #5',
                    time : '2018-10-24 17:03',
                    view : 0
                }]
            }
        }
    }
</script>
<style>
    .write{
        position : relative;
        right : 0px;
        bottom : 0px
    }
    .el-footer {
        background-color: transparent;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
</style>