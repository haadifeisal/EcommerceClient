import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css']
})
export class ProductPopupComponent implements OnInit {
  @Input() showMePartially: boolean;
  constructor() { }

  ngOnInit() {
  }

}
