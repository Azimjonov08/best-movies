import "./modal.scss"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons"
import ReactPlayer from "react-player"
function Modal({ open, setOpen }) {

    const { movieId } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://6537a88fbb226bb85dd39095.mockapi.io/student/movie/" + movieId)
            .then((res) => res.json())
            .then((data) => setData(data))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <div className="over" style={open == true ? { display: 'flex' } : { display: 'none' }}>
                <div className="modal">
                    <h3>Movie Trailer</h3>
                    <ReactPlayer url={data?.trailer} controls={true} width={'auto'}  height={'420px'}/>
                    <button onClick={() => setOpen(false)}>
                        <CloseOutlined />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal