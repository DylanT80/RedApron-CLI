//importing readline 
const readlineSync = require('readline-sync');

class Screen {
    static rl = readlineSync;

    constructor(label, options, apiFunction = null) {
        this.label = label;
        // Options to choose from
        this.options = options
        
        this.apiFunction = apiFunction;
        this.onScreen = false;
    }

    //iterating over options to display each one 
    displayOptions() {
        this.options.forEach((option, index) => {
          console.log(`${index + 1}) ${option.label}`);
        });
        //this is for the quit option
        console.log(`${this.options.length + 1}) Quit`);
    }
    
    promptUser() {
        const input = Screen.rl.question('\n\nselect an option: ');
        const option = parseInt(input, 10);
        // Quit
        if (option === this.options.length + 1) {
            this.onScreen = false;
        } else if (option > 0 && option <= this.options.length) {
            this.options[option - 1].run();
        } else {
            console.log("Invalid option, try again");
            this.promptUser();
        }
    }
    
      
    run() {
        if (this.apiFunction) {
            console.clear();
            this.apiFunction();
        } else {
            this.onScreen = true;
    
            while (this.onScreen) {
                console.clear();
                this.displayOptions();
                this.promptUser();
            }
        }
    }
}

module.exports = Screen;