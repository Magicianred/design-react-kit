import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon/Icon'

const propTypes = {
  /** Mostra un'icona nella Card. Passare il nome dell'icona per utilizzarlo. */
  iconName: PropTypes.string,
  /** Mostra la data nella Card. Passare una data già formattata come stringa. */
  date: PropTypes.string,
  /** Se usato come link, passare l'URL target. */
  href: PropTypes.string
}

const CardCategory = props => {
  const { iconName, date, href, ...attributes } = props
  const { children, ...rest } = attributes
  const classes = classNames({
    'category-top': date || ' ',
    'categoryicon-top': iconName
  })
  // Simple category link
  const categoryLink = !iconName && (
    <a href={href} className="category">
      {children}
    </a>
  )
  const categoryDate = date && <span className="data">{date}</span>
  // Category with icon
  const categoryText = iconName && <span className="text">{children}</span>
  const categoryIcon = iconName && <Icon icon={iconName} />

  return (
    <div className={classes} {...rest}>
      {categoryLink}
      {categoryIcon}
      {categoryText}
      {categoryDate}
    </div>
  )
}

CardCategory.propTypes = propTypes

export default CardCategory
