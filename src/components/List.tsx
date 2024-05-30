import { Item } from "../types";
import { useState } from "react";

type Props = {
  items: Item[];
  onAddItem: (item: string) => void;
  onDeleteItem: (index: number) => void;
};

const List = ({ items, onAddItem, onDeleteItem }: Props) => {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col w-1/2 mx-auto">
      {/* input and button */}
      <div className="flex justify-center gap-6">
        <input
          value={input}
          type="text"
          className="border-2"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="border-2 px-4 hover:bg-gray-50"
          onClick={() => {
            if (!input.trim()) return;
            onAddItem(input);
          }}
        >
          Add Item
        </button>
      </div>
      {/* list */}
      <div className="mt-6">
        {items.length ? (
          <ul className="divide-y-2 border-2 rounded-lg">
            {items.map((item, index) => {
              return (
                <li
                  className="py-2 flex justify-between px-4 items-center"
                  key={index}
                >
                  {item.name}
                  <button
                    className="border-2 rounded-md p-1 hover:bg-gray-50"
                    onClick={() => {
                      onDeleteItem(item.id);
                    }}
                  >
                    Done
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="flex justify-center">
            <h3 className="text-xl">No Items...</h3>
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default List;
