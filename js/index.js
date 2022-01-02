var $messages = $('.messages-content');
var serverResponse = "wala";


var suggession;
//speech reco
try {
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
}

$('#start-record-btn').on('click', function(e) {
  recognition.start();
});

recognition.onresult = (event) => {
  const speechToText = event.results[0][0].transcript;
  console.log(speechToText);
 document.getElementById("MSG").value= speechToText;
  //console.log(speechToText)
  insertMessage()
}
recognition.onspeechend = function() {

  recognition.stop();
}

function listendom(no){
  console.log(no)
  //console.log(document.getElementById(no))
document.getElementById("MSG").value= no.innerHTML;
  insertMessage();
}

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    serverMessage("hello i am customer support bot type hi and i will show you quick buttions");
  }, 100);

});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}



function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  fetchmsg() 
  
  $('.message-input').val(null);
  updateScrollbar();

}

document.getElementById("mymsg").onsubmit = (e)=>{
  e.preventDefault() 
  insertMessage();

}

function serverMessage(response2) {


  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="css/bot.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="css/bot.png" /></figure>' + response2 + '</div>').appendTo($('.mCSB_container')).addClass('new');
    updateScrollbar();
  }, 100 + (Math.random() * 20) * 100);

}


function fetchmsg(){

     var url = 'http://localhost:5000/send-msg';
      
      const data = new URLSearchParams();
      for (const pair of new FormData(document.getElementById("mymsg"))) {
          data.append(pair[0], pair[1]);
          console.log(pair)
      }
    
      console.log("abc",data)
        fetch(url, {
          method: 'POST',
          body:data
        }).then(res => res.json())
         .then(response => {
          console.log(response.reply[1]);
          buildSgaChart();
          response.reply[0].map(content =>{
            serverMessage(content.text.text[0]);
            speechSynthesis.speak( new SpeechSynthesisUtterance(content.text.text[0]))
          });
        
          
 
        
          
         })
          .catch(error => console.error('Error h:', error));

}
// const responses = [{
//   COMPONENT: 'shared pool',
//   CURRENT_SIZE: 452984832,
//   MIN_SIZE: 452984832,
//   MAX_SIZE: 452984832
// },
// {
//   COMPONENT: 'large pool',
//   CURRENT_SIZE: 16777216,
//   MIN_SIZE: 16777216,
//   MAX_SIZE: 16777216
// },
// {
//   COMPONENT: 'java pool',
//   CURRENT_SIZE: 16777216,
//   MIN_SIZE: 16777216,
//   MAX_SIZE: 16777216
// },
// {
//   COMPONENT: 'SGA Target',
//   CURRENT_SIZE: 1409286144,
//   MIN_SIZE: 1409286144,
//   MAX_SIZE: 1409286144
// },
// {
//   COMPONENT: 'DEFAULT buffer cache',
//   CURRENT_SIZE: 889192448,
//   MIN_SIZE: 889192448,
//   MAX_SIZE: 889192448
// },
// {
//   COMPONENT: 'PGA Target',
//   CURRENT_SIZE: 956301312,
//   MIN_SIZE: 956301312,
//   MAX_SIZE: 956301312
// }
// ]


// function random_rgba() {
// var o = Math.round,
//   r = Math.random,
//   s = 255;
// let color = 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.5 + ')';
// return color;
// }
// var row0 = responses.map(reponse => {
// return reponse.CURRENT_SIZE
// })

// var row1 = responses.map(reponse => {
// return reponse.MIN_SIZE
// })

// var row2 = responses.map(reponse => {
// return reponse.MAX_SIZE
// })

// var obj = {};
// var dt = [];
// var backgroundColor = {};
// var label = {}



// const dataset = responses.map(reponse => {
// console.log(reponse)
// return reponse.COMPONENT

// })
// const myData = [{
// data: row0,
// label: dataset[0],
// backgroundColor: 'rgba(64, 194, 147, 0.77)',
// borderWidth: 2
// }, {
// data: row1,
// label: dataset[1],
// backgroundColor: 'rgba(240, 148, 1, 1)',
// borderWidth: 2
// }, {
// data: row2,
// label: dataset[2],
// backgroundColor: 'rgba(187, 78, 76, 1)',
// borderWidth: 2
// }]
// var modelBtn = document.querySelector('.modal-btn')
// var modelBg = document.querySelector('.modal-bg')
// modelBtn.addEventListener('click', function() {
//     modelBg.classList.add('bg-active')
//     var ctx = document.getElementById('myChart').getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: dataset,
//             datasets: myData
//         },
//     });
// })

// const ratioChart = ()=>{
// const data = {
//   labels: [
//     'HIT RATIO',
//     'Free'
//   ],
//   datasets: [{
//     labels:["used","free"],
//     data: [97,100-97 ],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)'
//     ],
//     hoverOffset: 4
//   }]
// };
// var modelBg = document.querySelector('.modal-bg')
//     modelBg.classList.add('bg-active')
//     var ctx = document.getElementById('myChart').getContext('2d');
//       var myChart = new Chart(ctx, {
  
//               type: 'doughnut',
//               data: data,
            
//       });
//       this.chart.ctx.fillText()
    

// }

// const chartBuild=(responses)=>{

//   var row0 = responses.map(reponse => {
//     return reponse.CURRENT_SIZE
//     })
    
//     var row1 = responses.map(reponse => {
//     return reponse.MIN_SIZE
//     })
    
//     var row2 = responses.map(reponse => {
//     return reponse.MAX_SIZE
//     })
    
  
//     const dataset = responses.map(reponse => {
//     console.log(reponse)
//     return reponse.COMPONENT
    
//     })
//     const myData = [{
//     data: row0,
//     label: dataset[0],
//     backgroundColor: 'rgba(64, 194, 147, 0.77)',
//     borderWidth: 2
//     }, {
//     data: row1,
//     label: dataset[1],
//     backgroundColor: 'rgba(240, 148, 1, 1)',
//     borderWidth: 2
//     }, {
//     data: row2,
//     label: dataset[2],
//     backgroundColor: 'rgba(187, 78, 76, 1)',
//     borderWidth: 2
//     }]
    
//     var modelBg = document.querySelector('.modal-bg')
    
//         modelBg.classList.add('bg-active')
//         var ctx = document.getElementById('myChart').getContext('2d');
//         var myChart = new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 labels: dataset,
//                 datasets: myData
//             },
//         });
   
// }

// const responses =[
//   {
//     file_name: "1",
//     PHYRDS: 9810,
//     PHYWRTS: 261,
//     READTIM: 5053,
//     WRITETIM: 5
//   },
//   {
//     file_name: "3",
//     PHYRDS: 32,
//     PHYWRTS: 659,
//     READTIM: 31,
//     WRITETIM: 174
//   },
//   { file_name: "4", PHYRDS: 8, PHYWRTS: 2, READTIM: 0, WRITETIM: 0 },
//   { file_name: "5", PHYRDS: 20, PHYWRTS: 2, READTIM: 1, WRITETIM: 0 }
// ]

// const chartBuildPga=()=>{

//   var row0 = responses.map(reponse => {
//     return reponse.PHYRDS
//     })
    
//     var row1 = responses.map(reponse => {
//     return reponse.PHYWRTS
//     })
    


//     var row2 = responses.map(reponse => {
//     return reponse.READTIM
//     })
    


    
//     var row3 = responses.map(reponse => {
//     return reponse.WRITETIM
//     })
    
  
//     const dataset = responses.map(reponse => {
//     console.log(reponse)
//     return reponse.file_name
    
//     })
//     const myData = [{
//     data: row0,
//     label: dataset[0],
//     backgroundColor: 'rgba(64, 194, 147, 0.77)',
//     borderWidth: 2
//     }, {
//     data: row1,
//     label: dataset[1],
//     backgroundColor: 'rgba(240, 148, 1, 1)',
//     borderWidth: 2
//     }, {
//     data: row2,
//     label: dataset[2],
//     backgroundColor: 'rgba(187, 78, 76, 1)',
//     borderWidth: 2
//     }, 
//     {
//     data: row3,
//     label: dataset[3],
//     backgroundColor: 'rgba(187, 178, 76, 1)',
//     borderWidth: 2
//     }];
    
//     var modelBg = document.querySelector('.modal-bg')
    
//         modelBg.classList.add('bg-active')
//         var ctx = document.getElementById('myChart').getContext('2d');
//         var myChart = new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 labels: dataset,
//                 datasets: myData
//             },
//             options: {
//               responsive: true,
            
//               scales: {
             
                
//                 y: {
                    
//                   min: 0,
//                   max: 1000,
//                   ticks: {
                    
//                     stepSize: 100
//                   }
//                 }
//               }
//             }
//         });
   
// }


const responses = [
  {
    stat: 0,
    NAME: 'OS CPU Qt wait time',
    CLASS: 1,
    VALUE: 0
  },
  {
    stat: 1,
    NAME: 'logons cumulative',
    CLASS: 1,
    VALUE: 1206,
  },
  {
    stat: 2,
    NAME: 'logons current',
    CLASS: 1,
    VALUE: 33,
  },
  {
    stat: 3,
    NAME: 'opened cursors cumulative',
    CLASS: 1,
    VALUE: 228815
      },
  {
    stat: 4,
    NAME: 'opened cursors current',
    CLASS: 1,
    VALUE: 127
  },
  {
    stat: 5,
    NAME: 'user commits',
    CLASS: 1,
    VALUE: 3466
  },
  {
    stat: 6,
    NAME: 'user rollbacks',
    CLASS: 1,
    VALUE: 88
  },
  {
    stat: 7,
    NAME: 'user calls',
    CLASS: 1,
    VALUE: 42173
  },
  {
    stat: 8,
    NAME: 'recursive calls',
    CLASS: 1,
    VALUE: 1539141
  },
  {
    stat: 9,
    NAME: 'recursive cpu usage',
    CLASS: 1,
    VALUE: 15396
  }
]
const buildSgaChart = ()=>{
  
const myData = responses.map(response => response.VALUE)


const labels = responses.map(response => response.NAME);
const class1 = responses.map(response => response.CLASS);
const data = {
labels: labels,

datasets: [{
  label: 'PGA Chart',
  data: myData,
  fill: false,
  borderColor: 'rgb(75, 192, 192)',
  tension: 0.1,

}]
};

    var modelBg = document.querySelector('.modal-bg')
    
        modelBg.classList.add('bg-active')
        var ctx = document.getElementById('myChart').getContext('2d')
        var myChart = new Chart(ctx, {
                      type: 'line',
                      data: {
                          labels: labels,
                          datasets: dataset
                      },
                
                  });
}
             
          // }