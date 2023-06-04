import { useState } from 'react';
import './services.css';
import { Services, ServiceData } from '../../data/ToggleData';

export const Service = () => {
    const data: ServiceData[] = Services;
    const [modalId, setModalId] = useState({showModalId: 0});

    const getData = (value: number) => {
        setModalId({
            showModalId: value
        });
    }

    const toggleModal = (value: number) => {
        setModalId({
            showModalId: value
        });
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Service</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                {data.map((item, index) => {
                    return (
                        <div className="services__content" key={index}>
                            <div>
                                <i className="uil uil-web-grid services__icon"></i>
                                <h3 className="services__title">
                                    { item.title }
                                </h3>
                            </div>

                            <span className="services__button" onClick={() => getData(item.id)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                            <div className={modalId.showModalId === item.id ? "services__modal active-modal" : "services__modal"}>
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => toggleModal(0)}></i>

                                    <h3 className="services__modal-title">
                                        { item.title }
                                    </h3>
                                    <p className="services__modal-description">
                                        { item.description }
                                    </p>

                                    <ul className="services__modal-services grid">
                                        {item.points.map((d, index) => {
                                            return (
                                                <li className="services__modal-service" key={index}>
                                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                                    <p className="services__modal-info">
                                                        {d}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )})
                }
            </div>
        </section>
    )
}