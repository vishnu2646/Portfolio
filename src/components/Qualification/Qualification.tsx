import './Qualification.css';
import { QualificationData } from '../../data/QualificationData';
import { useState } from 'react';

export const Qualification = () => {
    const expericenseData = QualificationData.experienceData.experience;
    const educationData = QualificationData.educationData.education;

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (val: number) => {
        setToggleState(val);
    }

    return (
        <section className='qualification section'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex" onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Experience
                    </div>
                    <div className="qualification__button button--flex" onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content active" : "qualification__content" }>
                        {expericenseData.map((item, index) => {
                            if(item.id % 2 !== 0) {
                                return (
                                    <div className="qualification__data" key={index}>
                                        <div>
                                            <h3 className="qualification__title">{item.title}</h3>
                                            <span className='qualification__subtitle'>{item.subtitle}</span>
                                            <div className="qualification__calender">
                                                <i className="uil uil-calendar-alt"></i> {item.time}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="qualification__data" key={index}>
                                        <div></div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        <div>
                                            <h3 className="qualification__title">{item.title}</h3>
                                            <span className='qualification__subtitle'>{item.subtitle}</span>
                                            <div className="qualification__calender">
                                                <i className="uil uil-calendar-alt"></i> {item.time}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>

                    <div className={toggleState === 2 ? "qualification__content active" : "qualification__content" }>
                        {educationData.map((item, index) => {
                            if(item.id % 2 !== 0) {
                                return (
                                    <div className="qualification__data" key={index}>
                                        <div>
                                            <h3 className="qualification__title">{item.title}</h3>
                                            <span className='qualification__subtitle'>{item.subtitle}</span>
                                            <div className="qualification__calender">
                                                <i className="uil uil-calendar-alt"></i> {item.time}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="qualification__data" key={index}>
                                        <div></div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        <div>
                                            <h3 className="qualification__title">{item.title}</h3>
                                            <span className='qualification__subtitle'>{item.subtitle}</span>
                                            <div className="qualification__calender">
                                                <i className="uil uil-calendar-alt"></i> {item.time}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
