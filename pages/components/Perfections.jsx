import { BsCheck2 } from "react-icons/bs"

export default function Perfections({ text }) {
    return(
        <div className="perfection">
           <BsCheck2 className="perfection__check"/>
           <div className="perfection__text">{text}</div>
        </div>
    )
}