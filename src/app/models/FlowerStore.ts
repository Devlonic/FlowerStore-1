import { TulipFlower } from './TulipFlower';
import { DaisyFlower } from './DaisyFlower';
import { RoseFlower } from './RoseFlower';
import { FlowerBundle } from './FlowerBundle';
import { Flower } from './Flower';

export class FlowerStore {
  wallet: number = 0;

  private shuffle(array: Flower[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  sell(
    countRoses: number,
    countDaisys: number,
    countTulips: number,
    name: string
  ): FlowerBundle {
    let bundle = new FlowerBundle();
    this.addMoney(countRoses, countDaisys, countTulips);

    for (let i = 0; i < countRoses; i++) {
      bundle.add(new RoseFlower());
    }
    for (let i = 0; i < countDaisys; i++) {
      bundle.add(new DaisyFlower());
    }
    for (let i = 0; i < countTulips; i++) {
      bundle.add(new TulipFlower());
    }
    bundle.name = name;
    this.shuffle(bundle.bundle);
    return bundle;
  }
  sellSequence(
    countRoses: number,
    countDaisys: number,
    countTulips: number,
    name: string
  ): FlowerBundle {
    let bundle = new FlowerBundle();
    this.addMoney(countRoses, countDaisys, countTulips);

    while (countDaisys + countRoses + countTulips > 0) {
      if (countRoses > 0) {
        bundle.add(new RoseFlower());
        countRoses--;
      }

      if (countDaisys > 0) {
        bundle.add(new DaisyFlower());
        countDaisys--;
      }
      if (countTulips > 0) {
        bundle.add(new TulipFlower());
        countTulips--;
      }
    }
    bundle.name = name;
    return bundle;
  }

  private addMoney(
    countRoses: number,
    countDaisys: number,
    countTulips: number
  ) {
    let rose = new RoseFlower();
    let daisy = new DaisyFlower();
    let tulip = new TulipFlower();

    for (let i = 0; i < countRoses; i++) {
      this.wallet += rose.price;
    }
    for (let i = 0; i < countDaisys; i++) {
      this.wallet += daisy.price;
    }
    for (let i = 0; i < countTulips; i++) {
      this.wallet += tulip.price;
    }
  }
}
