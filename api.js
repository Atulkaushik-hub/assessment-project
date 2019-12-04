var bitcoinNews=document.getElementById('bitcoin');

/*button.addEventListener("click",function(){
})*/

var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var str=this.responseText;

        console.log(str);

        var myObj=JSON.parse(str);
        var articles=myObj.articles;

        for (let index = 0; index < 4; index++) {
            var author=articles[index].author;
            var title=articles[index].title;
            var description=articles[index].description;
            var url= articles[index].url;
            var imgurl=articles[index].urlToImage;
            console.log(title);
            console.log(author);


            bitcoinNews.innerHTML=bitcoinNews.innerHTML+"<div id='bitcoinarticle' style='background-image:url(\""+imgurl+"\")'><div id='left'><div id='newsauthor'><b>author: </b>"+author+
            "</div>"+
            "<div><b>Title: </b>"+title+"</div>"
            +"<b>Description: </b>"+description+"<br><b>Url: </b>"+url+"</div><img id='image' src='"+imgurl+"'>"+"</div>";

        }



    }
}

xhr.open("GET","https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-04&sortBy=publishedAt&apiKey=6cf27a4d98cb46b789d2464679a91dbe",true);
xhr.send();
