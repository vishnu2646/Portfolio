import { IFrontend, frontend } from "../../data/SkillsData";

const Frontend = () => {

    const data: IFrontend[] = frontend;
    let halfwayThrough = Math.floor(data.length / 2);
    
    let arrayFirstHalf = data.slice(0, halfwayThrough);
    let arraySecondHalf = data.slice(halfwayThrough, data.length);

    return (
        <div className="skill__content">
            <h3 className="skills__title">Frontend developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    {arrayFirstHalf?.map((item, index) => {
                        return(
                            <div className="skills__data" key={index}>
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">{item.technology}</h3>
                                    <div className="skills__level">{item.level}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="skills__group">
                    {arraySecondHalf?.map((item, index) => {
                        return(
                            <div className="skills__data" key={index}>
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">{item.technology}</h3>
                                    <div className="skills__level">{item.level}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Frontend;