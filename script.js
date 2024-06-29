//Use rest countries API URL https://restcountries.com/v3.1/all

//Task 1: Display all countries flags in console

//Task 2: Diaplay all countries names,regions,sub-region and populations

var request = new XMLHttpRequest();
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload= function (){
    var result = JSON.parse(request.response);
    //console.log(result);
    for (var i=0; i<result.length; i++)
        {
            console.log(result[i].flags);
           
        }

        for (var i=0; i<result.length; i++)
          {
               console.log(result[i].name, result[i].region, result[i].subregion,result[i].population);
          }
       
}