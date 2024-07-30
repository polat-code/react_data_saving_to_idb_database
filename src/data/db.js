// db.js
import { openDB } from "idb";

const dbPromise = openDB("my-database", 1, {
  upgrade(db) {
    // Create a store (table) named 'store' with keyPath 'id'
    db.createObjectStore("store", { keyPath: "id", autoIncrement: true });
  },
});

export const getDb = () => dbPromise;
