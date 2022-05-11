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
        { username: "Michael Scott", 
        avatarURL: "assets/images/Michael-Scott.png", 
        messageText: "Dwight did you finish the customer reports?",
        dateTime: "2022-05-10T23:17:20.808Z",
        edited: true },
    
        { username: "Dwight Schrute", 
        avatarURL: "assets/images/Dwight-Schrute.png",
        messageText: "No sorry, I thought Kevin was doing them.",
        dateTime: "2022-05-10T23:17:50.808Z",
        edited: true },
    
        { username: "Kevin Malone",
        avatarURL: "assets/images/Kevin-Malone.png",
        messageText: "I forgot.",
        dateTime: "2022-05-10T23:18:28.808Z",
        edited: true },
    
        { username: "Stanley Hudson", 
        avatarURL: "assets/images/Stanley-Hudson.png",
        messageText: "I knew Kevin would forget so I did it ahead of time.",
        dateTime: "2022-05-10T23:19:28.808Z",
        edited: true }
      ]
    },
    {
      "channelName": "Random",
      "messages": [
        { username: "Michael Scott", 
        avatarURL: "assets/images/Michael-Scott.png", 
        messageText: "This is random chat for random conversations.",
        dateTime: "2022-05-09T21:15:20.808Z",
        edited: true },
    
        { username: "Dwight Schrute", 
        avatarURL: "assets/images/Dwight-Schrute.png",
        messageText: "Beets. Battlestar Galactica.",
        dateTime: "2022-05-09T21:15:50.808Z",
        edited: true }
      ]
    },
    {
      "channelName": "Meetings",
      "messages": [
        { username: "Michael Scott", 
        avatarURL: "assets/images/Michael-Scott.png", 
        messageText: "Conference room in 10 minutes.",
        dateTime: "2022-05-10T22:15:22.808Z",
        edited: true },
    
        { username: "Stanley Hudson", 
        avatarURL: "assets/images/Stanley-Hudson.png",
        messageText: "I have a customer meeting in 30 minutes.",
        dateTime: "2022-05-10T22:15:40.808Z",
        edited: true }
      ]
    }
  ]

  getMessages(): Message[] {
    return USER_MESSAGES;
  }

  constructor() { }
}
