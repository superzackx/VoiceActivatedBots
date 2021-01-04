const Bot = require("./bot.js");
class HelloBot extends Bot {
    constructor(SpeechRecognition, SpeechRecognitionEvent) {
        this.SpeechRecognition = SpeechRecognition;
        this.SpeechRecognitionEvent = SpeechRecognitionEvent;
        this.recognition = new SpeechRecognition();
    }
    async run() {
        await super.run();
        recognition.onresult = function(event) {
            const msg = event.results[0][0].transcript;
            const command = msg.toLowerCase();
            // custom parameters which are not in the bot class!
            if (command.includes("hello")) window.speechSynthesis.speak("Hi!");
            // feel free to create extra variables too!
        }
    }
}
