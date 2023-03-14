import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotContainerComponent } from './chatbot-container/chatbot-container.component';

const routes: Routes = [
  { path: ':user', component: ChatbotContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
