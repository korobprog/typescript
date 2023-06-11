import Cart from "../Cart";
import Movie from "../Move";

describe("Cart", () => {
  let cart: Cart;
  let items: Movie[];

  beforeEach(() => {
    cart = new Cart();
    items = [
      new Movie(1, 2021, "USA", "The best movie ever", "Action", 120, 10),
      new Movie(2, 2020, "UK", "The second best movie ever", "Comedy", 90, 15),
      new Movie(
        3,
        2019,
        "Japan",
        "The third best movie ever",
        "Drama",
        150,
        20
      ),
    ];
    items.forEach((item) => cart.addItem(item));
  });

  it("should calculate total cost", () => {
    expect(cart.getTotalCost()).toBe(45);
  });

  it("should calculate total cost with discount", () => {
    expect(cart.getTotalCostWithDiscount(0.1)).toBe(40.5);
  });

  it("should remove item by id", () => {
    cart.removeItem(2);
    expect(cart.getItems()).toHaveLength(2);
    expect(cart.getItems()[1].id).toBe(3);
  });
});
