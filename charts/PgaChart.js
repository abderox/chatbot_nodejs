const responses = [
    {
      FILE_ID: 1,
      PHYRDS: 9810,
      PHYWRTS: 248,
      READTIM: 5053,
      WRITETIM: 5
    },
    {
      FILE_ID: 2,
      PHYRDS: 2309,
      PHYWRTS: 2272,
      READTIM: 741,
      WRITETIM: 332
    },
    { FILE_ID: 3, PHYRDS: 32, PHYWRTS: 602, READTIM: 31, WRITETIM: 35 },
    { FILE_ID: 4, PHYRDS: 8, PHYWRTS: 2, READTIM: 0, WRITETIM: 0 },
    { FILE_ID: 5, PHYRDS: 20, PHYWRTS: 2, READTIM: 1, WRITETIM: 0 }
  ]
  
  




export default function chartBuildPga(responses,ctx){

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
  
          var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                  labels: dataset,
                  datasets: myData
              },
          });
     
  }


/*
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
 
    
      scales: {
     
        y: {
          
          min: 0,
          max: 100,
          ticks: {
            // forces step size to be 50 units
            stepSize: 10
          }
        }
      }
    }
  };
    */