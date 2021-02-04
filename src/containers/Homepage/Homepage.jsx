import React, { useState } from 'react'
import Button  from '@material-ui/core/Button'

import Card from '../../components/Card/Card'

const homepageString = {
  title: "Related Articles",
  info: "Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns."
}

const cardDataBase = [
  {
    date: '12 Sep, 2018',
    title: 'Love Learning, art keys to a great year for Gwen',
    content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
    buttonLable: 'READ MORE',
    bgColor: '#F59926'
  },
  {
    date: '12 Sep, 2018',
    title: 'Curious mind leads the way for carer Jill & love learning to a great year',
    content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns. Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
    buttonLable: 'READ MORE',
    bgColor: '#4AADDE'
  },
  {
    date: '12 Sep, 2018',
    title: 'Celebrating our volunteers',
    content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
    buttonLable: 'READ MORE',
    bgColor: '#AB75AD'
  },
  {
    date: '12 Sep, 2018',
    title: 'Love Learning4',
    content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
    buttonLable: 'READ MORE',
    bgColor: '#99B898'
  },
  {
    date: '12 Sep, 2018',
    title: 'Love Learning5',
    content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
    buttonLable: 'READ MORE',
    bgColor: '#FECEA8'
  },
  {
    date: '12 Sep, 2018',
    title: 'Love Learning6',
    content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
    buttonLable: 'READ MORE',
    bgColor: '#FF847C'
  },
  {
    date: '12 Sep, 2018',
    title: 'Love Learning7',
    content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
    buttonLable: 'READ MORE',
    bgColor: '#E84A5F'
  },
  {
    date: '12 Sep, 2018',
    title: 'Love Learning8',
    content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
    buttonLable: 'READ MORE',
    bgColor: '#4AADDE'
  },
  {
    date: '12 Sep, 2018',
    title: 'Love Learning9',
    content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
    buttonLable: 'READ MORE',
    bgColor: '#FF847C'
  },
  {
    date: '12 Sep, 2018',
    title: 'Love Learning10',
    content: 'Close contacts of a Perth security guard who contracted COVID-19 have tested negative so far, but authorities are waiting for more results on day two of widespread lockdowns.',
    buttonLable: 'READ MORE',
    bgColor: '#99B898'
  }
]

const pageItems = 3
var currentItems = pageItems

const Homepage = () => {
  const [readMore, setReadMore] = useState(true)
  const [cardData, setstate] = useState(() => {
    return cardDataBase.slice(0, pageItems)
  })
  const handleLoadingMore = () => {
    setstate(prev => {
      if (cardDataBase.length > currentItems) {
        const dataAdd = cardDataBase.slice(currentItems, currentItems + pageItems)
        currentItems += pageItems
        if(cardDataBase.length-prev.length < pageItems) {
          setReadMore(false)
        }
        return [...prev, ...dataAdd]
      } 
      return [...prev]
    })
  }

  return (
    <div className="homepage-wrapper">
      <p className="homepage-title">{homepageString.title}</p>
      <p className="homepage-info">{homepageString.info}</p>
      <div className="card-wrapper">
        {cardData.map((item, key) => (
          <Card cardInfo={item} key={key} />
        ))}
      </div>
      {readMore ? <Button className="button-homepage" variant="outlined" size="large" color="primary" onClick={handleLoadingMore} >READ MORE</Button> : null}
    </div>
  )
}

export default Homepage