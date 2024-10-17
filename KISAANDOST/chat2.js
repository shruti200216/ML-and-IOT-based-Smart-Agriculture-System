// // Define the user messages and corresponding bot replies
// const userMessage = [
//     ["Hi", "hello!", "hey", "namaste"],
//     ["Bye", "See you later", "Goodbye"],
//     ["Thanks", "Thank you", "That's helpful"],
//     // Add more questions here...
//   ];
  
//   const botReply = [
//     ["Hello, thanks for visiting.", "Good to see you.", "Hi there, how can I help?", "hello"],
//     ["See you later., thanks for visiting.", "Have a nice day.", "Bye! Come back again soon."],
//     ["Happy to help!", "Any time!", "My pleasure."],
//     // Add corresponding responses here...
//   ];
  
//   // Function to get a response for a given message
//   function getResponse(message) {
//     const messageIndex = userMessage.findIndex(msgGroup => msgGroup.includes(message));
//     if (messageIndex !== -1) {
//       // If the message is found, use the corresponding response
//       const responseGroup = botReply[messageIndex];
//       const randomResponse = responseGroup[Math.floor(Math.random() * responseGroup.length)];
//       return randomResponse;
//     } else {
//       // If the message is not found, return a default response
//       return "I'm sorry, I don't understand your question.";
//     }
//   }
  
//   // Function to interact with the chatbot
//   function chat() {
//     const inputField = document.getElementById("input");
//     const outputField = document.getElementById("output");
  
//     inputField.addEventListener("keydown", function (e) {
//       if (e.code === "Enter") {
//         const userInput = inputField.value;
//         const botResponse = getResponse(userInput);
//         outputField.textContent = botResponse;
//         inputField.value = "";
//       }
//     });
//   }
  
//   // Call the chat function when the page loads
//   document.addEventListener("DOMContentLoaded", chat);
  