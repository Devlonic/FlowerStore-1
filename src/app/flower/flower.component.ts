import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flower } from '../models/Flower';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss']
})
export class FlowerComponent implements OnInit {
  @Input() data: Flower | undefined;
  @Output() select: EventEmitter<Flower> = new EventEmitter();
  
  ngOnInit(): void {
  }

  onClick() {
    this.select.emit(this.data);
  }

}
