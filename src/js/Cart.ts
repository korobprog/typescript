import Movie from "./Move";

export default class Cart {
  private items: Movie[] = [];

  public addItem(item: Movie): void {
    this.items.push(item);
  }

  public removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  public getTotalCost(): number {
    return this.items.reduce((total, item) => total + item.cost, 0);
  }

  public getTotalCostWithDiscount(discount: number): number {
    return this.items.reduce(
      (total, item) => total + item.cost - item.cost * discount,
      0
    );
  }

  public getItems(): Movie[] {
    return this.items;
  }
}
