import { socialiconData, SocialIconData } from "../../data/SocialIconData";

const Social = () => {
    const data: SocialIconData[] = socialiconData;
    return (
        <div className="home__social">
            {data.map((item, index) => {
                return (
                    <a href={item.link} className="home__social-icon" target={"_blank"} key={index}>
                        <i className={`uil uil-${item.icon}`}></i>
                    </a>
                )
            })}
        </div>
    )
}

export default Social;