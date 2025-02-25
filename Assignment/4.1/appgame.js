new Vue({
    el: '#app',
    data: {
      numberToGuess: 0,
      userGuess: null,
      message: 'Start guessing!',
      err: false
    },
    created() {
      this.generateRandomNumber();
    },
    methods: {
      generateRandomNumber() {
        this.numberToGuess = Math.floor(Math.random() * 100) + 1;
      },
      checkGuess() {
        if (this.userGuess === null || this.userGuess < 1 || this.userGuess > 100) {
          this.err = true;
          this.message = "Number must be between 1 and 100";
        } else {
          this.err = false;
          if (parseInt(this.userGuess) === this.numberToGuess) { // ParseInt added here
            this.message = 'You got it!';
          } else if (parseInt(this.userGuess) < this.numberToGuess) { // ParseInt added here
            this.message = 'Guess higher';
          } else {
            this.message = 'Guess lower';
          }
        }
      },
      
      giveUp() {
        this.message = `The number was ${this.numberToGuess}`;
      },
      startOver() {
        this.generateRandomNumber();
        this.userGuess = null;
        this.message = 'Start guessing!';
        this.err = false;
      }
    }
  });