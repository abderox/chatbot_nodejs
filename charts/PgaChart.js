
const chartBuildPga=(responses)=>{

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
      return reponse.file_name
      
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
      }, 
      {
      data: row3,
      label: dataset[2],
      backgroundColor: 'rgba(187, 178, 76, 1)',
      borderWidth: 2
      }]
      
      var modelBg = document.querySelector('.modal-bg')
      
          modelBg.classList.add('bg-active')
          var ctx = document.getElementById('myChart').getContext('2d');
          var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                  labels: dataset,
                  datasets: myData
              },
          });
     
  }
  export default chartBuildPga;


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