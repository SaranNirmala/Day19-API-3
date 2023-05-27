var container= document.createElement("div");
container.className="container";
var row=document.createElement("div")
row.className="row";

row.style.marginTop="30px";


var div=document.createElement("div");
div.id="days";

var h1= document.createElement("h1");
h1.innerHTML="NameDay Calender";
h1.style.textAlign="center";
h1.style.marginTop="50px";
h1.style.color="black"

var div1=document.createElement("div");
div1.style.textAlign="center";
div1.style.backgroundColor="rgb(60, 144, 172)";

document.body.style.backgroundColor="aliceblue";

async function foo(){
    var url="https://nameday.abalin.net/api/V1/today";
    var data= await fetch(url);
    var data1= await data.json();
     div1.innerHTML=`<h4 style="color:rgb(255, 255, 255)"> Days : ${data1.day}</h4> <br>
   <h4 style="color:rgb(255, 255, 255)">Month : ${data1.month}</h4>`;
  
    var datas= data1.nameday;
   for(let item in datas)
   {
    row.innerHTML +=` <div class="col-md-4">
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <h5 class="card-header"> ${item} : ${datas[item]}</h5>
    </div>
  </div>`;
  
   }
   
}
foo();

div.append(h1);
div1.append(row)
container.append(div, div1);
container.append(row);
document.body.append(container);



