import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatListComponent } from './chat-list/chat-list.component';


const routes: Routes = [
  {
    path: '',
    component: ChatListComponent
  },
  {
    path: ':id',
    component: ChatViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
