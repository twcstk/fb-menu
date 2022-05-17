import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fb-menu';
  menuElements: { type: string, name: string, content: string }[] = [ {
    type: "Food",
    name: "Test",
    content: "Some content"
  }];
  newMenuName = '';
  newMenuContent = '';

  constructor() {

  }

  onAddFood() {
    this.menuElements.push({
      type: 'Food',
      name: this.newMenuName,
      content: this.newMenuContent
    });
  }

  onAddBeverage() {
    this.menuElements.push({
      type: 'Beverage',
      name: this.newMenuName,
      content: this.newMenuContent
    });
  }





}
