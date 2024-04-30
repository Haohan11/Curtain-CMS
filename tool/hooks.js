import { useState } from "react";

export const useInputFilePath = () => {
  const [src, setSrc] = useState(null);

  const handleChooseFile = (event) => {
    const [file] = event.target.files;
    if (!file) return;
    setSrc(URL.createObjectURL(file));
  };

  return [src, handleChooseFile];
};

export const useGroupInputFilePath = (init) => {
  const [srcArray, setSrcArray] = useState(init);

  const handleChooseFile = (event, index) => {
    const [file] = event.target.files;
    if (!file) return;
    setSrcArray((prev) => {
        prev[index] = URL.createObjectURL(file) 
        return [...prev]
    });
  };

  return [srcArray, setSrcArray, handleChooseFile];
};
