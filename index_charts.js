import  chartBuildPga from "./charts/PgaChart.js"; 
import sgaChart from "./charts/SgaChart.js";
import ratioChart from "./charts/HitRatioChart.js";
import fileChart from "./charts/FileChart.js";


//steps import function_name from "./charts/file_js_name.js";
//first : 
//seconde definition of responses 
//third add ctx path
//forth document.getElementById('myBtn').addEventListener('click',function_name(responses,ctx))




//PGA
const responsesPGA = [
  {
    FILE_ID: 0,
    PHYRDS: 0,
    PHYWRTS: 0,
    READTIM: 0,
    WRITETIM: 0
  },
  {
    FILE_ID: 0,
    PHYRDS: 0,
    PHYWRTS: 0,
    READTIM: 0,
    WRITETIM: 0
  },
  { FILE_ID: 0, PHYRDS: 0, PHYWRTS: 0, READTIM: 0, WRITETIM: 0 },
  { FILE_ID: 0, PHYRDS: 0, PHYWRTS: 0, READTIM: 0, WRITETIM: 0 },
  { FILE_ID: 0, PHYRDS: 0, PHYWRTS: 0, READTIM: 0, WRITETIM: 0 }
]

  





//SGA



const responsesSGA = [
  {
    stat: 0,
    NAME: '',
    CLASS: 0,
    VALUE: 0
  },
  {
    stat: 0,
    NAME: '',
    CLASS: 0,
    VALUE: 0,
  },
  {
    stat: 0,
    NAME: '',
    CLASS: 0,
    VALUE: 0,
  },
  {
    stat: 0,
    NAME: '',
    CLASS: 0,
    VALUE: 0
      },
  {
    stat: 0,
    NAME: '',
    CLASS: 0,
    VALUE: 0
  },
  {
    stat: 0,
    NAME: '',
    CLASS: 0,
    VALUE: 0
  },
  {
    stat: 0,
    NAME: '',
    CLASS: 0,
    VALUE: 0,
  },
  {
    stat: 0,
    NAME: '',
    CLASS: 0,
    VALUE: 0
  },
  {
    stat: 0,
    NAME: '',
    CLASS: 0,
    VALUE: 0
  },
  {
    stat: 0,
    NAME: '',
    CLASS: 0,
    VALUE: 0
  }
]












//FileChart

const responsesFileChart = [{
  COMPONENT: '',
  CURRENT_SIZE: 0,
  MIN_SIZE: 0,
  MAX_SIZE: 0
},
{
  COMPONENT: '',
  CURRENT_SIZE: 0,
  MIN_SIZE: 0,
  MAX_SIZE: 0
},
{
  COMPONENT: '',
  CURRENT_SIZE: 0,
  MIN_SIZE: 0,
  MAX_SIZE: 0
},
{
  COMPONENT: '',
  CURRENT_SIZE: 0,
  MIN_SIZE: 0,
  MAX_SIZE: 0
},
{
  COMPONENT: '',
  CURRENT_SIZE: 0,
  MIN_SIZE: 0,
  MAX_SIZE: 0
},
{
  COMPONENT: '',
  CURRENT_SIZE: 0,
  MIN_SIZE: 0,
  MAX_SIZE: 0
}
]








//Hit Ratio

var responseHitRation = 0







var ctxPga = document.getElementById('PGAChart').getContext('2d');
var ctxSGA = document.getElementById('SGAChart').getContext('2d');
var ctxFileChart = document.getElementById('FileChart').getContext('2d');
var ctxHitRatio = document.getElementById('HitRatioChart').getContext('2d');
chartBuildPga(responsesPGA,ctxPga);
sgaChart(responsesSGA,ctxSGA)
fileChart(responsesFileChart,ctxFileChart)
ratioChart(responseHitRation,ctxHitRatio)













var res=0
switch(res){
  case 0 : {
    chartBuildPga(responsesPGA,ctxPga);
    break;
  }
  case 1 : {
    sgaChart(responsesSGA,ctxSGA)
    break;
  }
  case 2 : {
    fileChart(responsesFileChart,ctxFileChart)
    break;
  }
  case 3 : {
    ratioChart(responseHitRation,ctxHitRatio)
    break;
  }
}




































