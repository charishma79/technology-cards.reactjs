// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-items-container`}>
      <div>
        <h1 className="course-name">{title}</h1>
        <p className="course-text">{description}</p>
        <div className="image-container">
          <img src={imgUrl} className="image" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
