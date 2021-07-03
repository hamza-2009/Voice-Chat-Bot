let mic = document.getElementById("mic");
let chataremain = document.querySelector('.chatarea-main');
let chatareouter = document.querySelector('.chatarea-outer');

const SpeechRecognition = window.SpeechRecognition ||window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usremsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usremsg}</div>`;
    chatareouter.innerHTML += output;
    return chatareouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareouter.innerHTML += output;
    return chatareouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance()
    speech.text = "Sorry couldn't get that.";
    if ((message == "hello") || (message == "hi") || (message == "hey") || (message == "what's up"))

{
    speech.text = "Hello! How are you?";
    
}

else if ((message == "how are you") || (message == "hi how are you") || (message == "hello how are you") || (message == "I am fine what about you"))
{
    speech.text = "I am fine. Thank You.";
}

else if ((message == "who are you") || (message == "what are you"))
{
    speech.text = "I am a chat bot.";
}

else if ((message == "what is your name"))
{
    speech.text = "My name is Bot.";
}

else if ((message == "what can you do") || (message == "what is your job"))
{
    speech.text = "I can tell you FIVE facts about Pakistan. You can ask like this :- 1 , 2 , 3...";
}

else if ((message == "1")  || (message == "fact one"))
{
    speech.text = "Pakistan is the 34th largest country area wise in the world.";
}

else if ((message == "2") || (message == "Tu"))
{
    speech.text = "Paistan is the 2nd largest Muslim country in the world.";
}

else if ((message == "3") || (message == "fact three"))
{
    speech.text = "It has the worlds 2nd largest peak named 'K2'.";
}

else if ((message == "4") || (message == "fact four"))
{
    speech.text = "It's population is 216.6 million (2019).";
}

else if ((message == "5") || (message == "fact five"))
{
    speech.text = "It's ful name is 'Islamic Repulic of Pakistan' (IRP).";
}
    window.speechSynthesis.speak(speech);
    chataremain.appendChild(showchatbotmsg(speech.text));}

   

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chataremain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}

mic.addEventListener("click" , function(){
    recognition.start();
    console.log("Activated");
})
