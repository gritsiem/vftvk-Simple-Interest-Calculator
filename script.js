function compute()
{   //Extract the principle entered by the user
    var principal = document.getElementById("principal").value;

    //VALIDATION
    //Check that the principal entered is valid, 
    //otherwise alert the user and exit the function.
    if(Number(principal)===0 || Number(principal)<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    //Extract the rate of interest per annum selected by the user.
    var rate = document.getElementById('rate').value;

    //Extract the years of savings selected by the user.
    var years = document.getElementById("years").value;


    //Calculate the simple interest.
    //Convert the value strings to numbers for calculations.
    //Apply the formula Pnr/100 
    //P = Principal amount
    //n = time after which interest is being calculated
    //r = per annum rate of interest in percent.
    var interest = Number(principal) * Number(rate) * Number(years) / 100;

    //Calculate the year in which the user will get the calculated interest
    //Add the chosen number of years to the current year.
    var actual_year = new Date().getFullYear() + Number(years);

    //Select the element to display the result.
    var result =  document.getElementById("result");

    //Prepare the formatted html string required to be shown as the output
    var result_text = `
    <p>If you deposit <mark>${principal}</mark>,</p>
    <p>at an interest rate of <mark>${rate}%</mark>.</p>
    <p>You will receive an amount of <mark>${interest}</mark>,</p>
    <p>in the year <mark>${actual_year}</mark></p>
    `
    //Assign the output html string as the child to the result element.
    result.innerHTML= result_text;
}


//Function to dynamically update the displayed rate of interest
//as the user interacts with the range input.
function getRate(){

    //select the range element
    var rate = document.getElementById("rate");

    //Select the span element (sibling of the input)
    //Update its inner HTML as the value of the input.
    rate.nextElementSibling.innerHTML=rate.value+" %";

}
        