// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetail} = props
  console.log(movieDetail.videoUrl)

  return (
    <div className="movieItem">
      <Popup
        model
        position="top-center"
        trigger={
          <img
            src={movieDetail.thumbnailUrl}
            alt="thumbnail"
            className="thumbnail"
          />
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <div className="responsive-container">
              <ReactPlayer url={movieDetail.videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
