const chartCols = document.getElementsByClassName('column');
const spendingTags = document.getElementsByClassName('spending-tag')
console.log(chartCols);
console.log(spendingTags);

// * add event listeners to colums to display spending tag on mouseover and clear on leave

for (let i = 0; i < chartCols.length; i++) {
    chartCols[i].addEventListener('mouseover',function(){
        spendingTags[i].classList.remove('tag-off');
        spendingTags[i].classList.add('tag-on');
    })
    chartCols[i].addEventListener('mouseleave',function(){
        spendingTags[i].classList.remove('tag-on');
        spendingTags[i].classList.add('tag-off');
    })
}

// * get data from .json file

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let maxSpending = data[0].amount;
    let maxSpendingIndex = 0;
    
    // * find day with biggest spending
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].amount > maxSpending) {
            maxSpending = data[i].amount;
            maxSpendingIndex = i;
        } 
    }

    // * add class to biggest spending day so it displays blue
    
    chartCols[maxSpendingIndex].classList.add('column-blue');
    
    // * populate spending-tags with values
    
    for (let i = 0; i < spendingTags.length; i++) {
        spendingTags[i].innerHTML =  `<p>$${data[i].amount}</p>`     
    }

    // * create columns based on spending ammount
    
    for (let i = 0; i < chartCols.length; i++) {
        chartCols[i].style.height = `${data[i].amount * 3}px`;     
    }
});
