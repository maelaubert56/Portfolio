import './HelloBlock.css'
import device_image from '../../assets/device_image.svg'
import profile_picture from '../../assets/profile_picture.png'

function HelloBlock() {
    return (
        <div id="HelloBlock">
            <div>
                <div>
                    <h1>Hello ! I’m Maël 👋</h1>
                    <h2>Software engineer, Student at Efrei Paris</h2>
                </div>
                <img src={profile_picture} alt=""/>
            </div>
            <img src={device_image} alt="deviceImage" />
        </div>
    );
}

export default HelloBlock;