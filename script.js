let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    printText("A new movie is added.");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    let num = 0;
    printText("Printing all movies....");
    for (let i = 0; i < allMovies.length; i++) {
        printText(allMovies[i].toString());
        num++;
    }
    printText("");
    printText("You have " + num + " movies in total");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    printText("printing movie that has a rating higher than " + rating);
    let num = 0;
    for (let i = 0; i < allMovies.length; i++) {
        let movie  = allMovies[i];
        if (movie.rating > rating) {
            printText(movie.title + " has a rating of " + movie.rating);
            num++;
        }
    }
    printText("");
    printText("In total, there are " + num + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    printText("changing the status of the movie...");
    for (let i = 0; i < allMovies.length; i++) {
        let movie = allMovies[i];
        if (movie.title == title) {
            changeWatchedHelper(movie);
        }
    }
}

let changeWatchedHelper = (movie) => {
    if (movie.haveWatched == true) {
        movie.haveWatched = false;
    } else {
        movie.haveWatched = true;
    }
}

Movie.prototype.toString = function movieToString() {
    return this.title + ", rating of " + this.rating + ", havewatched: " +
    this.haveWatched; 
}

let printText = (text) => {
    const para = document.createElement("p");
    para.innerText = text;
    para.style.color = "#20C20E";
    para.style.textAlign = "center";
    para.style.lineHeight = "0.3";
    document.body.appendChild(para);
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
printText("----------------");
printText("running program......");
printText("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
printText("----------------");
addMovie(movie1);
printText("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
printText("----------------");

printMovies();

/*replace console.log with display on web page*/
printText("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
printText("----------------");

printMovies();
/*replace console.log with display on web page*/
printText("----------------");

highRatings(3.5);