import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usertasks',
  templateUrl: './usertasks.component.html',
  styleUrls: ['./usertasks.component.scss']
})
export class UsertasksComponent implements OnInit {

  constructor() { }
  @Input("tasks") task:string="";
  isActive:boolean = false
  ngOnInit(): void {
  }
  checkBox(){
    this.isActive = !this.isActive
  }
}
