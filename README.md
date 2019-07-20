# Welcome to Bamazon <img src="https://github.com/jldueyusa/scraper/blob/master/public/assets/newspaper.png" width="150" height="100"># liri-node-app
It's like Siri...but not
### Created by: Jennifer Duey

# About Liri
LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that understands specific instructions written in the terminal and returns results from an API. The user has the option of using the four commands (listed below) aggregated with specific parameters correlated with each command. The commands used in this app are:
-	concert-this
-	spotify-this-song
-	movie-this
-	do-what-it-says

# Instructions for the Liri App

View a play by play instructional video by clicking the link below

[Click Here](https://drive.google.com/file/d/1Mpz2VLzLgLR7AjWp1vFDwfnoMIW8NHKm/view)

1. In order to run Liri you have to use the terminal. You can do this by opening the terminal on a Mac, Bash on a PC, or if in VS right click on the file and select 'open in terminal' 
2. Inside the terminal, navigate to the liri.js file 
3. Enter any one of the commands exactly as it is written above

**Example 1**
The output for the concert-this command will use the Bands in Town API to display where the next concert is and when. You must first navigate to the folder from the terminal, add the command, and enter the artist or groups name for which you would like to see using the following code:

node liri.js concert-this 'artist name' 

Once you hit enter, your output would look something like this

![conert this](https://github.com/jldueyusa/liri-node-app/blob/master/images/concert_this.png)

**Example 2**
The output for the spotify-this-song command will use the Spotify API to display the artist, the song you selected, a link to that artist, and the album the song is from. Navigate to the folder from the terminal, add the command, and enter the name of the song that you would like to look up using the following code:

node liri.js spotify-this-song 'name of song' 

Once you hit enter, your output would look something like this

![spotify](https://github.com/jldueyusa/liri-node-app/blob/master/images/Spotify_this_song.png)

**Example 3**
The output for the movie-this command will use the OMDb API to display the movie name, the year it came out, the rating, country, language, and a short version of the plot. Navigate to the folder from the terminal, add the command, and enter the name of the name of the movie that you would like to look up using the following code:

node liri.js movie-this 'name of movie' 

Once you hit enter, your output would look something like this

![movie](https://github.com/jldueyusa/liri-node-app/blob/master/images/movie_this.png)

**Example 4**
The output for the do-what-it-says command will display information for a preset default from a text file. This partiticular output will use the Spotify API to show the results of the text file.

node liri.js do-what-it-says 

Once you hit enter, your output would look something like this

![do what it says](https://github.com/jldueyusa/liri-node-app/blob/master/images/do_what_it_says.png)


# Tools and Applications
- Javascript
- Node.js
- Node packages
  - Axios
  - Node-Spotify-Api
  - Moment
  - DotEnv
- OMDb API
- Bands In Town

