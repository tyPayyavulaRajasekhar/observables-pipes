import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  search: string = '';
  users = [
    {
      name: 'Bailappa',
      degree: 'MS'
    },
    {
      name: 'Sushmitha',
      degree: 'BE'
    },
    {
      name: 'Sajid',
      degree: 'MD'
    }
  ]

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.subject.next('Rajasekhar')
  }

  onAddUser() {
    this.users.push({
      name: 'Abrar',
      degree: 'Btech'
    })
  }

}
