import { Smile } from 'lucide-react'
import React from 'react'
import { Slider } from "@/components/ui/slider"
import { useState,useEffect } from 'react'
import ColorPickerController from './ColorPickerController';
import { useContext } from 'react';
import { UpdateStorageContext } from '../context/UpdateStorageContext';


function IconController() {
  const storageValue = JSON.parse(localStorage.getItem('value'));
    const [size, setSize] = useState(storageValue?storageValue?.iconSize:280);
    const [rotate, setRotate] = useState(storageValue?storageValue?.iconRotate:0);
    const [color, setColor] = useState(storageValue?storageValue?.iconColor:'rgba(0,0,0,1)');
    const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext);

    useEffect(() => {
      const updatedValue = {
        ...storageValue,
        iconSize: size,
        iconRotate: rotate,
        iconColor: color,
        icon:'Smile'
      }
      setUpdateStorage(updatedValue);
      localStorage.setItem('value', JSON.stringify(updatedValue));
    }, [size,rotate,color])
    

  return (
    <div className='h-screen w-full'>
        <div>
            <label>Icon</label>
            <div className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2">
            <Smile/>
            </div>
            <div className="py-2">
                <label className='p-2 flex justify-between items-center'>Size <span>{size}px</span></label>
                <Slider defaultValue={[size]} max={512} step={1} onValueChange={(event)=>setSize(event[0])} />
            </div>
            <div className="py-2">
                <label className='p-2 flex justify-between items-center'>Rotate <span>{rotate}°</span></label>
                <Slider defaultValue={[rotate]} max={360} step={1} onValueChange={(event)=>setRotate(event[0])} />
            </div>
            <div className="py-2">
                <label className='p-2 flex justify-between items-center'>Icon Color</label>
                <ColorPickerController hideController={true} selectedColor={(color) => setColor(color)}/>
            </div>
        </div>
    </div>
  )
}

export default IconController