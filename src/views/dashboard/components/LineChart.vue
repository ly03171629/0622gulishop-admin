<template>
  <div :style="{ width, height }"></div>
</template>

<script>
import echarts from "echarts";
import "echarts/theme/macarons";
import resize from './mixins/resize'
export default {
  mixins:[resize],
  name: "",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "400px",
    },
    yTittle: {
      type: String,
      required: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.initCharts();
  },

  watch: {
    chartData() {
      this.setOption()
    },
  },

  methods: {
    initCharts() {
      //初始化一个图表实例
      this.chart = echarts.init(this.$el, "macarons");
      this.setOption()
      //不能设置options的，因为数据没回来，而mounted只能执行一次
      // let {expectedData = [],actualData = []} =  this.chartData

      // let options = {
      //   //标题
      //   title: {
      //     text: this.yTittle,
      //   },
      //   //提示
      //   tooltip: {},

      //   //图例
      //   legend: {
      //     data:['期望','实际'],
      //   },

      //   //x坐标轴
      //   xAxis: {
      //     data: ["周一", "周二", "周三", "周四", "周五", "周六",'周日'],
      //   },
      //   // y坐标轴
      //   yAxis: {},

      //   //系列
      //   series: [
      //     {
      //       name: "期望",
      //       type: "line",
      //       data:expectedData,
      //     },
      //     {
      //       name: "实际",
      //       type: "line",
      //       data:actualData,
      //     },
      //   ],
      // };

      // chart.setOption(options)
    },

    setOption() {
      let { expectedData = [], actualData = [] } = this.chartData;

      let options = {
        //标题
        // title: {
        //   text: this.yTittle,
        // },
        //提示
        tooltip: {
          trigger:'axis',
          axisPointer:{
            type:'cross'
          }
        },

        //图例
        legend: {
          data: ["期望", "实际"],
        },

        //x坐标轴
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          boundaryGap:false
        },
        // y坐标轴
        yAxis: {
          name:this.yTittle
        },

        // 设置grid 设置图标上下左右的间距
        grid:{
          left: 10,
          right: 10,
          top: 30,
          bottom:10,
          containLabel:true
        },

        //系列
        series: [
          {
            name: "期望",
            type: "line",
            data: expectedData,
            lineStyle:{
              color:'hotpink',
              width:3
            },
            areaStyle:{
              color:'#aaa'
            }
          },
          {
            name: "实际",
            type: "line",
            data: actualData,
            lineStyle:{
              color:'skyblue',
              width:3
            }
          },
        ],
      };

      this.chart.setOption(options);
    },
  },
};
</script>

