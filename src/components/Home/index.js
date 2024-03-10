// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="bg-continer">
    <Header />

    <div className="card-container">
      <div className="card1">
        <h1 className="heading1">Clothes That Get YOU Noticed </h1>
        <p className="paragraph1">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>

        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>

      <div className="card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="clothes-noticed"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
