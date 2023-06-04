import './Contact.css';

export const Contact = () => {
    return (
        <section className='section contact' id='contact'>
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk To Me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">6369031601</span>

                            <a href="https://api.whatsapp.com/send?phone=6369031601&text=Hello, more information" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">vishnupriyan0206@gmail.com</span>

                            <a href="mailto:vishnupriyan0206@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-instagram contact__card-icon"></i>

                            <h3 className="contact__card-title">Instagram</h3>
                            <span className="contact__card-data">_vishnu_priyan_02</span>

                            <a href="https://www.instagram.com/_vishnu_priyan_02/" target='_blank' className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
