import React, {useState} from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';



const UploadAvatar = () => {
    const [imgUrl, setImgUrl] = useState();

    const handleChange = (e) => {
        console.log(e.target.files);
        const reader = new FileReader();
        reader.onload = function(e){
            const result = reader.result;
            setImgUrl(result);
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const handleDelete = () => {
        setImgUrl(null);
    }
    return ( 
        <div>
            <div className='container'>
                <div className='wrapper'>
                    <div className='img_container'>
                        <img src={imgUrl} alt=''/>
                    </div>
                    <div className='content'>
                        <div className='icon'><i className="fas fa-cloud-upload-alt"></i></div>
                        <div className='text'>NO FILE CHOSEN, YET!</div>
                    </div>
                    <div id='cancel_btn' onClick={handleDelete}><i className="fas fa-times"></i></div>
                    <div className='file_name'>file name here</div>
                </div>
                <input id='default_btn' type="file" hidden onChange={e => handleChange(e)}/>
                <label htmlFor='default_btn' id='custom_btn'>upload button</label>
            </div>
        </div>
     );
}
 
export default UploadAvatar;