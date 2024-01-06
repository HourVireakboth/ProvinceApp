import { SelectInput, TextInput } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import { uuidv4 } from "@/utils";

export const DistrictForm = ({ onSave,provinces }) => {
  const [form, setForm] = useState({ province_id: "", name: "", namekm: "" });
  const [districts, setDistricts] = useState([]);



  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSelectProvince = (e) => {};

  const onClickSave = () => {
      onSave(form)
      setForm({name:"",namekm:"",province_id:""});
    
  };
  return (
    <div>
      <div className="text-xl">DistrictFrom</div>
      <div className="flex">
        <TextInput
          label="Name latin"
          name={"name"}
          value={form.name}
          onChange={onChange}
        />
        <TextInput
          label="Name Khmer"
          name={"namekm"}
          value={form.namekm}
          onChange={onChange}
        />
      </div>
      <SelectInput
        label="Provinces:"
        onChange={onChange}
        name="province_id"
        placeholder="Please Select Province"
        value={form.province_id}
        options={provinces}
      />
      <Button label={"Save"} onClick={onClickSave} />
    </div>
  );
};
