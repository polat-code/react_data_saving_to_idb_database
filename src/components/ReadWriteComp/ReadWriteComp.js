import React, { useState, useEffect } from "react";
import { addItem, getItems } from "../../data/crud";
const ReadWriteComp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch initial data
    getItems().then(setData);
  }, []);

  const handleSaveData = async () => {
    const data = { key1: "value1", key2: "value2" };
    await addItem(data);
    console.log("Data saved");
  };
  const handleRetrieveData = async () => {
    const retrievedData = await getItems();
    console.log("Retrieved data:", retrievedData);
    setData(retrievedData);
  };

  return (
    <div>
      <h1>IndexedDB Example</h1>
      <button onClick={handleSaveData}>Save Data</button>
      <button onClick={handleRetrieveData}>Retrieve Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ReadWriteComp;
