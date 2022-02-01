import React from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const ResponsiveBoxModel = () => {
    const showModal = () =>{
        const modalContainer = document.getElementById('modal-container');
        modalContainer.classList.add('show-modal')
    }
    
    
    const closeModal = () => {
        const modalContainer = document.getElementById('modal-container')
        modalContainer.classList.remove('show-modal')
    }
    
    return ( 
        <section className="modal container">
        <button className="modal__button" onClick={showModal}>
            Open Modal
        </button>

        <div className="modal__container" id="modal-container">
            <div className="modal__content">
                <div className="modal__close close-modal" title="Close" onClick={closeModal}>
                    <i className='fas fa-times'></i>
                </div>

                <img src="assets/img/star-trophy.png" alt="" className="modal__img"/>

                <h1 className="modal__title">Good Job!</h1>
                <p className="modal__description">Click the button to close</p>

                <button className="modal__button modal__button-width" onClick={closeModal}>
                    View status
                </button>

                <button className="modal__button-link close-modal" onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    </section>
     );
}
 
export default ResponsiveBoxModel;