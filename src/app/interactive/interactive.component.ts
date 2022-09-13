import { FlowerBundle } from './../models/FlowerBundle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss']
})
export class InteractiveComponent implements OnInit {
  bundles: FlowerBundle[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  newBundle(bundle: FlowerBundle) {
    this.bundles.push(bundle);
  }
}
