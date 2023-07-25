import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class CardComponent {
  todo = [
    { title: 'Gowtham Shanmugam', content: 'EMBARCKLE', rating: 4, tempRating: 0 },
    { title: 'Ankur Srivastava', content: 'InTimeTec', rating: 3, tempRating: 0 },
    { title: 'Vignesh R', content: 'ABC College', rating: 5, tempRating: 0 },
    { title: 'Sanjay R', content: 'Data Service', rating: 5, tempRating: 0 },
    { title: 'Abishek Kumar', content: 'Coding Technologies', rating: 5, tempRating: 0 },
    { title: 'Santhosh', content: 'Arts and science', rating: 5, tempRating: 0 },
    { title: 'Vikranth', content: 'IIT', rating: 5, tempRating: 0 },
  ];

  inProgress = [
    { title: 'Yoga S B', content: 'Coding Technologies', rating: 2, tempRating: 0 },
    { title: 'Vasudevan', content: 'RRR Institute', rating: 2, tempRating: 0 },
    { title: 'Sowndeep', content: 'ABC Technologies', rating: 2, tempRating: 0 },
    { title: 'Pradeep', content: 'IIT', rating: 2, tempRating: 0 },
    { title: 'Gokul Krishna', content: 'SS Academy', rating: 2, tempRating: 0 },
    { title: 'Ramesh Yadav', content: 'PQ Academy', rating: 1, tempRating: 0 },
  ];

  review = [
    { title: 'Suresh Kumar', content: 'Linear Institute', rating: 3, tempRating: 0 },
    { title: 'Rajat Tiwari', content: 'RRR Institute', rating: 4, tempRating: 0 },
    { title: 'Kishore', content: 'ARK University', rating: 4, tempRating: 0 },
    { title: 'Madhusoodhan', content: 'Tech Park', rating: 4, tempRating: 0 },
  ];

  done = [
    { title: 'Murugesan', content: 'VSP Technologies', rating: 5, tempRating: 0 },
    { title: 'Hema Chandra', content: 'KVB Technologies', rating: 2, tempRating: 0 },
  ];

  drop(event: CdkDragDrop<{ title: string; content: string; rating: number; }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onStarHover(event: MouseEvent, item: any) {
    const starIndex = Array.from((<HTMLElement>event.currentTarget).children).indexOf(<HTMLElement>event.target);
    item.tempRating = starIndex + 1;
  }

  onStarClick(event: MouseEvent, item: any) {
    const starIndex = Array.from((<HTMLElement>event.currentTarget).children).indexOf(<HTMLElement>event.target);
    item.rating = starIndex + 1;
    delete item.tempRating;
  }

  getTotalCandidateCount(): number {
    return this.todo.length + this.inProgress.length + this.review.length + this.done.length;
  }
  
}
