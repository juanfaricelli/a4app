import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: any[];
  posts: Posts[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran ...');
  };

  ngOnInit() {
    console.log('ngOnInit ran ...');
    this.name = 'Juan';
    this.age = 30;
    this.email = 'username@domain.com';
    this.address = {
      street: 'false 1234',
      city: 'fake city',
      state: 'fake state'
    };
    this.hobbies = ['fake1', 'fake2', 'fake3', 1, 2, 3];

    this.dataService.getPosts().subscribe(posts => {
      // console.log(posts);
      this.posts = posts;
    });
  };

  onClick() {
    this.name = "Juan changed his name whyyy D:";
    this.hobbies.push("lets do somethign different");
  };

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  };

  deleteHobby(hobby) {
    this.hobbies.splice(
      this.hobbies.indexOf(hobby),
      1
    );
  };

  toggleEdit() {
    this.isEdit = !this.isEdit;
  };
};

interface Address {
  street: string,
  city: string,
  state: string
};

interface Posts {
  body: string,
  id: number,
  title: string,
  userId: number
};
