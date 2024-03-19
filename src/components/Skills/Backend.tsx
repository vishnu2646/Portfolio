import { IBackend, backend } from "../../data/SkillsData";

const Backend = () => {
    const data: IBackend[] = backend;
    let halfwayThrough = Math.floor(data.length / 2);
    
    let arrayFirstHalf = data.slice(0, halfwayThrough);
    let arraySecondHalf = data.slice(halfwayThrough, data.length);

    return (
        <div className="skill__content">
            <h3 className="skills__title">Backend & Other Techonologies</h3>

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

export default Backend;