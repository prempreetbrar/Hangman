# Hangman
A 1-player game of Hangman made using React.js and Material-UI that shows visuals when the user guesses incorrectly; the game can be replayed as many times as the user desires.

## **Click [*here*](https://prempreetbrar.github.io/Hangman/) to play!** Or, watch a quick gif of me playing below:

![](HangmanDemo.gif)

&nbsp;

### If you are on Windows and want to start up the project on your local machine:

1. Ensure you have **Node.js 16.13.0 and npm (any version)** or above installed by writing ```node --version``` and ```npm --version``` in the terminal; if either Node or npm are missing, [install Node.js and npm](https://nodejs.org/en/download/) (ensure you click *Windows Installer* on the LTS tab for your installation), open the .msi file and follow the steps.
<ul>
  <li><u>There will be a custom setup tab that says you can "click the icons in the tree" to change the installation. DO NOT click any of the icons; simply click next.</u></li>
  <li>There will be a screen that says "Tools for Native Modules." Ensure you check the box that says <u>"Automatically install the necessary tools."<u></li>
</ul>
  
  
2. A terminal called "Install Additional Tools for Node.js" will pop up, prompting you to ```Press any key to continue . . . ```. Continue pressing keys until you are prompted to open Powershell.

3. Powershell will open and begin installing packages; it may look like the terminal has "frozen"; this is simply the installation taking its time, DO NOT close the Powershell terminal (if it has still not finished after 20 minutes then hit the enter key to see if it will display any message, as the confirmation message may be stuck in a backlog). 

4. The Powershell terminal will eventually say ```Type ENTER to exit``` (or immediately after you pressed the enter key); type ENTER and hit the enter key.

5. Check if you have node installed by running ```node --version``` in the terminal. If not, open the .msi installation package and click "repair." Follow the steps.

6. Click on the green button on the top right that says "Code". Click download ZIP, unzip the file, right click on the *Hangman-main* folder and select *copy as path*. Open up a terminal and write

```
cd <putThePathYouCopiedHereUsingControlV (without the angle brackets)>
npm install
npm start
```
This will open up the Hangman game using your computer as a host in your default browser. (It may take up to a minute to load when starting the app up initially).

&nbsp;
    
### If you are on MacOS and want to start up the project on your local machine:
    
1. Ensure you have **Node.js 16.13.0 and npm (any version)** or above installed by writing ```node --version``` and ```npm --version``` in the terminal; if either Node or npm are missing, write ```brew --version``` in the terminal. If brew is not missing, continue to step 2. If brew is missing, first install it by writing 
    ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```
in the terminal. 
2. In the terminal, write
    
    ```
    brew update
    brew install node
    ```

3. Check if you have node and npm installed by running ```node --version``` and ```npm --version``` in the terminal. If not, repeat step 2.
    
4. Click on the green button on the top right that says "Code". Click download ZIP, right click on the *Hangman-main* folder, click *Get Info*, copy the path (the text beside *Where*): 
![image](https://user-images.githubusercontent.com/89614923/177059031-e221486f-dfcd-4d1a-b864-e04de2f3e93d.png)
    
5. Open up a terminal and write

```
cd <putThePathYouCopiedHereUsingControlV (without the angle brackets)>
npm install
npm start
```
This will open up the Hangman game using your computer as a host in your default browser. (It may take up to a minute to load when starting the app up initially).
    
&nbsp;    

### If you are on Linux and want to start up the project on your local machine:
    
1. Open up a terminal and write ```sudo apt-get install build-essential curl git m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev``` if you have a **Ubuntu** or **Debian**  based Linux distribution; write ```sudo yum groupinstall 'Development Tools' && sudo yum install curl git m4 ruby texinfo bzip2-devel curl-devel expat-devel ncurses-devel zlib-devel``` if you have a **Fedora** based Linux distribution. It will prompt you to type in Y/N, make sure you type in Y (yes to the installation).

2. Open up a terminal (or use the same one) and write ```homebrew --version```. If you are missing homebrew, write ```ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/linuxbrew/go/install)"``` to install it (if you have homebrew skip to step 3).
    
3. Open up a terminal (or use the same one) and write ```vim ~/.bashrc```. Add the following three lines of code to the file:
    
    ```
    export PATH="$HOME/.linuxbrew/bin:$PATH"
    export MANPATH="$HOME/.linuxbrew/share/man:$MANPATH"
    export INFOPATH="$HOME/.linuxbrew/share/info:$INFOPATH"
    ```
    
4. Open up a terminal (or use the same one) and write ```brew install node```. Wait for the installation to finish.

5. Open up a terminal (or use the same one) and write ```node --version``` and ```npm --version```. If either node or npm are missing, repeat steps 1-4.

6. Click on the green button on the top right that says "Code". Click download ZIP, and then unzip the *Hangman-main* folder. Open up a terminal (or use the same one) and write
    
    ```
    cd ~/<Your Username>/Downloads/Hangman-master
    npm install
    npm start
    ```

This will open up the Hangman game using your computer as a host in your default browser. (It may take up to a minute to load when starting the app up initially).
    
    
## Limitations/Design Choices

- The set of words is hard-coded; I'd like to update this to send a request to a dictionary API and drastically increase the variety of words.
- Functional components and React hooks are used, however, in the process of making this I ensured I had a deep understanding of class components (in case I am ever working with an older codebase).
- I rarely use arrow functions; I want to be as explicit as I can when possible, and only use arrow functions for callbacks. In a class component, I would use an arrow function so I don't have to explicitly bind ```this```, but this is not a concern in a functional component.
- The app itself is a single component; I'd like to update this to make the buttons their own separate component, one that takes in "activated/deactivated" props from the parent and renders itself accordingly.
- At the top of the Hangman function, there is duplication of code; the code to set the initial state and restart the game is nearly identical. I looked at a few workarounds using the useReducer hook but ultimately decided to stay with my current code because of its simplicity. As a result, I hope to use useReducer extensively in a future project.
- The app is single player; you can't play with your friends, and there isn't a topic or category to which a word pertains.
- I felt I had strong skills in Vanilla JavaScript, which is why I chose to use React.
