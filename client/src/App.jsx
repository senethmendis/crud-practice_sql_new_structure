import axios from "axios";
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    product_name: "",
    product_numner: "",
    note: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value !== undefined ? value : "",
    }));
  };

  const handleAddProduct = () => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <main>
      <div className="container">
        <form>
          <div className="input-label">
            <label htmlFor="name">Product Name</label>
            <input type="text" id="name" onChange={handleChanges} />
          </div>
          <div className="input-label">
            <label htmlFor="number">Product Name</label>
            <input type="tel" id="number" onChange={handleChanges} />
          </div>
          <div className="input-label">
            <label htmlFor="note">Note</label>
            <textarea rows={10} id="note" onChange={handleChanges}></textarea>
          </div>
          <button type="submit">Add Product</button>
          <button type="reset">Clear</button>
        </form>
      </div>
    </main>
  );
}

export default App;
