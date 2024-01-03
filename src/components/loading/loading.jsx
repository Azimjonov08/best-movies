import "./loading.scss"
import LoadingGif from "../../assets/img/loading.gif"

function Loading() {
    return (
        <div className="loading-box">
            <img src={LoadingGif} alt="#" width={200} height={200}/>
        </div>
    )
}

export default Loading