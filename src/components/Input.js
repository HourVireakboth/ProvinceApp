export const TextInput = ({ type = "text", label, value, name, onChange }) => {
  return (
    <div className="flex flex-col mx-5 my-1">
      <label>{label}</label>
      <input
        className="text-black"
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export const SelectInput = ({ label,placeholder, options = [], name, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select className="text-black" onChange={onChange} name={name} value={value}>
        <option value={""}>{placeholder}</option>
         {options.map(item => <option key={item.id} value={item.id}>{item.name}</option>)} 
      </select>
    </div>
  );
};
