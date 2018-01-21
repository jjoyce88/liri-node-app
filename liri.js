require("dotenv").config();
var keys = require("./keys")

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];

if(command === "my-tweets")
{

}
else if(command === "spotify-this-song")
{

}
else if(command === "movie-this")
{

}
else if(command === "do-what-it-says")
{
	
}