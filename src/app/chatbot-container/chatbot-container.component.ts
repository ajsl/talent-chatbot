import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot-container',
  templateUrl: './chatbot-container.component.html',
  styleUrls: ['./chatbot-container.component.scss']
})
export class ChatbotContainerComponent implements OnInit {

  constructor() { }

  textBubbles: textBubble[] = [];

  ngOnInit(): void {

    this.textBubbles = chatGenerator();
  }

}


let chatGenerator = () => {
  const messages: textBubble[] = [];
    for (let i = 0; i < 15; i++) {
      const direction = i % 2 === 0 ? "inbound" : "outbound";
      const text = generateRandomText(100);
      const timestamp = generateRandomDate(new Date("2021-01-01"), new Date("2021-12-31"));
      messages.push({ direction, text, timestamp });
    }
  return messages; 
  }

  function generateRandomText(length: number) {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let wordLength = 0;
    while (result.length < length) {
      if (wordLength === 0 || Math.random() < 0.3) {
        if (result.length > 0) {
          result += " ";
        }
        wordLength = Math.floor(Math.random() * (length - result.length) * 0.4) + 1;
      }
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      wordLength--;
    }
    return result;
  }

  function generateRandomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }