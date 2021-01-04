class Bot {
    constructor(SpeechRecognition, SpeechRecognitionEvent) {
        this.SpeechRecognition = SpeechRecognition;
        this.SpeechRecognitionEvent = SpeechRecognitionEvent;
        this.recognition = new SpeechRecognition();
    }
    start() {
        return this.recognition.start();
    }
    speak(query) { 
        speakNow.voice = voices[0]
        const speakNow = new SpeechSynthesisUtterance();
        speakNow.text = query
        window.speechSynthesis.speak(speakNow);
    }
    async run()
    {
        recognition.onresult = function(event) {
            const msg = event.results[0][0].transcript;
            const command = msg.toLowerCase();
            if(command.includes("facebook")){
                var Facebookmsg = new SpeechSynthesisUtterance();
                Facebookmsg.text = "Absolutely Sir, opening Facebook now.";
                window.speechSynthesis.speak(Facebookmsg);
                window.open("https://facebook.com")
            } else if(command.includes("whatsapp")){
                var Whatsappmsg = new SpeechSynthesisUtterance();
                Whatsappmsg.text = "Here's Whatsapp Web";
                window.speechSynthesis.speak(Whatsappmsg);
                window.open("https://web.whatsapp.com")
            } else if(command.includes("instagram")){
                var InstaMessage = new SpeechSynthesisUtterance();
                InstaMessage.text = "Opening Instagram";
                window.speechSynthesis.speak(InstaMessage);
                window.open("https://instagram.com")
            } else if(command.includes("joke")){
                const jokes = ["Never talk to Pi. It'll go on forever." , "Maths teacher: What is a line? A genius answered : A line is a dot, going for a walk." , "Where do sheep take a bath? In a baaaa-th tub." , "There's a fine line between a numerator and a denominator... and you can't cross it." , "What do you get when you cross a stream and a brook? Wet feet."];
                const randJoke = jokes[Math.floor(Math.random() * jokes.length)];
                const JokeMsg = new SpeechSynthesisUtterance();
                JokeMsg.text = randJoke;
                window.speechSynthesis.speak(JokeMsg);
            }
            recognition.onspeechend = function() {
                recognition.stop();
            }
            recognition.onnomatch = function(event) {
                window.speechSynthesis.speak(fallback);
            }
            recognition.onerror = function(event) {
                console.error(event.error)
            }
    }
}
