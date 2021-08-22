import { Component, OnInit } from '@angular/core';
import { Message } from '../message';

import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  currentUsername: string = "Default Username";
  currentUserAvatarURL: string = "../assets/Luffy.jpg" //not working with default picture
  currentIsEdited: boolean = false;

  currentDate = Date.now();

  displayMessages: any[] = [];

  constructor(public dataService: UserDataService) { }

  selectedChannel(channelIndex: number) {
    const tempData = this.dataService.dataArray; //right now accessing array directly. might want to createa a function that returns the array instead.
    this.displayMessages = tempData[channelIndex].messages;
  }

  ngOnInit(): void {
  }

  saveMsg(tmpMsg: Message) {
    this.displayMessages.push(tmpMsg)
  }

}
