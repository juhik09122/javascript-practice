// Write a JavaScript function that takes the current temperature as input and checks:
// If the temperature is 30°C or higher, return "It's hot outside."
// If the temperature is between 20°C and 29°C, check:
// If it's exactly 25°C, return "It's a perfect day!"
// Otherwise, return "The weather is pleasant."
// If the temperature is below 20°C, return "It's cold outside."


function checkTemp(temperature){
            if( temperature >= 30){
                return("it is hot outside ")
                
            }else if ( temperature >=20 && temperature<=29){
                if(temperature==25)
                return("it is perfect day")
            else 
            return("the weather is pleasant")

            }else{
                return("it's cold out side")
            }

}
console.log(checkTemp(40))