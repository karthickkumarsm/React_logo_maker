import {useEffect,useState,useContext} from 'react'
import { UpdateStorageContext } from '../context/UpdateStorageContext';
import { icons } from 'lucide-react';
import html2canvas from 'html2canvas';

function LogoPreview({downloadIcon}) {

    const [storageValue, setStorageValue] = useState();
    const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext);

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('value'));
        setStorageValue(storageData);
    }, [updateStorage])

    useEffect(() => {
      if(downloadIcon){
        downloadPngIcon();
      }
    }, [downloadIcon])

    const downloadPngIcon = () => {
        const downloadLogoDiv = document.getElementById('downloadLogoDiv');
       html2canvas(downloadLogoDiv,{
        backgroundColor: null,
       }).then(canvas => {
        const pngImage = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngImage;
        downloadLink.download = 'logo.png';
        downloadLink.click();
       })
        }
    }
    

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
            <div id='downloadLogoDiv' className="h-full w-full flex items-center justify-center" style={{
                borderRadius:storageValue?.bgRounded,
                background:storageValue?.bgColor,
                }}>
                <Icon name={storageValue?.icon} color={storageValue?.iconColor} size={storageValue?.iconSize} />
            </div>
        </div>
    </div>
  )


export default LogoPreview