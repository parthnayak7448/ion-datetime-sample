import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	maxDate = new Date().toISOString();
	selectedDate: string | Date | undefined;
	selectPreviousDate = new Date(2023, 0, new Date().getDate() + 3);
	currentMonth = new Date().getMonth()
	constructor() { }
	
	setDate() {
		console.log('date', this.selectedDate)
	}
	cancelDate() {
		
	}
}
