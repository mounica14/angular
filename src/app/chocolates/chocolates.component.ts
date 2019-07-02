import { Component, OnInit } from '@angular/core';
import { Chocolate } from '../Chocolate';
import {CHOCOLATES} from '../mock-chocolates';

@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})

  
  export class ChocolatesComponent implements OnInit {

    chocolates = CHOCOLATES;
    selectedChocolate : Chocolate;

   constructor() { }
  
  
  ngOnInit() {
  }

  onSelect(chocolate: Chocolate): void {
    this.selectedChocolate = chocolate;
  }

}
