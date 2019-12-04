var tempratureDiv=document.getElementById('tempratureDiv');
var sourcesnews=document.getElementById('source');

//getTemperature();

getSources();

function getSources(){

  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200){
          var str=this.responseText;

          console.log(str);

          var myObj=JSON.parse(str);
          var sorces=myObj.sources;
          console.log(sorces);
          for (let index = 0; index < 10; index++) {
              console.log(index);
              var id=sorces[index].id;
              var name=sorces[index].name;
              var description=sorces[index].description;
              var url= sorces[index].url;
              var country=sorces[index].country;
              var category=sorces[index].category;

              console.log(id);
              console.log(name);
              console.log(description);
              console.log(category);

              sourcesnews.innerHTML=sourcesnews.innerHTML+"<div id='sonews'>"+"<div id='id'><b>ID: </b>"+id+"</div>"+
              "<div id='name'><b>Name: </b>"+name+"</div>"
              +"<div id='description'><b>Description</b>"+description+"</div>"+
              "<div class='url'><b>Url</b>"+"<a href='url'>"+url+"</a>"+"</div>"+
              "<div class='country'><b>Country</b>"+country+"</div>"
              "<div id='category'><b>Category</b>"+category+"</div>"+
              "<br>"+"<br>"+"</div>";

          }
      }
  }

  xhr.open("GET","https://newsapi.org/v2/sources?apiKey=6cf27a4d98cb46b789d2464679a91dbe",true);
  xhr.send();
}

function getTemperature() {
  var xhttp=new XMLHttpRequest();
  var city=window.prompt("Get Temperature of city","Enter City Name");

  xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      var str=this.responseText;
      var myObj=JSON.parse(str);

      var temp=myObj.main.temp;
      temp-=273;
      temp=Math.round(temp*100)/100;
      tempratureDiv.innerHTML=city+" Temperature: "+temp+" C";

      console.log(temp);
    }
  }

  console.log(city);
  xhttp.open("GET","http://api.openweathermap.org/data/2.5/weather?appid=575ba307da237c6ce62404d1ebb3605e&q="+city,true);
  xhttp.send();
}
