let result=localStorage.getItem("Result");
const resultContainer=document.getElementById("result-container");

console.log(result);
result=JSON.parse(result);

result.forEach(element => {
    console.log(element);
    console.log(element.email);
    resultContainer.innerHTML+="<tr><td>"+element.email+  "</td> <td> " +element.score+"</td></tr>";
    


});