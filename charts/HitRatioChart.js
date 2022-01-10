export default function ratioChart(ratio,ctx){
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


        var myChart = new Chart(ctx, {
    
                type: 'doughnut',
                data: data,
              
        });

}

