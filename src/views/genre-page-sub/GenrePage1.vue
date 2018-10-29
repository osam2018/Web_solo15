<template>
    <el-container>
        <el-aside width="415px" style="height : 1010px">
            <el-table
                    :data="todo.table"
                    style="width: 100%">
                <el-table-column
                        prop="rank"
                        label="Rank"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="Name"
                        width="180">
                </el-table-column>>
            </el-table>
        </el-aside>
        <el-main>
            <router-view/>
            <div id="bookimage"><img src="../../assets/Fiction.png" style="float:left;padding-top:40px;padding-left:40px;width:230px;height:260px"></div>
            <el-table
                    :data="info.tableData2"
                    style="width: 50%; padding-left:40px; padding-top:40px"

            >
                <el-table-column
                        prop="item"
                        label="Item"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="contents"
                        label="Contents"
                        width="300">
                </el-table-column>>
            </el-table>
            <ol align="left">
                <br>
                <li>Description</li>
                <p>
                    응징과 용서의 진정한 의미는 무엇인가!
                    주인공이 과거에 저지른 죄, 그리고 15년 전에 했던 어떤 약속을 둘러싸고 벌어지는 미스터리를 그린 야쿠마루 가쿠의 소설 『돌이킬 수 없는 약속』. 자신이 일하던 가게의 손님이었던 오치아이의 제안으로 바를 겸하는 레스토랑의 공동경영자가 된 무카이. 그는 지금 과거의 삶을 버리고, 믿을 수 있는 파트너와 자신의 성(城)을 새롭게 구축하였다. 사랑하는 가족과 함께 소박하지만 평온한 삶을 누리고 있다.

                    그러던 어느 날, 버려버린 과거에서 도착한 한 통의 편지가 예전에 봉인한 기억을 되살린다. '그들은 지금 교도소에서 나왔습니다.' 편지지에는 그 한 줄만 적혀 있었다. 사람이 죄를 지으면 어떻게 그 대가를 치러야 할까? 죄를 한 번 저지르면 그 사람은 영원히 행복해질 수 없고 새로운 삶을 꿈꿔서도 안 되는 것일까? 한 번 죄를 저지른 사람은 새 삶을 꿈꿀 수 없는 것일까? 이처럼 궁극의 물음으로 내몰며 읽는 이의 목줄까지 죄어오는 이 소설은 저자 야쿠마루 가쿠가 새로운 한 걸음을 내디딘 기념비적 작품이라는 평가를 받는다.

                </p>
                <li>About Author</li>
                <p>
                    저자 야쿠마루 가쿠는 일본 사회파 추리소설의 절대강자!
                    제51회 에드가와란포상 수상작가!

                    1969년 효고현에서 태어났다. 2005년 《천사의 나이프》로 제51회 에도가와란포상을 수상하였다. 그 외에도 2007년 《오므라이스》로 제 60회 일본추리작가협회상 후보, 2011년 《하드럭》으로 제14회 오야부하루히코상 후보, 2014년 《유자이》로 제 35회 요시카와에이지문학신인상 후보, 2014년 《불혹》으로 제 67회 일본추리작가협회상 후보에 올랐으며, 2016년 《A가 아닌 너와》로 제 37회 요시카와에이지문학신인상을 수상하였다.
                    그는 이미 일본을 대표하는 사회파 추리소설의 한 축으로 자리매김하였는데, 그의 작품은 대체로 사회구조적 범죄를 통해 심화되어 가는 현대 사회의 냉혹한 현실에 의문을 던진다. 소년범 문제를 다룬 《천사의 나이프》가 그 대표적인 예이다. 《악당》은 2012년 후지TV에서, 《형사의 눈빛》은 2013년 TBS에서 드라마로 제작되
                    어 호평을 얻기도 하였다.
                </p>
                <li>Review</li>
                <p>
                    2시간 정도 걸려 휘리릭 다 읽고는 눈이 약간 아팠지만 그 만큼 흡입력이 있는 책이고 집중해서 다 읽고 나니 기분도 좋았다. 다른 일본 추리 소설과 다르게 괜찮았던 점은 책을 두세권으로 나눠서 출간하지 않은 것이다. 우리나라에만 번역해
                </p>
            </ol>
        </el-main>
    </el-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class DashBoard extends Vue{
        public $http:any;
        private todo:string[]=[];
        private info:string[]=[];
        async mounted(){
            let result = await this.$http.get("./mockup_data/Table.json");
            let info = await this.$http.get("./mockup_data/Table2.json");
            console.log(result.data);
            this.todo = result.data;
            this.info = info.data;
        }
    }
</script>
