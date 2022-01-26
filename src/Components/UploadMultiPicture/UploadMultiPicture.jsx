import React, {useState} from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';


const UploadMultiPic = () => {
    const [imgUrls, setImgUrls] = useState([]);

    const handleChange = (e) => {
        Array.prototype.map.call((e.target.files) , (item) => {
            const reader = new FileReader();
            reader.onload = function (item){
                const result = reader.result;
                    setImgUrls(imgUrls => [...imgUrls, result]);
                }
                reader.readAsDataURL(item)
            })
    }
    const handleDelete = (e) => {
        console.log(e.target.parentElement.attributes.name.nodeValue)
        setImgUrls(imgUrls.filter(item => item !== e.target.parentElement.attributes.name.nodeValue));
    }
    const handleOpenUpload = (e) => {
        e.target.parentElement.lastElementChild.click();
    }
    return ( 
        <div>
            <div className='container'> 
                        {imgUrls?.map(photo => ( 
                            <div className='wrapper'>
                            <div className='img_container'>
                                <img src={photo} alt=''/>
                            </div>
                            <div className='content'>
                                <div className='icon'><i className="fas fa-cloud-upload-alt"></i></div>
                                <div className='text'>NO FILE CHOSEN, YET!</div>
                            </div>
                            <div id='cancel_btn' onClick={e => handleDelete(e)} name={photo}><i  className="fas fa-times"></i></div>
                            <div className='file_name'>file name here</div>
                        </div>
))}
{imgUrls.length === 0 ? (
                        <div className='wrapper'>
                        <div className='content'>
                            <div className='icon'><i className="fas fa-cloud-upload-alt"></i></div>
                            <div className='text'>NO FILE CHOSEN, YET!</div>
                        </div>
                        <div className='file_name'>file name here</div>
                    </div>
) : null}
                <div>
                    <button id='custom_btn' onClick={e => handleOpenUpload(e)}>Upload button</button>
                    <input id='default_btn' type="file" onChange={e =>  handleChange(e)} multiple hidden/>
                </div>
            </div>
        </div>
     );
}
 
export default UploadMultiPic;