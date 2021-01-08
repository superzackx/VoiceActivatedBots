function Speak(query){ 
    speakNow.voice = voices[0];
    const speakNow = new SpeechSynthesisUtterance();
    speakNow.text = query;
    window.speechSynthesis.speak(speakNow);
}