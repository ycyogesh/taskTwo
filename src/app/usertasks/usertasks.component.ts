import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usertasks',
  templateUrl: './usertasks.component.html',
  styleUrls: ['./usertasks.component.scss']
})
export class UsertasksComponent implements OnInit {

  constructor() { }
  @Input("tasks") task: string = "";
  isActive: boolean=false;
  ngOnInit(): void {
  }
  checkBox(event: any) {
    console.log(event.target.checked);
    if (event.target.checked == true) {
      this.isActive = true
      return;
    }
    this.isActive = false
  }
}
