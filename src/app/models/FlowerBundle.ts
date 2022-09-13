import { Flower } from "./Flower";

export class FlowerBundle {
    name: string = "Unnamed bundle";
    bundle: Flower[] = [];


    add(f: Flower) {
        this.bundle.push(f);
    }
}
