import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// setup var
const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I love you to the moon and back.',
    author: 'Amelia Hepworth',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71hqSRFg5YL._AC_UL200_SR200,200_.jpg',
    title: 'Book of questions: Revised and Updated.',
    author: 'Gregory Stock',
  },
]

const names = ['John', 'Peter', 'Bob', 'Susan', 'Anna']

const newName = names.map((name) => <h1>{name}</h1>)

function Booklist() {
  return <section className='booklist'>{newName}</section>
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
