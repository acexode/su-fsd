"use client";
import React, { useState, useEffect } from "react";
import { handleSort } from "../lib/utils";
import { Item, SortMethod } from "../lib/definitions";
import SortDropdown from "./SortDropdown";
import ItemCard from "./ItemCard";

const ItemList = () => {
  const [items, setitems] = useState<Item[]>([]);
  const [sortMethod, setSortMethod] = useState<SortMethod>('createdAtAsc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/items");
        const data = await res.json();
        const list: Item[] = data.items;

        setitems(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-20 text-white">
      <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg">
        {items.length > 0 && 
        
        <SortDropdown sortMethod={sortMethod} setSortMethod={setSortMethod} />
        }

        <div className="grid grid-cols-2 gap-4">
          {handleSort(sortMethod, items).map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ItemList;
