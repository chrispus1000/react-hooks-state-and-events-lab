import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, modeSetter] = useState(false)
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => modeSetter(!isDark)}>{isDark? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;