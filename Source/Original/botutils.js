const Bot = require("./bot.js"); 
const Model = require("../Model.js"); 

export default class BotUtils extends Bot {
    constructor(SpeechRecognition = false, SpeechRecognitionEvent = false) 
    {
        const res = super(SpeechRecognition, SpeechRecognitionEvent); 
        if (!res) 
        {
            return false; 
        }
        return true; 
    }

    getRecognition() {
        return super(); 
    }

    async run() 
    {
        await super.start(); 
        super(); 
    }

}