const Bot = require("../../../Original/bot.js");
const Model = require("../../../Model.js");

class Main extends Model {
    //lets pretend as if this constructor never existed 
    constructor(args) {
        super.constructor(args); 
    }
    //returns a fully fledged bot!
    getNewBot() {
        const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
        const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
        const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
        return new Bot(SpeechRecognition, SpeechRecognitionEvent).addSpeechGrammerList(SpeechGrammarList);
    }
}
export default Main; 