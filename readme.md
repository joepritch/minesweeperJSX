## Notes

I decided to clone my minesweeper game in React because I felt that it was the most interesting Angular project I made (with the exception of my group project). Though it is currently unfinished, and does not have multiple pages, I feel that it still utilizes the most of Angular's features out of all of my projects, and will require the most effort in converting to React. This also presents me with the challenge of finishing the Angular version of this project before next Friday, which I feel will give me more valuable practice in Angular and prevent me from becoming 'rusty'.

I will have to find a way to add multiple pages to this project. I'm considering adding a leaderboard page to track high scores against user inputted nicknames, this would require setting up a database. The intended end result would be something similar to the high scores of an arcade game, where any user can enter any nickname or initials. I would also need to add a way to track the users 'score'. That could be something as simple as the amount of wins a player has, but (since the end goal is to let the player define the minefield size and amount of mines) should probably be something more complex like the size of the minefield, amount of mines in the minefield, and the overall percentage or ratio of mines to empty spaces. This might sound like adding a lot of unnecessary extra work, but my goal for both versions of minesweeper are to have them fully deployed, and polished to a portfolio-worthy state.

(The angular version of this project could potentially use dynamic routing to pull information about the size of the minefield and amount of mines in the minefield from the url, just for fun.)

Page ideas:
Splash page with minefield config input
Error page

use state to define minefield
width and length properties
total cells = width * length
create a function to generate a css grid with the defined width and length of the minefield
create a function to generate divs equal to the amount of total cells
create a function that set the cell x and y value by looping through the minefield width and incrementing the minefield height by 1 


Unforeseen issues:
It seems like trying to change the class of an element in React might require the use of state.

~~Getting the current route seems more complex than I anticipated.~~
Looked at the react-router-dom documentation and discovered `location.hash`

Development Differences:

  The Angular version of this project relied on a lot of Angular-specific code such as ngFor, ngClass, and adding click functions directly into the html.
