document.getElementById("btnSubmit").addEventListener("click", getValues);

// //get the values from the page

function getValues() {
    //get values from the page

    let startValue = document.querySelector("#startValue").value;
    let endValue = document.querySelector("#endValue").value;


    // we generate the values

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);


    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
       let  numbers = generateNumbers(startValue, endValue);

       displayNumbers(numbers);
    } else {
        alert("You must enter a integer");
    }

}

//generate the numbers from start to end
function generateNumbers(startValue, endValue) {
    let numbers = [];

    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }

    return numbers;
}

//display the numbers and mark even numbers bold

function displayNumbers(numbers) {
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        let className = "";



        if(number % 2 == 0)
        {
            className = "even"
        }
        else{
            className = "bold";
        }

        //code does not display properly

        templateRows+= `<tr class='${className}'><td>${number}</td></tr>`;

        document.getElementById("results").innerHTML = templateRows;   
    }

    
}
