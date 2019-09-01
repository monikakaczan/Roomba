# Roomba

## Roomba is a robot hoover that can receive the following: 
  1. room dimensions 
  2. dirt patches coordinates 
  3. driving instructions  
  
## And outputs: 
  1. hoover's final position 
  2. amount of dirt patches cleaned 
  
 ## Tech stack: 
  `Node.js, 
   JavaScript`
   
 ## Instructions to follow in the terminal: 
 
  1. Clone this repo: <br> 
  ```
  git clone git@github.com:monikakaczan/Roomba.git
  ```
  2. Change directory to Roomba
  ``` 
  cd Roomba
  ``` 
  3. Installation : <br>
  ``` 
  npm install
  ```
  4. Testing: <br> 
  ```
  npm test 
  ``` 
  5. Check the final position of the hoover in command line: <br> 
  ``` 
  node app.js
  ``` 
  
  INPUT (input.txt): 
  ``` 
  5 5
  1 2
  1 0
  2 2
  2 3
  NNESEESWNWW
  ```
  <br>
   ● the first line holds the room dimensions (X Y), separated by a single space (all
     coordinates will be presented in this format) <br>
   ● the second line holds the hoover position <br>
   ● subsequent lines contain the zero or more positions of patches of dirt (one per line) <br>
   ● the next line then always contains the driving instructions (at least one) <br> 
   
   
  OUTPUT (node app.js): 
  ```
  1 3 
  1
  ```
  ● displays the X and Y coordinates marking the position of the hoover after processing all commands <br>
  ● the second line of the program outputs the number of patches of dirt the robot cleaned up.
