import React from 'react'

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props
  const clickHandler = () => alert('Hello World!')
  const complexExample = (para) => console.log(para)
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        refrence button
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  )
}

export default Book
