import { Component } from '@angular/core';
import{CdkDragDrop,moveItemInArray,transferArrayItem} from"@angular/cdk/drag-drop";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viswa';

  numbers1=[
    {name: "one"},
    {name: "two"},
    {name: "three"},
    {name: "four"},

  ]
  numbers2=[
    {name:"five"},
    {name:"six"},
    {name:"seven"},
    {name:"eight"},
  ]

  opened=false;
  currentRate : number = 0;
}
