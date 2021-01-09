class Bot {
    constructor(SpeechRecognition = false, SpeechRecognitionEvent = false) {
        if (SpeechRecognition && SpeechRecognitionEvent) {
            this.SpeechRecognition = SpeechRecognition;
            this.SpeechRecognitionEvent = SpeechRecognitionEvent;
            this.recognition = new SpeechRecognition();
            return true; 
        }
        if (!SpeechRecognition) this.SpeechRecognition = webkitSpeechRecognition;
        if (!SpeechRecognitionEvent) this.SpeechRecognitionEvent = webkitSpeechRecognitionEvent;
        //create recognition
        this.recognition = new SpeechRecognition();
        this.message = new SpeechSynthesisUtterance();
        //return true
        return true; 
    }
    // getters 
    getRecognition() {
        //return the recognition
        return this.recognition; 
    }
    //return arguments as an array!
    getArgs() {return this.msg, this.command;}
    getSpeechRecognition() 
    {return this.SpeechRecognition;}
    getSpeechRecognitionEvent() {return this.SpeechRecognitionEvent; }
    getAllArgs() {
        // get args in local scope
        const SpeechRecognition = this.SpeechRecognition; 
        const SpeechRecognitionEvent = this.SpeechRecognitionEvent; 
        const recognition = this.recognition; 
        const msg = this.msg; 
        const command = this.command; 
        //return new array of elements!
        return [ 
            SpeechRecognition, SpeechRecognitionEvent, 
            recognition, msg, command
        ]; 
    }

    //trigger
    async newCommand(trigger, response){
        const args = this.getArgs();
        const command = args[1]; 
        if(command.includes(trigger)){
            response(); 
        }
    }
    //returns a promise RIP
    async newFalseCommand(trigger, response) {
        const args = this.getArgs();
        const command = args[1]; 
        if (!command.includes(trigger)) response()
    }

    //run method
    async run()
    {
        recognition.onresult = function(event) {
            this.msg = event.results[0][0].transcript;
            this.command = msg.toLowerCase();
            //get msg and command
            const msg = this.msg;
            const command = this.command;
            //function inside the method activated
            await newCommand("hello" , async() => {
                await window.open("hello.com") // should work well 
            }) 
            //take in events
                    
            recognition.onspeechend = function({ props }) {
                await recognition.stop();
            }
            recognition.onnomatch = function(event) {
                await window.speechSynthesis.speak(fallback);
            }
            recognition.onerror = function(event) {
                console.error(event.error)
            }
        }
    }
    async returnValidResponse(query)
    {
        const msg, command = this.getArgs(); 
        if (command.includes(query)) {
            //get the message!
            let message = new SpeechSynthesisUtterance();
            //have the text in context with the query
            message.text = `Absolutely, opening ${query} now!`
        }
    }

    async start() {
        //start from the recognition
        return await this.recognition.start();
    }

    async speak(query) { 
        speakNow.voice = voices[0]
        const speakNow = new SpeechSynthesisUtterance();
        speakNow.text = query
        //return the values of window.speechSynthesis
        return await window.speechSynthesis.speak(speakNow);
    }
}

// have a testing class which is just a child of the parent!
class BotUtils extends Bot {
    //code for testing
}

//normally give the bot class when being required!
export default Bot; 