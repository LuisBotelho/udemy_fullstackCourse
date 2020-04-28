var m1={title:"In Bruges",watched:true,rating:5};
var m2={title:"Frozen",watched:false,rating:4.5};
var m3={title:"Mad Max Fury Road",watched:true,rating:5};
var m4={title:"Les Miserables",watched:false,rating:3.5};

var movies = [m1,m2,m3,m4];

movies.forEach(printMovie)

function printMovie(movie){
    if(movie.watched){
        console.log("You have watched \"" + movie.title + "\" - " + movie.rating.toString() + " stars")
    }
    else{
        console.log("You have not watched \"" + movie.title + "\" - " + movie.rating.toString() + " stars")
    }
};