"use client";
import ProvinceFrom from "@/components/ProvinceFrom";
import { DistrictForm } from "@/components/DistrictForm";
import { useState } from "react";
export default function Home() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectProvince, setSelectProvince] = useState("");

  const onSaveProvince = (param) => {
    setProvinces((pre) => {
      pre.push({
        ...param,
        id: pre.length + 1,
        districts: [],
      });
      return [...pre];
    });
  };
  const onSelectProvince = () => {
    console.log(selectProvince);
  };

  const onSaveDistrict = (id) => {};

  console.log(provinces);
  return (
    <div>
      <ProvinceFrom onSave={onSaveProvince} />
      <DistrictForm onSelect={onSelectProvince} provinces={provinces} />
      {JSON.stringify(provinces)}

      <button type="button" onClick={onSelectProvince}>
        test id
      </button>
    </div>
  );
}
