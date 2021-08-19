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
        dateTime: "2021-08-04T03:17:28.808Z",
        edited: true },
    
        { username: "Zoro", 
        avatarURL: "assets/Zoro.jpg",
        messageText: "I'm great, how about you?",
        dateTime: "2021-08-04T03:17:28.808Z",
        edited: true },
    
        { username: "Sanji",
        avatarURL: "assets/Sanji.jpg",
        messageText: "Did you find that bug you were having trouble with?",
        dateTime: "2021-08-04T03:17:28.808Z",
        edited: true },
    
        { username: "Luffy", 
        avatarURL: "assets/Luffy.jpg",
        messageText: "Yes, it was a simple syntax error that I overlooked.",
        dateTime: "2021-08-04T03:17:28.808Z",
        edited: true }
      ]
    },
    {
      "channelName": "Random",
      "messages": [
        { username: "Martyn", 
        avatarURL: "assets/Luffy.jpg", 
        messageText: "This is random chat",
        dateTime: "2021-08-04T03:17:28.808Z",
        edited: true },
    
        { username: "Cononr", 
        avatarURL: "assets/Zoro.jpg",
        messageText: "lkadjg",
        dateTime: "2021-08-04T03:17:28.808Z",
        edited: true },
    
        { username: "Taylor",
        avatarURL: "assets/Sanji.jpg",
        messageText: "ahqwers",
        dateTime: "2021-08-04T03:17:28.808Z",
        edited: true },
    
      ]
    }
  ]

  getMessages(): Message[] {
    return USER_MESSAGES;
  }

  constructor() { }
}
