import { useState, useEffect } from "react";
import styles from "./App.module.css";

const initialItems = [
  "🔴 Something red you can sit on",
  "🛏️ A bunk bed",
  "🐻 An animal-shaped stuffed toy",
  "🌱 A green plant (real or pretend!)",
  "🌟 A yellow lamp",
  "🍽️ A plate decorated with flowers",
  "🔵 A blue rug",
  "🖼️ A picture of a happy family",
  "🧺 A basket big enough for your toys",
  "🪞 A round mirror",
  "🟣 Something soft and purple",
  "🖍️ A coloring or drawing set",
  "🧸 A teddy bear wearing clothes",
  "🍊 Something orange in the kitchen",
  "🎈 An item with polka dots",
  "❤️ A pillow shaped like a heart",
  "🌙 A blanket with stars or moons",
  "🚗 A toy vehicle (car, truck, or train)",
  "🪑 A tiny chair for kids",
  "🌈 Something with at least three different colors",
  "🟩 A green pillow",
  "📚 A children's book",
  "🍦 Something that looks like ice cream",
  "🐰 A rabbit-shaped item",
  "🛒 A small shopping cart for kids",
  "🐦 A bird printed on fabric",
  "🖤 Something black and white",
  "🎨 A colorful painting",
  "💡 A string of lights (fairy lights)",
  "🎍 A tall pretend tree",
];

export default function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("ikeaScavenger");
    return saved
      ? JSON.parse(saved)
      : initialItems.map((item) => ({ text: item, checked: false }));
  });

  useEffect(() => {
    localStorage.setItem("ikeaScavenger", JSON.stringify(items));
  }, [items]);

  const toggleCheck = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🛒 Addi's IKEA Scavenger Hunt</h1>
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
