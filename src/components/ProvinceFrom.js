import React, { useState } from "react";
import {TextInput} from "./Input";
import { Button } from "./Button";


export default function ProvinceFrom({onSave}) {

  const [form,setForm] = useState({name:"",namekm:""});

  const onChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setForm({
      ...form,
      [name]:value
    })
    
  }

  const onClickSave = ()=>{
    onSave(form)
    setForm({name:"",namekm:""});
  }

  return (
    <div>
      <div className="text-xl">ProvinceFrom</div>
      <div className="flex">
        <TextInput label="Name latin" name={"name"} value={form.name} onChange={onChange} />
        <TextInput label="Name Khmer" name={"namekm"} value={form.namekm} onChange={onChange} />
      </div>
      <Button label={"Save"} onClick={onClickSave} />
      
    </div>
  );
}
