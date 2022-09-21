import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskTwo';
  taskList:Array<object> = []
  
  addTask(event:any){
    this.taskList.push({'taskName':event,'isActive':false})
    console.log(this.taskList);
  }
}
