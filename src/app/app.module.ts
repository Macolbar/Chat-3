import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ListPage } from '../pages/list/list';
import { ChatroomPage } from '../pages/chatroom/chatroom';

var config = {
  
    apiKey: "AIzaSyBCWROaqlzbsOx06yMxkqe_CAqIoOOeo34",
    authDomain: "chatfire-base.firebaseapp.com",
    databaseURL: "https://chatfire-base.firebaseio.com",
    projectId: "chatfire-base",
    storageBucket: "",
    messagingSenderId: "266545689916"
   
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    ListPage,
    ChatroomPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    ListPage,
    ChatroomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
