import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotContainerComponent } from './chatbot-container/chatbot-container.component';
import { TextBubbleComponent } from './text-bubble/text-bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotContainerComponent,
    TextBubbleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
