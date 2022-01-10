const ratioChart = (ctx)=>{
    const myDate =   { Hit_Rate: 97.5334114719772, Free:100 - 97.5334114719772  } 

  const data = {
    labels: [
      'Red',
      'Blue'
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

export default ratioChart;