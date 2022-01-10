

var $messages = $('.messages-content');
var serverResponse = "wala";
$("#dash").click(function() {
  $('#particles-js').addClass('hide_blur');
  $('#particls-js').slideUp(200);
  $('.container').removeClass('hide');
  $('.card').removeClass('hide');
  $('.small-card').removeClass('hide');
});
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
var today  = new Date();
document.getElementById('time').innerHTML=today.toLocaleDateString("en-US", options);
$(document).ready(function() {
  $("#do_login").click(function() { 
    
    $(this).parent().find('span').css("display","none");
    $(this).parent().find('span').removeClass("i-save");
    $(this).parent().find('span').removeClass("i-warning");
    $(this).parent().find('span').removeClass("i-close");
    
     var proceed = true;
     $("#login_form input").each(function(){
         
         if(!$.trim($(this).val())){
             $(this).parent().find('span').addClass("i-warning");
           $(this).parent().find('span').css("display","block");  
             proceed = false;
         }
     });
    
     if(proceed) //everything looks good! proceed...
     {
      const name = $('#user').val();
      const password= $('#pass').val();
  
          if(name === password  && name=== 'sys'){
          
        $('.blur_').addClass('hide_blur');
        $('.box').hide();
         $(this).parent().find('span').addClass("i-save");
         $(this).parent().find('span').css("display","block");
     }
     else {
      $('#user').parent().find('span').addClass("i-warning");
      $("#user").parent().find('span').css("display","block"); 
      $('#pass').parent().find('span').addClass("i-warning");
      $("#pass").parent().find('span').css("display","block"); 
     }
    
    }
 });
 
 //reset previously results and hide all message on .keyup()
 $("#login_form input").keyup(function() { 
     $(this).parent().find('span').css("display","none");
 });
  //Toggle fullscreen
  $(".chat-bot-icon").click(function(e) {
      $('.chat').removeClass('hide').addClass('show');
      $('.chat').slideToggle(700);
      $(this).children('img').toggleClass('hide');
      $(this).children('svg').toggleClass('animate');
  }); });
  var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 600,
    height: 200,
    style: 'ios9',
    curveDefinition: [
      {
        color: "255,255,255",
        supportLine: true,
      },
      {
        color: "153, 0, 4",
      },
      {
        color: "89, 0, 179",
      },
      {
        color: "255, 10, 155",
      },
      {
        attenuation: -2,
        lineWidth: 1,
        opacity: 0.1,
      },
      {
        attenuation: -6,
        lineWidth: 1,
        opacity: 0.2,
      },
      {
        attenuation: 4,
        lineWidth: 1,
        opacity: 0.4,
      },
      {
        attenuation: 2,
        lineWidth: 1,
        opacity: 0.6,
      },
      {
        attenuation: 1,
        lineWidth: 1.5,
        opacity: 1,
      }],
    ratio: 1.5,
    // animation speed
    speed: 0.4,
    // amplitude
    amplitude: 2.3,
    // frequency (iOS style only)
    frequency: 6,

  });
  siriWave.stop();
  $('#siri-container').hide("slow");
 
var suggession;
//speech reco
try {
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show("slow");
}

$('#start-record-btn').on('click', function(e) {
  recognition.start();
  $(document).ready(function() {
  $('#siri-container').fadeIn("slow",function(){
    siriWave.start();
  });
  });
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
  $('#siri-container').fadeOut( "slow", function() {
    siriWave.stop();
  });
 
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
    serverMessage("Hi there ! I am your bot assistant , greet me back to begin our chat !");
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
  $('<div class="message loading new"><figure class="avatar"><img src="https://img.icons8.com/nolan/96/oracle-logo.png"/></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="https://img.icons8.com/color/96/fa314a/bot.png"/></figure>' + response2 + '</div>').appendTo($('.mCSB_container')).addClass('new');
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
          
          
         
          // tableCreate()
          // creationTable()
          // buildSgaChart();
          response.reply[0].map(content =>{
            if(content.text.text[0].includes("SELECT") )
         {
          const indice = content.text.text[0].split('|')[1];
          const indice_int = parseInt(indice);
          switch(indice_int){
            case 3 : {
              chartBuildPga(response.reply[1],ctxPga);
              break;
            }
            case 0 : {
              sgaChart(response.reply[1],ctxSGA);
              break;
            }
            case 8 : {
              fileChart(response.reply[1],ctxFileChart)
              console.log(response.reply[1])
          
              break;
            }
            case 5 : {
              setCredentials(response.reply[1][0])
              console.log(response.reply[1][0].INSTANCE_NAME)
          
              break;
            }
                  case 9 : {
              sysStatChart(response.reply[1],ctxSysStat)
              console.log(response.reply[1])
          
              break;
            }
            case 1 : {
              ratioChartLibraryCash(response.reply[1][0].Hit_Rate,ctxHitRatioChartLibraryCash)
              console.log(response.reply[1][0].Hit_Rate)
              break;
            }
            case 6 : {
              ratioChart(response.reply[1][0].Hit_Rate,ctxHitRatio)
              console.log(response.reply[1][0].Hit_Rate)
              break;
            }
          }
          }
            serverMessage(content.text.text[0].split('|')[0]);
            speechSynthesis.speak( new SpeechSynthesisUtterance(content.text.text[0].split('|')[0]))
          });
        
          
          
         })
          .catch(error => console.error('Error h:', error));

}



var classChartPGa = null;
var classChartSGa = null;
var classChartFile = null;
var classChartSys = null;
var classChartHR = null;
var classChartHRLC = null;



const responses = [
  {
    SQL_TEXT: '/* OracleOEM */  SELECT SEVERITY_INDEX, CRITICAL_INICDENTS, WARNING_INCIDENTS from v$incmeter_summary    ',
    LAST_ACTIVE_TIME: '2022-01-02T19:23:05.000Z',
    DISK_READS: 1,
    CPU_TIME: 62500
  },


  {
    SQL_TEXT: 'SELECT value FROM v$sysstat WHERE stat_id IN (24469293, 1099569955, 2432034337, 3332107451, 3649082374, 3868577743) ORDER BY stat_id',
    LAST_ACTIVE_TIME: '2022-01-02T19:22:46.000Z',
    DISK_READS: 0,
    CPU_TIME: 15625
  },
  {
    SQL_TEXT: 'UPDATE MGMT_TARGETS SET LAST_LOAD_TIME=:B2 WHERE TARGET_GUID = :B1 AND (LAST_LOAD_TIME < :B2 OR LAST_LOAD_TIME IS NULL)',
    LAST_ACTIVE_TIME: '2022-01-02T19:24:14.000Z',
    DISK_READS: 50,
    CPU_TIME: 78125
  },
  {
    SQL_TEXT: 'BEGIN :1 := MGMT_FAILOVER.register(:2, :3, :4, :5); END;',
    LAST_ACTIVE_TIME: '2022-01-02T17:12:36.000Z',
    DISK_READS: 6,
    CPU_TIME: 15625
  },
  {
    SQL_TEXT: "SELECT TASK_LIST.TASK_ID FROM (SELECT /*+ NO_MERGE(T) ORDERED */ T.TASK_ID FROM (SELECT * FROM DBA_ADVISOR_TASKS ORDER BY TASK_ID DESC) T, DBA_ADVISOR_PARAMETERS_PROJ P1, DBA_ADVISOR_PARAMETERS  _PROJ P2 WHERE T.ADVISOR_NAME='ADDM' AND T.STATUS = 'COMPLETED' AND T.EXECUTION_START >= (SYSDATE - 1) AND T.HOW_CREATED = 'AUTO' AND T.TASK_ID = P1.TASK_ID AND P1.PARAMETER_NAME = 'INSTANCE' AND P1.PARAMETER _VALUE = SYS_CONTEXT('USERENV','INSTANCE') AND T.TASK_ID = P2.TASK_ID AND P2.PARAMETER_NAME = 'DB_ID' AND P2.PARAMETER_VALUE = TO_CHAR(:B1 ) ORDER BY T.TASK_ID DESC) TASK_LIST WHERE ROWNUM = 1",
    LAST_ACTIVE_TIME: '2022-01-02T19:23:36.000Z',
    DISK_READS: 2,
    CPU_TIME: 15625
  },
  {
    SQL_TEXT: "/* OracleOEM */  SELECT 'RECOVERY AREA' recovery_area,        CASE WHEN space_limit > 0 AND space_limit >= space_used AND space_used >= space_reclaimable  THEN 100 * (space_limit - ( space_used - space_reclaimable))/space_limit             ELSE NULL END free_space   FROM v$recovery_file_dest  WHERE name IS NOT NULL    AND rownum = 1 ",
    LAST_ACTIVE_TIME: '2022-01-02T19:18:30.000Z',
    DISK_READS: 0,
    CPU_TIME: 15625
  },
  {
    SQL_TEXT: "select count(*) from dba_users where username ='DVSYS' and user_id = 1279990",
    LAST_ACTIVE_TIME: '2022-01-02T19:14:56.000Z',
    DISK_READS: 0,
    CPU_TIME: 15625
  }
];
const creationTable = ()=>{
  function tableCreate() {
    let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  
  table.appendChild(thead);
  table.appendChild(tbody);
  
  // Adding the entire table to the body tag
  document.getElementById('body').appendChild(table);
  let row_1 = document.createElement('tr');
  let heading_1 = document.createElement('th');
  heading_1.innerHTML = "SQL_TEXT";
  let heading_2 = document.createElement('th');
  heading_2.innerHTML = "LAST_ACTIVE_TIME";
  let heading_3 = document.createElement('th');
  heading_3.innerHTML = "DISK_READS";
  let heading_4 = document.createElement('th');
  heading_4.innerHTML = "CPU_TIME";
  
  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  row_1.appendChild(heading_4);
  thead.appendChild(row_1);
  
  
var ourClass =""
  
  // Creating and adding data to third row of the table
  for(i=0;i<responses.length;i++){
   
    if(responses[i].CPU_TIME<40000) {
      ourClass="colGreen"
    }else if(responses[i].CPU_TIME>=40000 && responses[i].CPU_TIME<70000){
      ourClass="colOrange"
    }else{
      ourClass="colRed"
    }
        let row_3 = document.createElement('tr');
  let row_3_data_1 = document.createElement('td');
  row_3_data_1.innerHTML = responses[i].SQL_TEXT;
  
  let row_3_data_2 = document.createElement('td');
  row_3_data_2.innerHTML = responses[i].LAST_ACTIVE_TIME;
  let row_3_data_3 = document.createElement('td');
  row_3_data_3.innerHTML = responses[i].DISK_READS;
  let row_3_data_4 = document.createElement('td');
  row_3_data_4.innerHTML = responses[i].CPU_TIME;
  

  row_3.appendChild(row_3_data_1);
  row_3.appendChild(row_3_data_2);
  row_3.appendChild(row_3_data_3);
  row_3.appendChild(row_3_data_4);
  row_3.classList.add(ourClass)
  tbody.appendChild(row_3);
 
  }
  }
  tableCreate()

}
         

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
          
          function sgaChart(responses,ctx){
        
            
            const myData = responses.map(response => response.VALUE)
          
          
            const labels = responses.map(response => response.NAME);
            const class1 = responses.map(response => response.CLASS);
          const data = {
            labels: labels,
            
            datasets: [{
              label: 'SGA Chart',
              data: myData,
              fill: false,
              borderColor: 'rgb(77, 226, 201)',
              backgroundColor: 'rgb(77, 226, 201)',
              tension: 0.1,
              options:{
                  plugins:{
                      tooltip:{
                          events:['hover'],
                          text:class1
                      }
                  }
              }
            }]
          };
          
          if(classChartSGa === null){
            classChartSGa = new Chart(ctx, {
              type: 'bar',
              data: data
            });
          }else{
            classChartSGa.destroy();
            classChartSGa = new Chart(ctx, {
              type: 'bar',
              data: data
            });

          }
          
        
        }  
       
        
       
        
        function chartBuildPga(responses,ctx){

          var row0 = responses.map(reponse => {
            return reponse.PHYRDS
            })
            
            var row1 = responses.map(reponse => {
            return reponse.PHYWRTS
            })
            
            var row2 = responses.map(reponse => {
            return reponse.READTIM
            })
            
            
            var row3 = responses.map(reponse => {
            return reponse.WRITETIM
            })
            
          
            const dataset = responses.map(reponse => {
            console.log(reponse)
            return reponse.FILE_ID
            
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
            }, 
            {
            data: row3,
            label: dataset[2],
            backgroundColor: 'rgba(187, 178, 76, 1)',
            borderWidth: 2
            }]
            if(classChartPGa === null){
              classChartPGa = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dataset,
                    datasets: myData
                },
            });
            }else{
              classChartPGa.destroy();
              classChartPGa = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dataset,
                    datasets: myData
                },
            });
           
  
            }
               
           
        }
        
        
        var ctxPga = document.getElementById('PGAChart').getContext('2d');
        chartBuildPga(responsesPGA,ctxPga)
        
        
        function fileChart(responses,ctx){
        
          
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
           
            if(classChartFile === null){
              classChartFile = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dataset,
                    datasets: myData
                },
            });
            }else{
              classChartFile.destroy();
              classChartFile = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dataset,
                    datasets: myData
                },
            });
  
            }
                
          }
          var ctxFileChart = document.getElementById('FileChart').getContext('2d');

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
        
        
          fileChart(responsesFileChart,ctxFileChart)
        
        
        
        
        
           function ratioChart(ratio,ctx){
            const myDate =   [ratio,100-ratio]
     
        
          const data = {
            labels: [
              'Hit ratio',
              'Free'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: myDate,
              
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
              ],
              hoverOffset: 4
            }]
          };
        
        
          if(classChartHR === null){
            classChartHR = new Chart(ctx, {
            
              type: 'doughnut',
              data: data,
            
      });
          }else{
            classChartHR.destroy();
            classChartHR = new Chart(ctx, {
            
              type: 'doughnut',
              data: data,
            
      });

          }
          

        }
        
        var ctxHitRatio = document.getElementById('HitRatioChart').getContext('2d');
        
        var responseHitRation = 0
        ratioChart(responseHitRation,ctxHitRatio)
        
        
        
        
        
        
        
        
        
         function ratioChartLibraryCash(ratio,ctx){
            const myDate =   [ratio,100-ratio] 
        
          const data = {
            labels: [
              'Hit ratio',
              'Free'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: myDate,
              
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
              ],
              hoverOffset: 4
            }]
          };
        
          if(classChartHRLC === null){
            classChartHRLC = new Chart(ctx, {
            
              type: 'doughnut',
              data: data,
            
      });
          }else{
            classChartHRLC.destroy();
            classChartHRLC = new Chart(ctx, {
            
              type: 'doughnut',
              data: data,
            
      });

          }
        
        }
        
        var ctxHitRatioChartLibraryCash = document.getElementById('HitRatioChartLibraryCash').getContext('2d');
        var responseHitRationLibraryCash = 0
        ratioChartLibraryCash(responseHitRationLibraryCash,ctxHitRatioChartLibraryCash)
        
        
        
        
        
        
        
        
        
        // function sgaChart(responses,ctx){
        
            
        //     const myData = responses.map(response => response.VALUE)
          
          
        //     const labels = responses.map(response => response.NAME);
        //     const class1 = responses.map(response => response.CLASS);
        //   const data = {
        //     labels: labels,
            
        //     datasets: [{
        //       label: 'PGA Chart',
        //       data: myData,
        //       fill: false,
        //       borderColor: 'rgb(77, 226, 201)',
        //       backgroundColor: 'rgb(77, 226, 201)',
        //       tension: 0.1,
        //       options:{
        //           plugins:{
        //               tooltip:{
        //                   events:['hover'],
        //                   text:class1
        //               }
        //           }
        //       }
        //     }]
        //   };
        
        //   var myChart = new Chart(ctx, {
        //     type: 'bar',
        //     data: data
        //   });
        // }
        var ctxSGA = document.getElementById('SGAChart').getContext('2d');
        
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
          
        
        
         sgaChart(responsesSGA,ctxSGA);
        
        
        
        function sysStatChart(responses,ctx){
        
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
          
          if(classChartSys === null){
            classChartSys =    new Chart(ctx, {
              type: 'line',
              data: data,
              options: {
                title: {
                  display: true,
                  text: 'World population per region (in millions)'
                }
              }
            });
          }else{
            classChartSys.destroy();
            classChartSys = new Chart(ctx, {
              type: 'line',
              data: data,
              options: {
                title: {
                  display: true,
                  text: 'World population per region (in millions)'
                }
              }
            });

          }
          
           
            }
            var ctxSysStat = document.getElementById('SysStatChart').getContext('2d');
            const responseSysStat = [
                {
                  stat: 0,
                  NAME: '',
                  CLASS: 0,
                  VALUE: 0
                }
              ]
              
        
            sysStatChart(responseSysStat,ctxSysStat)
        
        
            
var responseCredentials = 
  {
    INSTANCE_NAME: '',
    HOST_NAME: '',
    VERSION: '',
    DATABASE_STATUS: ''
  }

  function setCredentials(response){
    document.getElementById('instance_name').innerHTML="INSTANCE NAME:   "+response.INSTANCE_NAME;
    document.getElementById('host_name').innerHTML="HOST NAME:   "+response.HOST_NAME;
    document.getElementById('version').innerHTML="VERSION:   "+response.VERSION;
    document.getElementById('database_status').innerHTML="DATABASE STATUS:   "+response.DATABASE_STATUS;
  }
