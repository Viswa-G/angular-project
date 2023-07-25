import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items = ['Koushik', 'Karan', 'Kishore', 'Madhu', 'Kajal', 'Tharun Pranav', 'Rakesh', 'Vinusha', 'Vimal'];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  currentRate : number = 0;
  currentRate1 : number = 0;
  currentRate2: number = 0;
  currentRate3 : number = 0;
  currentRate4 : number = 0;
  currentRate5 : number = 0;
  currentRate6 : number = 0;
  currentRate7 : number = 0;
  currentRate8 : number = 0;

  

}
