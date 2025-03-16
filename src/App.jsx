import { useState, useEffect } from "react";
import styles from "./App.module.css";

const initialItems = [
  "🔴 Red seat",
  "🛏️ Bunk bed",
  "🐻 Animal stuffed toy",
  "🌱 Green plant",
  "🌟 Yellow lamp",
  "🍽️ Floral plate",
  "🔵 Blue rug",
  "🖼️ Happy family picture",
  "🧺 Big toy basket",
  "🪞 Round mirror",
  "🟣 Soft purple item",
  "🖍️ Coloring set",
  "🧸 Dressed teddy bear",
  "🍊 Orange kitchen item",
  "🎈 Polka dot item",
  "❤️ Heart pillow",
  "🌙 Starry blanket",
  "🚗 Toy vehicle",
  "🪑 Tiny kids chair",
  "🌈 Three-colored item",
  "🟩 Green pillow",
  "📚 Children's book",
  "🍦 Ice cream item",
  "🐰 Rabbit-shaped item",
  "🛒 Kid's shopping cart",
  "🐦 Bird fabric item",
  "🖤 Black-white item",
  "🎨 Colorful painting",
  "💡 Fairy lights",
  "🎍 Tall fake tree",
];

export default function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("ikeaScavenger");
    return saved
      ? JSON.parse(saved)
      : initialItems.map((item) => ({ text: item, checked: false }));
  });

  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    localStorage.setItem("ikeaScavenger", JSON.stringify(items));
    if (items.every((item) => item.checked)) {
      setCelebrate(true);
    } else {
      setCelebrate(false);
    }
  }, [items]);

  const toggleCheck = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const itemsChecked = items.filter((item) => item.checked).length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🛒 Addi's IKEA Scavenger Hunt</h1>
      <p className={styles.counter}>
        {itemsChecked} / {items.length} items found
      </p>
      {celebrate && (
        <div className={styles.celebration}>
          🎉 Congratulations! You found everything! 🎉
        </div>
      )}
      <div className={styles.card}>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleCheck(index)}
                className={styles.checkbox}
              />
              <span className={item.checked ? styles.checked : ""}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
