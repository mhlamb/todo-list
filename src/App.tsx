import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import List from "./components/List";

import { Item } from "./types";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  // adding items
  const handleAddItem = (item: string) => {
    const newItems = [
      ...items,
      {
        name: item,
        done: false,
        id: items.length,
      },
    ];

    setItems(newItems);
  };

  // deleting items
  const handleDeleteItem = (index: number) => {
    console.log("Item Clicked: " + index);

    const newItems = items.filter((item) => {
      return item.id !== index;
    });

    setItems(newItems);
  };

  return (
    <>
      <NavBar title="Todo List" />
      <List
        items={items}
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
      ></List>
    </>
  );
}

export default App;
