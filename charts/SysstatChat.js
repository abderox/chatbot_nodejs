
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

const buildSgaChart = ()=>{
    var modelBg = document.querySelector('.modal-bg')
      
            modelBg.classList.add('bg-active')
            var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
        datasets: datasets
      },
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    });
  }
