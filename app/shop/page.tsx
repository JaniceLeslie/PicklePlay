"use client";

import { useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Category = "All" | "Jerseys" | "Equipment";

type Product = {
  id: number;
  name: string;
  category: Exclude<Category, "All">;
  emoji: string;
  description: string;
  price: number;
  sizes?: string[];
  badge?: string;
  imageBackground: string;
};

type CartItem = {
  cartId: string;
  productId: number;
  name: string;
  emoji: string;
  price: number;
  size?: string;
  quantity: number;
};

const filters: Category[] = ["All", "Jerseys", "Equipment"];

const products: Product[] = [
  {
    id: 1,
    name: "PicklePlay Jersey",
    category: "Jerseys",
    emoji: "👕",
    description: "Performance jersey · Lime",
    price: 65,
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Popular",
    imageBackground: "bg-lime-50",
  },
  {
    id: 2,
    name: "PicklePlay Jersey",
    category: "Jerseys",
    emoji: "👕",
    description: "Performance jersey · Black",
    price: 65,
    sizes: ["XS", "S", "M", "L", "XL"],
    imageBackground: "bg-slate-100",
  },
  {
    id: 3,
    name: "PicklePlay Jersey",
    category: "Jerseys",
    emoji: "👕",
    description: "Performance jersey · White",
    price: 65,
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "New",
    imageBackground: "bg-blue-50",
  },
  {
    id: 4,
    name: "Training Tee",
    category: "Jerseys",
    emoji: "👕",
    description: "Lightweight training shirt",
    price: 45,
    sizes: ["XS", "S", "M", "L", "XL"],
    imageBackground: "bg-orange-50",
  },
  {
    id: 5,
    name: "Starter Paddle",
    category: "Equipment",
    emoji: "🏓",
    description: "Beginner-friendly control paddle",
    price: 89,
    badge: "Beginner",
    imageBackground: "bg-rose-50",
  },
  {
    id: 6,
    name: "Control Pro Paddle",
    category: "Equipment",
    emoji: "🏓",
    description: "Precision paddle for developing players",
    price: 149,
    badge: "Best Seller",
    imageBackground: "bg-violet-50",
  },
  {
    id: 7,
    name: "Power Carbon Paddle",
    category: "Equipment",
    emoji: "🏓",
    description: "Carbon surface for power and spin",
    price: 249,
    badge: "Premium",
    imageBackground: "bg-slate-300",
  },
  {
    id: 8,
    name: "Pickleball 3-Pack",
    category: "Equipment",
    emoji: "🟡",
    description: "Durable outdoor pickleballs",
    price: 18,
    imageBackground: "bg-amber-50",
  },
  {
    id: 9,
    name: "Court Bag",
    category: "Equipment",
    emoji: "🎒",
    description: "Paddle and equipment carry bag",
    price: 75,
    imageBackground: "bg-pink-50",
  },
  {
    id: 10,
    name: "Grip Tape 3-Pack",
    category: "Equipment",
    emoji: "🎯",
    description: "Comfort grip replacement pack",
    price: 12,
    imageBackground: "bg-sky-50",
  },
];

export default function ShopPage() {
  const [selectedFilter, setSelectedFilter] = useState<Category>("All");

  const [selectedSizes, setSelectedSizes] = useState<
    Record<number, string>
  >({});

  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts =
    selectedFilter === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedFilter,
        );

  const totalCartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleSizeSelect = (
    productId: number,
    size: string,
  ) => {
    setSelectedSizes((currentSizes) => ({
      ...currentSizes,
      [productId]: size,
    }));
  };

  const handleAddToCart = (product: Product) => {
    const selectedSize = product.sizes
      ? selectedSizes[product.id]
      : undefined;

    if (product.sizes && !selectedSize) {
      alert("Please select a size first.");
      return;
    }

    const cartId = `${product.id}-${selectedSize ?? "standard"}`;

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.cartId === cartId,
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          cartId,
          productId: product.id,
          name: product.name,
          emoji: product.emoji,
          price: product.price,
          size: selectedSize,
          quantity: 1,
        },
      ];
    });

    setShowCart(true);
  };

  const increaseQuantity = (cartId: string) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (cartId: string) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (cartId: string) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartId !== cartId),
    );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-7xl px-8 py-16">
          {/* Heading */}
          <div className="flex items-end justify-between gap-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Gear Up · Play Better
              </p>

              <h1 className="mt-2 text-6xl font-light leading-[0.95] text-slate-950">
                SHOP
                <br />
                <span className="text-lime-400">
                  PICKLEPLAY
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500">
                Official apparel, paddles, and court essentials
                designed for your next game.
              </p>
            </div>

            {/* Cart button */}
            <button
              type="button"
              onClick={() => setShowCart(true)}
              className="relative rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-slate-800"
            >
              🛒 Cart
              {totalCartItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-slate-950">
                  {totalCartItems}
                </span>
              )}
            </button>
          </div>

          {/* Filters */}
          <div className="mt-9 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                  selectedFilter === filter
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-lime-400 hover:text-slate-950"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Products */}
          <div className="mt-10 grid grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Product visual */}
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden ${product.imageBackground}`}
                >
                  {product.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                      {product.badge}
                    </span>
                  )}

                  <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
                    {product.emoji}
                  </span>
                </div>

                {/* Product details */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime-500">
                    {product.category}
                  </p>

                  <h2 className="mt-2 text-lg font-bold uppercase text-slate-950">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {product.description}
                  </p>

                  {/* Sizes */}
                  {product.sizes && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Select Size
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() =>
                              handleSizeSelect(
                                product.id,
                                size,
                              )
                            }
                            className={`flex h-8 min-w-8 items-center justify-center rounded-lg border px-2 text-xs font-semibold transition-colors ${
                              selectedSizes[product.id] ===
                              size
                                ? "border-lime-400 bg-lime-400 text-slate-950"
                                : "border-slate-200 text-slate-500 hover:border-lime-400"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price and add */}
                  <div className="mt-auto flex items-end justify-between pt-6">
                    <div>
                      <p className="text-xs text-slate-400">
                        Price
                      </p>

                      <p className="mt-1 text-2xl font-black text-slate-950">
                        A${product.price}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleAddToCart(product)
                      }
                      className="rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:bg-lime-500"
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Dark background */}
      {showCart && (
        <button
          type="button"
          aria-label="Close cart"
          onClick={() => setShowCart(false)}
          className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
        />
      )}

      {/* Cart drawer */}
      <aside
        className={`fixed right-0 top-0 z-[100] flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cart header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-7 py-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-500">
              Your Cart
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-950">
              {totalCartItems}{" "}
              {totalCartItems === 1 ? "item" : "items"}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowCart(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 hover:bg-slate-200"
          >
            ×
          </button>
        </div>

        {/* Cart content */}
        <div className="flex-1 overflow-y-auto p-7">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="text-6xl">🛒</div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Your cart is empty
              </h3>

              <p className="mt-2 text-slate-500">
                Add some PicklePlay gear to get started.
              </p>

              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="mt-6 rounded-full bg-lime-400 px-6 py-3 font-semibold text-slate-950 hover:bg-lime-500"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.cartId}
                  className="rounded-2xl border border-slate-200 p-4"
                >
                  <div className="flex gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-4xl">
                      {item.emoji}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-slate-950">
                            {item.name}
                          </h3>

                          {item.size && (
                            <p className="mt-1 text-sm text-slate-500">
                              Size: {item.size}
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeItem(item.cartId)
                          }
                          className="text-sm font-semibold text-rose-500 hover:text-rose-600"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-slate-200">
                          <button
                            type="button"
                            onClick={() =>
                              decreaseQuantity(item.cartId)
                            }
                            className="px-3 py-1 text-lg text-slate-600"
                          >
                            −
                          </button>

                          <span className="min-w-8 text-center font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              increaseQuantity(item.cartId)
                            }
                            className="px-3 py-1 text-lg text-slate-600"
                          >
                            +
                          </button>
                        </div>

                        <p className="font-bold text-slate-950">
                          A$
                          {(
                            item.price * item.quantity
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart footer */}
        {cart.length > 0 && (
          <div className="border-t border-slate-200 p-7">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">
                Subtotal
              </span>

              <span className="text-2xl font-black text-slate-950">
                A${cartTotal.toFixed(2)}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-400">
              Shipping and fees calculated at checkout.
            </p>

            <button
              type="button"
              onClick={() =>
                alert(
                  "Checkout will be connected later!",
                )
              }
              className="mt-5 w-full rounded-full bg-lime-400 px-6 py-4 font-bold text-slate-950 transition-all hover:bg-lime-500"
            >
              CHECKOUT →
            </button>

            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="mt-3 w-full py-2 text-sm font-semibold text-slate-500 hover:text-slate-950"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>

      <Footer />
    </>
  );
}