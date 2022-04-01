import { Injectable } from '@angular/core';

import { Message } from './message';
import { USER_MESSAGES } from './mock-messages';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  dataArray = [
    {
      "channelName": "General",
      "messages": [
        { username: "Luffy", 
        avatarURL: "assets/Luffy.jpg", 
        messageText: "Hello, how are you?",
        dateTime: "2021-08-04T03:17:20.808Z",
        edited: true },
    
        { username: "Zoro", 
        avatarURL: "assets/Zoro.jpg",
        messageText: "I'm great, how about you?",
        dateTime: "2021-08-04T03:17:50.808Z",
        edited: true },
    
        { username: "Sanji",
        avatarURL: "assets/Sanji.jpg",
        messageText: "Did you find that bug you were having trouble with?",
        dateTime: "2021-08-04T03:18:28.808Z",
        edited: true },
    
        { username: "Luffy", 
        avatarURL: "assets/Luffy.jpg",
        messageText: "Yes, it was a simple syntax error that I overlooked.",
        dateTime: "2021-08-04T03:19:28.808Z",
        edited: true }
      ]
    },
    {
      "channelName": "Random",
      "messages": [
        { username: "Martyn", 
        avatarURL: "assets/Luffy.jpg", 
        messageText: "This is random chat",
        dateTime: "2021-08-03T03:17:22.808Z",
        edited: true },
    
        { username: "Cononr", 
        avatarURL: "assets/Zoro.jpg",
        messageText: "lkadjg",
        dateTime: "2021-08-04T03:17:35.808Z",
        edited: true },
    
        { username: "Taylor",
        avatarURL: "assets/Sanji.jpg",
        messageText: "ahqwers",
        dateTime: "2021-08-10T03:17:40.808Z",
        edited: true },
    
      ]
    },
    {
      "channelName": "Meetings",
      "messages": [
        { username: "Martyn", 
        avatarURL: "assets/Luffy.jpg", 
        messageText: "This a chat for meetings",
        dateTime: "2021-08-04T03:17:28.808Z",
        edited: true },
    
        { username: "Cononr", 
        avatarURL: "assets/Zoro.jpg",
        messageText: "What time can we meet?",
        dateTime: "2021-08-05T03:18:28.808Z",
        edited: true },
    
        { username: "Taylor",
        avatarURL: "assets/Sanji.jpg",
        messageText: "Anytime works for me.",
        dateTime: "2021-08-05T03:19:28.808Z",
        edited: true },
    
      ]
    }
  ]

  getMessages(): Message[] {
    return USER_MESSAGES;
  }

  constructor() { }
}
