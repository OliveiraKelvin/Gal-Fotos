import { Photos } from "@/Type/Photo"

type Props = {
    photo: Photos;
    onClick: () => void;
}


export const PhotoItem = ({ photo, onClick }: Props) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/assets/${photo.url}`} alt="" className="w-full"/>
        </div>
    )
}