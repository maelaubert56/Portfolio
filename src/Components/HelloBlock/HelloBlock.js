import './HelloBlock.css'
import device_image from '../../assets/device_image.svg'
import profile_picture from '../../assets/profile_picture.png'

function HelloBlock() {
    return (
        <div id="HelloBlock">
            <div>
                <div>
                    <h1>Hello ! <span>I’m Maël 👋</span></h1>
                    <h2>Software engineer, Student at Efrei Paris</h2>
                </div>
                <img className="profile_picture" src={profile_picture} alt=""/>
            </div>
            <img src={device_image} alt="deviceImage" />
        </div>
    );
}

export default HelloBlock;