// Write your code here.
import './index.css'

const CardItems = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={className}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="img-container">
          <img className="card-img" src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItems
