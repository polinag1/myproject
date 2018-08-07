var articles=[
    {
        title:'Article 1',
        link:'blog.html'
    },
    
    {
        title:'Article 3',
        link:'margarita.html'
    },
    {
        title:'Article 4',
        link:'pinacolada.html'
    },
    {
        title:'Article 5',
        link:'krovavmeri.html'
    },
    {
        title:'Article 6',
        link:'zombi.html'
    },
    {
        title:'Article 7',
        link:'b52.html'
    },
    {
        title:'Article 8',
        link:'mohito.html'
    },
]
var blog='<ul>',
     amountOfArticles=articles.length

for(var article=0;article<amountOfArticles;article++){
    blog+=`
    <li>
         <a href="articles/${articles[article].link}" class="article">
             <h3>${articles[article].title}<h3>
         </a>
     </li>`
}

blog+='</ul>'

document.getElementById('root').innerHTML = blog;