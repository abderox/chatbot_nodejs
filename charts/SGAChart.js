
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


  export default function sgaChart(responses,ctx){

    
      const myData = responses.map(response => response.VALUE)
    
    
      const labels = responses.map(response => response.NAME);
      const class1 = responses.map(response => response.CLASS);
    const data = {
      labels: labels,
      
      datasets: [{
        label: 'PGA Chart',
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
  
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data
    });
  }
