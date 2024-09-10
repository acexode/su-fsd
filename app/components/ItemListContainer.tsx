"use client";
import React, { useState, useEffect } from "react";
import { handleSort } from "../lib/utils";
import { Item, SortMethod } from "../lib/definitions";

const ItemList = () => {
  const [items, setitems] = useState<Item[]>([]);
  const [sortMethod, setsortMethod] = useState<SortMethod>("createdAtAsc");

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
    <div className="bg-gray-900 text-white ">
      <div className="w-96 p-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex justify-between mb-6">
          <select
            className="p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            onChange={(e) => setsortMethod(e.target.value as SortMethod)}
          >
            <option value="createdAtAsc">Sort by created at</option>
            <option value="filenameAsc">Sort by filename (Asc)</option>
            <option value="filenameDesc">Sort by filename (Desc)</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {handleSort(sortMethod, items).map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 rounded-md shadow-md flex flex-col items-start"
            >
              <span className="text-sm text-gray-400">{item.createdAt}</span>
              <span className="text-lg">{item.fileName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
