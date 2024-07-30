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
