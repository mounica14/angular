import { Component, OnInit,Input } from '@angular/core';
import { Chocolate } from '../Chocolate';
@Component({
  selector: 'app-chocolate-detail',
  templateUrl: './chocolate-detail.component.html',
  styleUrls: ['./chocolate-detail.component.css']
})
export class ChocolateDetailComponent implements OnInit {

  @Input() chocolate : Chocolate;

  constructor() { }

  ngOnInit() {
  }

}
