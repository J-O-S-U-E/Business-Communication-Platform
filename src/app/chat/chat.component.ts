import { Component, OnInit } from '@angular/core';

import { Message } from '../message';

import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  currentUsername: string = "Default Username";
  currentUserAvatarURL: string = "../assets/Luffy.jpg" //not working with default picture
  currentIsEdited: boolean = false;

  currentDate = Date.now();

  user_messages: Message[] = [];

  sendMsg(tempMsg: Message) {
    if(tempMsg) {
      this.user_messages.push(tempMsg)
    }
  }
  
  getMessagesChat(): void {
    this.user_messages = this.dataRetrievalService.getMessages();
  }

  constructor(private dataRetrievalService: UserDataService) {}

  ngOnInit(): void {
    this.getMessagesChat();
  }

}