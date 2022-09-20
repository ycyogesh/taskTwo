import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.scss']
})
export class UserinputComponent implements OnInit {

  taskName:string = "";
  taskList:Array<string> = []
  constructor() { }

  ngOnInit(): void {
  }
  submitTask(){
    this.taskList.push(this.taskName)
    console.log(this.taskName);
  }
}
