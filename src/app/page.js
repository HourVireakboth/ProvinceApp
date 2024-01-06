"use client";
import ProvinceFrom from "@/components/ProvinceFrom";
import { DistrictForm } from "@/components/DistrictForm";
import { useState } from "react";
import { uuidv4 } from "@/utils";

export default function Home() {
  const [provinces, setProvinces] = useState([]);

  const [selectProvince, setSelectProvince] = useState("");

  const [districts, setDistricts] = useState([]);
  const onSaveProvince = (param) => {
    const id = uuidv4();
    console.log(id);
    setProvinces((pre) => {
      pre.push({
        id: id,
        ...param,
      });
      return [...pre];
    });
  };

  console.log(provinces);

  const onSelectProvince = () => {
    console.log(selectProvince);
  };

  const onSaveDistrict = (param) => {
    const id = uuidv4();
    setDistricts((pre) => {
      return [
        ...pre,
        {
          ...param,
          id: id,
        },
      ];
    });
  };
  console.log(districts);
  return (
    <div>
      <ProvinceFrom onSave={onSaveProvince} />
      <DistrictForm onSave={onSaveDistrict} provinces={provinces} />
      <pre>{JSON.stringify(provinces)}</pre>
      <pre>{JSON.stringify(districts)}</pre>
    </div>
  );
}
