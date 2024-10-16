import {useEffect,useState,useContext} from 'react'
import { UpdateStorageContext } from '../context/UpdateStorageContext';
import { icons } from 'lucide-react';

function LogoPreview({downloadIcon}) {

    const [storageValue, setStorageValue] = useState();
    const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext);

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('value'));
        setStorageValue(storageData);
    }, [updateStorage])

    useEffect(() => {
      if(downloadIcon){

      }
    }, [downloadIcon])

    
    

    const Icon = ({name,color,size}) => {
        const LucidIcon = icons[name];
        if(!LucidIcon) return;
        return <LucidIcon size={size} color={color} style={{
            transform:`rotate(${storageValue?.iconRotate}deg)`
        }}/>
    }
    
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="h-[450px] w-[450px] bg-gray-200 outline-dotted outline-gray-300"
        style={{
            padding:storageValue?.bgPadding,
        }}
        >
            <div className="h-full w-full flex items-center justify-center" style={{
                borderRadius:storageValue?.bgRounded,
                background:storageValue?.bgColor,
                }}>
                <Icon name={storageValue?.icon} color={storageValue?.iconColor} size={storageValue?.iconSize} />
            </div>
        </div>
    </div>
  )
}

export default LogoPreview