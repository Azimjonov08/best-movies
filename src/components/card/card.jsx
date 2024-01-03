import "./card.scss"
import FireImg from "../../assets/img/olov.png"
import { useState, useEffect } from "react"
import Loading from "../loading/loading"
import { NavLink } from "react-router-dom"

function Card() {

    const [data, setData] = useState([])
    const [IsLoading, setIsLOading] = useState(true)

    useEffect(() => {
        fetch("https://6537a88fbb226bb85dd39095.mockapi.io/student/movie")
            .then((res) => res.json())
            .then((data) => setData(data))
            .finally(() => {
                setIsLOading(false)
            })

    }, [])

    if (IsLoading) {
        return <Loading />
    }

    return (
        <>
            <div className="container card-box">

                <div className="treding-top">
                    <img src={FireImg} alt="#" width={42} height={42} />
                    <h4 className="title">Trending</h4>
                    <div className="spanm"></div>
                    <a href="#">See More</a>
                </div>

                <ul className="card-list">

                    {data.map((item, index) => {
                        return (

                            <NavLink to={`/card-inner/${item.id}`} key={index}>
                                <li className="card-item">
                                    <img src={item.avatar} alt="0" width={210} height={315} />
                                    <h3>{item.name.length > 18 ? item.name.slice(0, 18) + "..." : item.name}</h3>
                                    <div className="span">
                                        <span>{item.release.slice(7, 12)}</span>
                                        <span>{`${item.min} m`}</span>
                                    </div>
                                </li>
                            </NavLink>

                        )
                    })}



                </ul>


            </div>
        </>
    )
}

export default Card