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
            } else if(command.includes("hi") || command.includes("hello")){
        var HiMessage = new SpeechSynthesisUtterance();
        HiMessage.text = "Welcome back sir.";
        window.speechSynthesis.speak(HiMessage);
    } else if(command.includes("mail")){
        var MailMSG = new SpeechSynthesisUtterance();
        MailMSG.text = "Okay, I have opened your mail now.";
        window.speechSynthesis.speak(MailMSG);
        window.open("https://gmail.com")
    } else if(command.includes("google")){
        var GoogMsg = new SpeechSynthesisUtterance();
        GoogMsg.text = "Opened Google";
        window.speechSynthesis.speak(GoogMsg);
        window.open("https://google.com")
    } else if(command.includes("github")){
        var GitMSG = new SpeechSynthesisUtterance();
        GitMSG.text = "Here's github!";
        window.speechSynthesis.speak(GitMSG);
        console.log("Here's github.")
        window.open("https://github.com")
    } else if(command.includes("date")){
        var time = new Date();
        var mainTime = time.toDateString();
        var dateSpeak = new SpeechSynthesisUtterance();
        dateSpeak.text = "Today is " + mainTime 
        window.speechSynthesis.speak(dateSpeak);
    } else if(command.includes("time")){
        var time = new Date();
        var timeNow = time.toLocaleTimeString();
        var timeSpeak = new SpeechSynthesisUtterance();
        timeSpeak.text = "It's " + timeNow   
        window.speechSynthesis.speak(timeSpeak);
    } else if(command.includes("search for")){
        var split = command.split(" ")
        var seartchSpeak = new SpeechSynthesisUtterance();
        seartchSpeak.text = "Showing resultst for that on the internet."
        window.speechSynthesis.speak(seartchSpeak);
        window.open("https://google.com/search?q=" + split[2])
    } else if(command.includes("discord")){
        speak("Here's discord, sir.")
        window.open("https://www.discord.com/app")
    } else if(command.includes("npm")){
        speak("Here's npmjs")
        window.open("https://npmjs.com")
    } else if(command.includes("repl.it")){
        speak("Opening repl.it")
        window.open("https://repl.it")
    } else{
        var fallback = new SpeechSynthesisUtterance();
        fallback.text = "I don't understand that";
        window.speechSynthesis.speak(fallback);
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
