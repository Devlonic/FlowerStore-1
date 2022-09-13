import { FlowerBundle } from './../models/FlowerBundle';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower-bundle',
  templateUrl: './flower-bundle.component.html',
  styleUrls: ['./flower-bundle.component.scss']
})
export class FlowerBundleComponent implements OnInit {
  @Input() data: FlowerBundle | undefined; 
  constructor() { }

  ngOnInit(): void {
  }

}
