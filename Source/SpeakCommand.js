function speak(query){
    speakNow.voice = voices[0]
    var speakNow = new SpeechSynthesisUtterance();
    speakNow.text = query
    window.speechSynthesis.speak(speakNow);
}

//Use this inside apps. Just a simple command.
