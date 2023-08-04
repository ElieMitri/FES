import { BsCheck2 } from "react-icons/bs"

export default function LandingFeatures({ text }) {
    return(
        <div className="landing__features">
                <BsCheck2 className="landing__check"/>
                <h3 className="landing__features--text">{text}</h3>
              </div>
    )
}