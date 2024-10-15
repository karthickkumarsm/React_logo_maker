import {useState,React} from 'react'
import { Smile } from 'lucide-react'
import { icons } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { iconList } from '@/constants/icons';
  

function IconList({selectedIcon}) {
    const [openDialog, setOpenDialog] = useState(false);
    const storageValue = JSON.parse(localStorage.getItem('value'));

    const Icon = ({name,color,size}) => {
        const LucidIcon = icons[name];
        if(!LucidIcon) return;
        return <LucidIcon size={size} color={color}/>
    }

  return (
    <div>
        <div className="">
            <label>Icon</label>
            <div onClick={()=>setOpenDialog(true)} className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2">
            <Smile/>
            </div>
        </div>
        <Dialog open={openDialog}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Pick your Icon for creating a Logo</DialogTitle>
            <DialogDescription>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {iconList.map((icon,index)=>(
                        <div className='border p-3 flex rounded-sm items-center justify-center cursor-pointer' onClick={()=>{selectedIcon(icon);setOpenDialog(false)}}>
                            <Icon name={icon} size={20} color='black'/>
                        </div>
                    ))
                    }
                </div>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default IconList