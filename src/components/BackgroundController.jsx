import React from 'react'
import { Slider } from "@/components/ui/slider"
import { useState,useEffect } from 'react'
import ColorPickerController from './ColorPickerController';
import { useContext } from 'react';
import { UpdateStorageContext } from '../context/UpdateStorageContext';

function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem('value'));
    const [rounded, setRounded] = useState(storageValue?storageValue?.bgRounded:0);
    const [padding, setPadding] = useState(storageValue?storageValue?.bgPadding:40);
    const [color, setColor] = useState(storageValue?storageValue?.bgColor:'rgba(255,255,255,1)');
    const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext);

    useEffect(() => {
      const updatedValue = {
        ...storageValue,
        bgRounded: rounded,
        bgPadding: padding,
        bgColor: color
      }
      setUpdateStorage(updatedValue);
      localStorage.setItem('value', JSON.stringify(updatedValue));
    }, [rounded,padding,color])


  return (
    <div className='h-screen w-full'>
        <div className="py-2">
                <label className='p-2 flex justify-between items-center'>Rounded <span>{rounded}px</span></label>
                <Slider defaultValue={[rounded]} max={512} step={1} onValueChange={(event)=>setRounded(event[0])} />
        </div>
        <div className="py-2">
                <label className='p-2 flex justify-between items-center'>Padding <span>{padding}px</span></label>
                <Slider defaultValue={[padding]} max={100} step={1} onValueChange={(event)=>setPadding(event[0])} />
        </div>
        <div className="py-2">
                <label className='p-2 flex justify-between items-center'>Background Color</label>
                <ColorPickerController hideController={false} selectedColor={(color) => setColor(color)}/>
        </div>
    </div>
  )
}

export default BackgroundController