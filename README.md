# Pipes game challenge
Solved by Ricardo Trujillo the las week of December of 2021.

## Level passwords obtained (Manual only with partial asistance)
- Level 1: Password: JustWarmingUp
- Level 2: Password: DefinitelyWarm

## Known limitations
This solution is a UI for the backend commands, is manual only with some "partial asistance" by providing a different color of pipe when all ends of the pipe are connected, thus **only level 1 to 3 are available** level 3 to 4 become laggy. 

Worth to mention that I'm not expert in canvas but know how to use it and like the math involved in it's use.

![image](https://user-images.githubusercontent.com/8483985/147886000-40e6f3e8-1b95-41ae-a9a0-21834e971257.png)

## Key decisions made

1. Used an array (string) of all the characters of the pipe map, I used basic arithmetic to come up with the corresponding [x][y] coordinates. 
   ```
    export const getX = (myIndex: number, columns: number) => {
      return myIndex - Math.floor(myIndex / columns) * columns;
    };

    export const getY = (myIndex: number, columns: number) => {
      return Math.floor(myIndex / columns);
    };
   ```
2. Used custom functions to identify if a pipe is connected in all it's ends by getting the contiguous pipes, this functions were defined in a way that optimized it's use across all the validation of connection process. 
   ```
    if (pipe === "╋") {
      return (
        isPluggedLeft(x, pipes, myIndex) &&
        isPluggedRight(x, columns, pipes, myIndex) &&
        isPluggedUp(y, pipes, columns, myIndex) &&
        isPluggedDown(y, columns, pipes, myIndex)
      );
    }
    ```
    ```
    const isPluggedLeft = (x: number, pipes: string[], myIndex: number) => {
      if (isAtLeft(x)) return false;
      else {
        const atMyLeft = pipes[myIndex - 1];
        return pipesAtLeft.some((p) => p === atMyLeft);
      }
    };
    ```
    ```
    export const pipesAtLeft = ["┏", "┗", "╺", "━", "┳", "┣", "┻", "╋"];
    ```
3. Used some custom hooks, one of them for abstracting the connection to the web socket and use it in the game and access the important values and functions (methods) for playing.  
4. Used a Redux toolkit slice (less boylerplate than plain redux) for handling the state of the game.
5. Used custom types (@types) for better readability and demonstration of use.
6. Structured the solution into Pages, Components, Hooks, Utils, Redux and Types. 


### To launch the solution use `npm start` (after cloning this repo).

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

OR

Try the online deployed game by visiting [https://rictrujillo-pipe-challenge.netlify.app/](https://rictrujillo-pipe-challenge.netlify.app/).

## About Ricardo Trujillo

Learn a bit more about me by visiting my [Linkedin Profile](https://www.linkedin.com/in/rictrujillo/).

