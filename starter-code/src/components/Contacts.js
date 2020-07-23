import React, { useState } from "react";
import contacts from "../contacts.json";
import TableContent from "./TableContent";

const initialState = contacts.slice(0, 5);

const Contacts = () => {
  const [state, setstate] = useState(initialState);

  function handleRandomClick() {
    const randomNumber = Math.floor(Math.random() * (contacts.length - 5) + 5);
    if (state.includes(contacts[randomNumber])) return
    state.push(contacts[randomNumber]);

    return setstate([...state]);
  }

  function handleSortClick(key) {
    state.sort((a, b) => {
      if (key === "name") return a[key].localeCompare(b[key]);
      return a[key] - b[key];
    });
    return setstate([...state])
  }

  function handleDeleteClick(id) {
    return setstate([...state.filter((contact) => contact.id !== id)]);
  }

  return (
    <div className="container">
      <div className="btn-container">
        <button onClick={handleRandomClick}>Add random contact</button>
        <button onClick={() => handleSortClick("name")}>Sort by name</button>
        <button onClick={() => handleSortClick("popularity")}>
          Sort by popularity
        </button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {state.map((contact, idx) => {
              return (
                <tr key={contact.id}>
                  <TableContent contact={contact} handleDeleteClick={handleDeleteClick}/>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
