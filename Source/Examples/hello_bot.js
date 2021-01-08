const Bot = require("../bot");
class HelloBot extends Bot {
    constructor(SpeechRecognition, SpeechRecognitionEvent, recognition) {
        super.constructor(SpeechRecognition, SpeechRecognitionEvent, recognition);
    }
    async run() {
        //have the same old thing
        await super.run(); 
        //and have some new stuff
    }
}

const HelloBot = new HelloBot(SpeechRecognition, SpeechRecognitionEvent, recognition);