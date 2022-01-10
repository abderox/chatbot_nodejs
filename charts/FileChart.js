const responses = [{
  COMPONENT: 'shared pool',
  CURRENT_SIZE: 452984832,
  MIN_SIZE: 452984832,
  MAX_SIZE: 452984832
},
{
  COMPONENT: 'large pool',
  CURRENT_SIZE: 16777216,
  MIN_SIZE: 16777216,
  MAX_SIZE: 16777216
},
{
  COMPONENT: 'java pool',
  CURRENT_SIZE: 16777216,
  MIN_SIZE: 16777216,
  MAX_SIZE: 16777216
},
{
  COMPONENT: 'SGA Target',
  CURRENT_SIZE: 1409286144,
  MIN_SIZE: 1409286144,
  MAX_SIZE: 1409286144
},
{
  COMPONENT: 'DEFAULT buffer cache',
  CURRENT_SIZE: 889192448,
  MIN_SIZE: 889192448,
  MAX_SIZE: 889192448
},
{
  COMPONENT: 'PGA Target',
  CURRENT_SIZE: 956301312,
  MIN_SIZE: 956301312,
  MAX_SIZE: 956301312
}
]


function random_rgba() {
var o = Math.round,
  r = Math.random,
  s = 255;
let color = 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.5 + ')';
return color;
}
export default function fileChart(responses,ctx){

  
  var row0 = responses.map(reponse => {
  return reponse.CURRENT_SIZE
  })
  
  var row1 = responses.map(reponse => {
  return reponse.MIN_SIZE
  })
  
  var row2 = responses.map(reponse => {
  return reponse.MAX_SIZE
  })
  
  var obj = {};
  var dt = [];
  var backgroundColor = {};
  var label = {}
  
  
  
  const dataset = responses.map(reponse => {
  console.log(reponse)
  return reponse.COMPONENT
  })
  
  const myData = [{
  data: row0,
  label: dataset[0],
  backgroundColor: 'rgba(64, 194, 147, 0.77)',
  borderWidth: 2
  }, {
  data: row1,
  label: dataset[1],
  backgroundColor: 'rgba(240, 148, 1, 1)',
  borderWidth: 2
  }, {
  data: row2,
  label: dataset[2],
  backgroundColor: 'rgba(187, 78, 76, 1)',
  borderWidth: 2
  }]
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: dataset,
              datasets: myData
          },
      });
}
