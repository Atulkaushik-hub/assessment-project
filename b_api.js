var businessnews=document.getElementById('business');
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var str=this.responseText;

        console.log(str);

        var myObj=JSON.parse(str);
        var articles=myObj.articles;
console.log(articles);
        for (let index = 0; index < articles.length; index++) {
            var identification=articles[index].source.id;
            var name=articles[index].source.name;
            var title=articles[index].title;
            var url= articles[index].url;
            console.log(identification);
            console.log(name);
            console.log(title);
            console.log(url);

            businessnews.innerHTML=businessnews.innerHTML+"<div id='businessnews'><div id='identify'><b>ID: </b>"+identification+"</div>"+
            "<div><b>Name: </b>"+name+"</div>"
            +"<div><b>Title: </b>"+title+"</div>"+ "<div class='url'><b>Url</b>"+"<a href='url'>"+url+"</a>"+"</div>"+"<br></div>";

        }



    }
}

xhr.open("GET","https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6cf27a4d98cb46b789d2464679a91dbe",true);
xhr.send();
