import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
//needs 2 states bc there are 2 elements that need change
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Produce')
  //select tag uses "produce" becasue we want it to appear first 
  // controlled state = means ability to update state

  function handleTextChange(event){
    setText(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }
//function mimicks reset()
  function clearForm(){
    setText('')
    setCategory ('Produce') 
  }
  function handleSubmit(event){
    
    // event.target.value
    addItem(newItem)
  }
  return (
    <form className="NewItem" onSubmit ={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleTextChange} value = {text}/>
      </label>

      <label>
        Category:
        <select name="category" onChange = {handleCategoryChange} value = {category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>


  );
}

export default ItemForm;
