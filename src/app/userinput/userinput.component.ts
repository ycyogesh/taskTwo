import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.scss']
})
export class UserinputComponent implements OnInit {

  taskName:string = "";
  @Output() addNewTask = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  submitTask(){
    this.addNewTask.emit(this.taskName)
    this.taskName = ""
    console.log(this.taskName);
  }
}
