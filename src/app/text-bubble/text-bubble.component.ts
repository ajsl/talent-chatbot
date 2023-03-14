import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-bubble',
  templateUrl: './text-bubble.component.html',
  styleUrls: ['./text-bubble.component.scss']
})
export class TextBubbleComponent implements OnInit {

  @Input() bubble: textBubble | undefined;
  @Input() currentUser: user | undefined;
  text: string = ""
  containerClass: string = ""
  displayName = "";
  imageUrl = "";
  isInbound = false;

  // user: user = {id: 1, displayName: "Joe Blogs"}

  bubbleClass: string = ""
  ngOnInit(): void {
    console.log(this.currentUser);
    if(this.bubble) {
      this.isInbound = this.bubble.direction === 'inbound';
      this.text = this.bubble.text;
      this.containerClass = this.bubble.direction;
      this.bubbleClass = this.isInbound ? 'alert-primary' : 'alert-warning';
      this.displayName = this.isInbound ? "AquentBot" : this.currentUser!.displayName;
      this.imageUrl = this.isInbound ? '../../assets/robot.svg' : this.currentUser!.imageUrl;
    }
  }

}
