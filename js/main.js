const chartCols = document.getElementsByClassName('column');
console.log(chartCols);

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    chartCols[0].style.backgroundColor = 'blue';
    console.log(chartCols[0].style.backgroundColor);
    // chartCols[0].style.height = '50px';
    console.log(data[0].amount);
    console.log(`${data[0].amount}`);
    chartCols[0].style.height = `${data[0].amount * 3}px`;
    console.log(chartCols[0].style.height);

    for (let i = 0; i < chartCols.length; i++) {
        chartCols[i].style.height = `${data[i].amount * 3}px`;     
    }
  });

//   chartCols[0].style.backgroundColor = 'green'
//   console.log(chartCols[0].style.backgroundColor);
// console.log('outside : ' + expenseData);  //undefinded ?
