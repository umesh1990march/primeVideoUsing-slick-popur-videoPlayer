// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyList = moviesList.filter(each => each.categoryId === 'COMEDY')
  const actionList = moviesList.filter(each => each.categoryId === 'ACTION')
  return (
    <div className="movies-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        width="100%"
        height="100vh"
      />
      <div className="movies-content">
        <div className="movie-slider">
          <MoviesSlider comedyList={comedyList} actionList={actionList} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
