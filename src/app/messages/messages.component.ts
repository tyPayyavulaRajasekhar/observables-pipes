import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {

  todayDate = new Date();
  subscription: any;
  user = {
    name: 'abc',
    age: 30
  }
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.subscription = this.messageService.observable.subscribe(data => {
      // console.log('in ngOnInit', data);
    });

    this.messageService.subject.subscribe(data => {
      console.log('data from the subject', data);
    });
  }

  ngOnDestroy() {
    console.log('messages component is destroyed');
    this.subscription.unsubscribe();
  }

}
