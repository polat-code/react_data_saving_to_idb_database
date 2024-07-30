import { getDb } from "./db";

export async function addItem(data) {
  const db = await getDb();
  const tx = db.transaction("store", "readwrite");
  const store = tx.objectStore("store");
  await store.add(data);
  await tx.done;
}

export async function getItems() {
  const db = await getDb();
  const tx = db.transaction("store", "readonly");
  const store = tx.objectStore("store");
  const item = await store.getAll();
  await tx.done;
  return item;
}

export async function getItem(id) {
  const db = await getDb();
  const tx = db.transaction("store", "readonly");
  const store = tx.objectStore("store");
  const item = await store.get(id);
  await tx.done;
  return item;
}

export async function updateItem(id, newData) {
  const db = await getDb();
  const tx = db.transaction("store", "readwrite");
  const store = tx.objectStore("store");
  const existingItem = await store.get(id);
  if (existingItem) {
    const updatedItem = { ...existingItem, ...newData };
    await store.put(updatedItem);
  }
  await tx.done;
}

export async function deleteItem(id) {
  const db = await getDb();
  const tx = db.transaction("store", "readwrite");
  const store = tx.objectStore("store");
  await store.delete(id);
  await tx.done;
}
