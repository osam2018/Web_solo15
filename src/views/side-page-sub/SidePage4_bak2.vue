<template>
    <el-main >
        <el-table
                :data="tableData"
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

        </el-table>
        <el-radio v-model="radio" label="1">Policy 1</el-radio>
        <el-radio v-model="radio" label="2">Policy 2</el-radio>
        <el-radio v-model="radio" label="3">Policy 3</el-radio>
        <el-radio v-model="radio" label="4">Policy 4</el-radio>
    </el-main>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


    export default {
        data () {
            return {
                radio: '1',
                tableData: [{
                    policy: '1',
                    explanation: ' ~ 10권',
                }, {
                    policy: '2',
                    explanation: '~ 20 권',
                }, {
                    policy: '3',
                    explanation: '~ 30 권',
                }, {
                    policy: '4',
                    explanation: '~ 40 권',
                }]
            };
        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
</style>