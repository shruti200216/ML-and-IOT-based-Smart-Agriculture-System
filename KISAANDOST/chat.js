// const userMessage = [
//     // ["Hi", "hello!", "hey" ,"namaste"],

//     // ["Bye", "See you later", "Goodbye"],

//     // ["Thanks", "Thank you", "That's helpful"],

//     // ["What hours are you open?", "What are your hours?", "When are you open?" ],

//     // ["how i can buy crops online?", "how i can buy crops from farmer?" ],

//     // ["how I can sell crops online?", "how I can sell my crops?", "best way to sell product?" , "how farmer can sell their product?"],

//     // ["Are you open today?", "When do you open today?", "What are your hours today?"],

//     // ["I need help!", "Need help!", "Help me please", "Help me", "Can you do something for me?", "Answer my question"],

//     ["which weather is suitable for cotton?", "what is temperature for cotton crop?", "cotton crop grows in which temperature?", "temprature for cotton ", "temperature require for cotton crop?"],

//     ["which condition is suitable for cotton crop?", "which condition required for cotton crop?", "condition for cotton crop", "condition suitable for cotton", "condition for more cotton crop production"],
  
//     ["which weather is suitable for wheat?", "what is temperature for wheat crop?", "wheat grows in which temperature?","temperature for wheat", "temperature require for wheat crop?"],

//     ["which condition is suitable for wheat crop?", "which condition required for wheat crop?", "condition for wheat crop", "condition suitable for wheat", "condition for more wheat crop production", "which land is suitable for wheat crop"],

//     ["which weather is suitable for bajra?", "what is temperature for bajra crop?", "bajra grows in which temperature?", "temperature for bajra", "temperature require for bajra crop?"],

//     ["which condition is suitable for bajra crop?", "which condition required for bajra crop?", "condition for bajra crop", "which land is suitable for bajra crop"],

//     ["which weather is suitable for sugercane?", "what is temperature for sugercane crop?", "sugercane grows in which temperature?","temperature for sugercane"],

//     ["which condition is suitable for sugercane crop?", "which condition required for sugercane crop?", "condition for sugercane crop","condition suitable for sugercane"],

//     ["which weather is suitable for rice?", "what is temperature for rice crop?", "rice grows in which temperature?","temperature for rice"],
  
//     ["which condition is suitable for rice crop?", "which condition required for rice crop?", "condition for rice crop","condition suitable for rice"],

//     ["which weather is suitable for groundnut?", "what is temperature for groundnut crop?", "groundnut grows in which temperature?","temperature for groundnut"],

//     ["which condition is suitable for groundnut crop?", "which condition required for groundnut crop?", "condition for groundnut crop","condition suitable for groundnut"],

//     // ["What is the market price of rice?", "How much is the cost of 10 kgs of wheat?", "What are the prices of sugarcane?"],

//     ["what is temperature for maize crop?", "maize grows in which temperature?", "temperature for maize"],

//     ["which condition is suitable for maize crop?", "which condition required for maize crop?", "condition suitable for maize", "land for maize crop"],

//     // ["Important government policies for farmer", "indian government scheme for indian farmer", "which scheme is most helpful to indian farmer"],

//     // ["what is PM kisan scheme", "PM kisan", "which are benefits of PM kisan scheme?", "how PM kisan scheme is helpful to people?"]

//   ];
//   const botReply = [
//     // ["Hello, thanks for visiting.", "Good to see you.", "Hi there, how can I help?","hello"],

//     // ["See you later., thanks for visiting.", "Have a nice day.", "Bye! Come back again soon."],

//     // ["Happy to help!", "Any time!", "My pleasure."],

//     // ["We're open every day 9am-9pm.", "Our hours are 9am-9pm every day."],

//     // ["Please visit our website https://farmer.gov.in/"],

//     // ["Please visit our website https://farmer.gov.in/"],
  
//     // ["We're open every day from 9am-9pm.", "Our hours are 9am-9pm every day."],

//     // ["i'm here to help you.", "i can help you.", "i'm here to solve your queries."],

//     ["During active growth, the ideal air temperature is 70 to 100°F (21-37°C).", "ideal air temperature is 70 to 100°F.", "21-37°C temperature is required."],
    
//     ["It require a lot of heat and plenty of sunshine.", "It prefers warm and humid climate.","This plant that needs a long frost-free period."],

//     ["The optimum growing temperature is about 25°C.", "minimum and maximum growth temperatures of 3° to 4°C and 30° to 32°C, respectively."],

//     ["it needs 12 to 15 inches (31 to 38 centimeters) of water to produce a good crop.", "it needs a lot of sunshine, especially when the grains are filling.", "it grows best when the soil pH is between 6.0 and 7.0."],

//     ["Ideal temperature for  cultivation is between 20 oC to 30 oC.", "temperature is between 20 oC to 30 oC."],

//     ["It grows well in dry and warm climate conditions", "it's drought tolerant crop which requires low annual rainfall ranging between 40 cm to 60 cm.", "i'm here to solve your queries."],

//     ["temperature is between 21°C to 27°C", "It grows well in hot and humid climate with a temperature of 21°C to 27°C "],

//     ["annual rainfall require between 75cm.", "It is a tropical as well as a subtropical crop.", "It grows well in hot and humid climate with a temperature of 21°C to 27°C"],

//     ["The average temperature required throughout the life period of the crop ranges from 21 to 37º C.", "the average temperature is between 21 to 37ºC"],

//     ["Rice crop needs a hot and humid climate.","Rice grows on a variety of soils like silts, loams and gravels.", "It is best suited to regions which have high humidity, prolonged sunshine and an assured supply of water.", "The average temperature required throughout the life period of the crop ranges from 21 to 37º C."],

//     ["It seems that plant will grow best when the mean temperature is from 21-26.5°C.", "It grows well with a temperature of 21°C to 26.5°C "],

//     // ["it require well distributed rainfall at least 50 cm during growing season", "it grows in abundance of sunshine and relatively warm temperatures."],

//     // ["please visit our application.", "please visit our website for more detail.", "i request you to please visit our website."],

//     ["A temperature of 21°C- 27°C and 50-100cm rainfall is suitable for its cultivation.", "A temperature of 21°C- 27°C is suitable for its cultivation."],

//     ["A temperature of 21°C- 27°C and 50-100cm rainfall is suitable for its cultivation.", "A 50-100cm rainfall is suitable for its cultivation.", "Alternate spells of rains and sunny weather are ideal for maize.", "It grows well in alluvial and red soils with good drainage."],

//   //   ["PM-Kisan Scheme,Pradhan Mantri Kisan Maandhan yojana,Pradhan Mantri Fasal Bima Yojana (PMFBY),Paramparagat Krishi Vikas Yojana (PKVY),etc.", "PM-Kisan Scheme,Pradhan Mantri Krishi Sinchai Yojana (PMKSY),etc.", "Pradhan Mantri Kisan Maandhan yojana, Pradhan Mantri Fasal Bima Yojana (PMFBY),etc. for more details please visit our website."],

//   //   ["Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector scheme with 100% funding from Government of India. for more details visit pmkisan.gov.in", "please visit our website pmkisan.gov.in", "i request you to please visit our website pmkisan.gov.in", "Under the Scheme an income support of Rs. 6000/- per year is provided to all farmer families across the country in three equal installments of Rs. 2000/- each every four months."]
//   // 
// ];
  
//   // const alternative = [
//   //   "Same here, dude.",
//   //   "That's cool! Go on...",
//   //   "Dude...",
//   //   "Ask something else...",
//   //   "Hey, I'm listening..."
//   // ];
  
//   const synth = window.speechSynthesis;
  
//   function voiceControl(string) {
//     let u = new SpeechSynthesisUtterance(string);
//     u.text = string;
//     u.lang = "en-IN";
//     u.volume = 1;
//     u.rate = 1;
//     u.pitch = 1;
//     synth.speak(u);
//   }

  
//   function sendMessage() {
//     const inputField = document.getElementById("input");
//     let input = inputField.value.trim();
//     input != "" && output(input);
//     inputField.value = "";
//   }
//   document.addEventListener("DOMContentLoaded", () => {
//     const inputField = document.getElementById("input");
//     inputField.addEventListener("keydown", function (e) {
//       if (e.code === "Enter") {
//         let input = inputField.value.trim();
//         input != "" && output(input);
//         inputField.value = "";
//       }
//     });
//   });
  
//   function output(input) {
//     let product;
  
//     let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
//     text = text
//       .replace(/[\W_]/g, " ")
//       .replace(/ a /g, " ")
//       .replace(/i feel /g, "")
//       .replace(/whats/g, "what is")
//       .replace(/please /g, "")
//       .replace(/ please/g, "")
//       .trim();
  
//     let comparedText = compare(userMessage, botReply, text);
  
//     product = comparedText
//       ? comparedText
//       : botReply[Math.floor(Math.random() * botReply.length)];
//     addChat(input, product);
//   }
  
//   function compare(triggerArray, replyArray, string) {
//     let item;
//     for (let x = 0; x < triggerArray.length; x++) {
//       for (let y = 0; y < replyArray.length; y++) {
//         if (triggerArray[x][y] == string) {
//           items = replyArray[x];
//           item = items[Math.floor(Math.random() * items.length)];
//         }
//       }
//     }
//     //containMessageCheck(string);
//     if (item) return item;
//     else return containMessageCheck(string);
//   }
  
//   function containMessageCheck(string) {
//     let expectedReply = [
//       [
//         "Good Bye, dude",
//         "Bye, See you!",
//         "Dude, Bye. Take care of your health in this situation."
//       ],
//       ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
//       ["Have a pleasant evening!", "Good evening too", "Evening!"],
//       ["Good morning, Have a great day!", "Morning, dude!"],
//       ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
//     ];
//     let expectedMessage = [
//       ["bye", "tc", "take care"],
//       ["night", "good night"],
//       ["evening", "good evening"],
//       ["morning", "good morning"],
//       ["noon"]
//     ];
//     let item;
//     for (let x = 0; x < expectedMessage.length; x++) {
//       if (expectedMessage[x].includes(string)) {
//         items = expectedReply[x];
//         item = items[Math.floor(Math.random() * items.length)];
//       }
//     }
//     return item;
//   }
//   function addChat(input, product) {
//     const mainDiv = document.getElementById("message-section");
//     let userDiv = document.createElement("div");
//     userDiv.id = "user";
//     userDiv.classList.add("message");
//     userDiv.innerHTML = `<span id="user-response">${input}</span>`;
//     mainDiv.appendChild(userDiv);
  
//     let botDiv = document.createElement("div");
//     botDiv.id = "bot";
//     botDiv.classList.add("message"); 
//     botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
//     mainDiv.appendChild(botDiv);
//     var scroll = document.getElementById("message-section");
//     scroll.scrollTop = scroll.scrollHeight;
//     voiceControl(product);
//   }