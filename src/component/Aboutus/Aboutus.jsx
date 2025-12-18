import "./Aboutus.css"
import Check from '../../assets/Icon/checkbox.svg?react'


export default function aboutus() {
    return (
        <div className="aboutus__item">
            <div className="firstitem">
                <div className="secondtext"> <Check></Check>
                    <h5>QUALITY EDUCATORS</h5>
                </div>
                <div className="secondtext"><Check></Check>
                    <h5> SAFETY AND SECURITY</h5>
                </div>
            </div>
            <div className="seconditem">

                <div className="secondtext"><Check></Check>
                    <h5>PLAY TO LEARN</h5>
                </div>
                <div className="secondcontainer"><Check></Check>
                    <h5>HOME-LIKE ENVIRONMENT</h5>
                </div>
            </div>
        </div>


    )
}