import { FlowerBundle } from './../models/FlowerBundle';
import { FlowerStore } from './../models/FlowerStore';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flower-store',
  templateUrl: './flower-store.component.html',
  styleUrls: ['./flower-store.component.scss'],
})
export class FlowerStoreComponent implements OnInit {
  data: FlowerStore = new FlowerStore();
  @Output() bundleSell: EventEmitter<FlowerBundle> =
    new EventEmitter<FlowerBundle>();

  constructor() {}

  ngOnInit(): void {}

  onSellButtonClick(
    roses: number,
    daisys: number,
    tulips: number,
    name: string
  ) {
    this.bundleSell.emit(this.data.sell(roses, daisys, tulips, name));
  }
  onSellSequenceButtonClick(
    roses: number,
    daisys: number,
    tulips: number,
    name: string
  ) {
    this.bundleSell.emit(this.data.sellSequence(roses, daisys, tulips, name));
  }

  parseNumber(str: string): number {
    return parseInt(str);
  }
}
