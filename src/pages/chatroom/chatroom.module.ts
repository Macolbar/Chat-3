import { SortPipe } from './../../../src/pipes/sort/sort';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatroomPage } from './chatroom';



@NgModule({
  declarations: [
    ChatroomPage,
    SortPipe
  ],
  imports: [
    IonicPageModule.forChild(ChatroomPage),
  ],
})
export class ChatroomPageModule {}
