// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {comedyList, actionList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="action-carousel-container">
        <h1>Action Movies</h1>
        <Slider {...settings}>
          {actionList.map(eachMovie => (
            <MovieItem movieDetail={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </div>
      <div className="action-carousel-container">
        <h1>Comedy Movies</h1>
        <Slider {...settings}>
          {comedyList.map(eachMovie => (
            <MovieItem movieDetail={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default MoviesSlider
