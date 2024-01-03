import "./cardinner.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../loading/loading";
import Modal from "../modal/modal";

function CardInner() {
  const [openModal, setOpenModal] = useState(false)
  const { movieId } = useParams();
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://6537a88fbb226bb85dd39095.mockapi.io/student/movie/" + movieId)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);



  if (IsLoading) {
    return <Loading />
  }

  return (
    <>
      <div className="container">

        <Modal open={openModal} setOpen={setOpenModal} />
        <div className="card-inner">
          <img
            src={data?.avatar}
            alt="#"
            width={400}
            height={650}
          />
          <div className="card-box">
            <ul>
              <li>
                <b>Rating:</b> {data?.renting}
              </li>
              <li>
                <b>Name:</b> {data?.name}
              </li>
              <li>
                <b>Country:</b> {data?.country}
              </li>
              <li>
                <b>Genre:</b> {data?.genre}
              </li>
              <li>
                <b>Release:</b> {data?.release}
              </li>
              <li className="tags">
                <b>Tags:</b>  {data?.tags}
              </li>
            </ul>
            <button className="btn" onClick={() => setOpenModal(true)}>Open Trailer</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardInner;
