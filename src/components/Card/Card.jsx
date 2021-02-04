import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Card = ( props ) => {
  const {date, title, content, buttonLable, bgColor } = props.cardInfo
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <p className="card-date">{date}</p>
      <p className= "card-title">{title}</p>
      <p className="card-content">{content}</p>
      <Button className="button-card" variant="outline-primary">{buttonLable}</Button>
    </div>
  )
}

Card.propTypes = {
  cardInfo: PropTypes.object
}

Card.defaultProps = {
  date: '12 Sep, 2018',
  title: 'Love Learning',
  content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
  buttonLable: 'READ MORE',
  bgColor: 'red'
}

export default Card

