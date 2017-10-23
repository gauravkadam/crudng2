import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data:any;
  selectedUser:any = '';

  constructor(){
  }


  ngOnInit(){
    this.data = environment.data;
  }

  onSelect(data){
    console.log(data);
    this.selectedUser = data;
  }

  deleteUser(data){
    console.log(data);
    delete this.data[data];
  }

}
