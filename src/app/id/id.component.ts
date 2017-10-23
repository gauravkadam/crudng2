import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { environment } from '../../environments/environment'

@Component({
  selector: 'id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  userData:any = '';
  constructor() { }

  @Input()
  user:any;

  ngOnInit() {
  }

  ngOnChanges(change){
    if(change && change.user.currentValue){
      this.userData = change.user.currentValue;
    }
  }

}
