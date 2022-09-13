export abstract class Flower {
  name: string;
  image: string = 'assets/icons/rose.png';
  backgroundColor: string;
  price: number;

  /**
   *
   */
  constructor(name: string, image: string, color: string, price: number) {
    this.backgroundColor = color;
    this.image = image;
    this.name = name;
    this.price = price;
  }
}
