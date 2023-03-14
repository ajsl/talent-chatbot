import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chatbot-container',
  templateUrl: './chatbot-container.component.html',
  styleUrls: ['./chatbot-container.component.scss']
})
export class ChatbotContainerComponent implements OnInit {

  showSpinner = false;
  currentUserId = 1;
  isLoaded = false;
  currentUser: user | undefined;
  @ViewChild('scroll', { static: true }) scroll: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    const routeParam = this.route.snapshot.paramMap.get('user');
    if (routeParam) {
      this.currentUserId = +routeParam;
      this.apiService.getUser(this.currentUserId).subscribe(
        (response) => {
          console.log(response)
          this.currentUser = {
            displayName: response.data[0].name,
            id: response.data[0].id,
            imageUrl: response.data[0].image_url
          }
          this.isLoaded = true;
          console.log(this.currentUser);
        }
      )
    }
    this.textBubbles.push({
      direction: 'inbound',
      text: "Hi, I'm AquentBot, how can I help you?" ,
      timestamp: new Date()
    })
  }

  chatForm = new FormGroup({
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(256),
      Validators.minLength(1)
    ])
  });
  textBubbles: textBubble[] = [];
  

  ngOnInit(): void {
    // this.textBubbles = chatGenerator();
    this.apiService.getMessages(this.currentUserId).subscribe(
      (response) => {
        console.log(response);
        response.data.forEach((message: { direction: any; message: any; date: string | number | Date; }) => {
          this.textBubbles.push({
            direction: message.direction,
            text: message.message,
            timestamp: new Date(message.date)
          })
        }); 
      }
    )
  }

  onSubmit() {
    console.log(this.chatForm);
    this.showSpinner = true;
    const chatContainer = document.getElementById('chatContainer');
    const question = this.chatForm.value.message ?? "";
    if(this.chatForm.valid) {
      this.textBubbles.push({
        direction: 'outbound',
        text: this.chatForm.value.message ?? "" ,
        timestamp: new Date()
      })
      setTimeout(() => {
        chatContainer!.scrollTo(0, chatContainer!.scrollHeight);
      }, 0);
    }
      this.chatForm.reset();
      this.apiService.getResponse(question).subscribe(
        (response) => {
          console.log(response);
          this.textBubbles.push({
            direction: 'inbound',
            text: response ,
            timestamp: new Date()
          })
          setTimeout(() => {
            chatContainer!.scrollTo(0, chatContainer!.scrollHeight);
          }, 0);
          this.showSpinner = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}


// let chatGenerator = () => {
//   const messages: textBubble[] = [];
//     for (let i = 0; i < 15; i++) {
//       const direction = i % 2 === 0 ? "inbound" : "outbound";
//       const text = generateRandomText(256);
//       const timestamp = generateRandomDate(new Date("2021-01-01"), new Date("2021-12-31"));
//       messages.push({ direction, text, timestamp });
//     }
//   return messages; 
//   }

//   function generateRandomText(length: number) {
//     const characters = "abcdefghijklmnopqrstuvwxyz";
//     let result = "";
//     let wordLength = 0;
//     const maxCharecters = Math.random() * 256;
//     while (result.length < length - maxCharecters) {
//       if (wordLength === 0 || Math.random() < 0.3) {
//         if (result.length > 0) {
//           result += " ";
//         }
//         wordLength = Math.floor(Math.random() * (length - result.length) * 0.4) + 1;
//       }
//       result += characters.charAt(Math.floor(Math.random() * characters.length));
//       wordLength--;
//     }
//     return result;
//   }

//   function generateRandomDate(start: Date, end: Date) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   }