import React from "react";
const SearchTodo = ({onChange}) => {
  
  return (
    <div style={{ marginTop: "15%", marginBottom: "-10%" }}>
      <input
       className="m-2 p-2"
        type="text"
        placeholder="Search By Id or Todo or Status"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchTodo;
