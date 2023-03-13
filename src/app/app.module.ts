import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotContainerComponent } from './chatbot-container/chatbot-container.component';
import { TextBubbleComponent } from './text-bubble/text-bubble.component';
import { MainInterceptor } from './http-interceptor';

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
