import { FlowerBundle } from './../models/FlowerBundle';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flower-bundles-list',
  templateUrl: './flower-bundles-list.component.html',
  styleUrls: ['./flower-bundles-list.component.scss']
})
export class FlowerBundlesListComponent implements OnInit {
  @Input() bundles: FlowerBundle[] | null = null;
  constructor() { }

  ngOnInit(): void {
  }

  newBundle(bundle: FlowerBundle) {

  }
}
