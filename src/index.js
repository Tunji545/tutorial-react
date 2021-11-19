import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// setup var
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I love you to the moon and back.',
  author: 'Amelia Hepworth',
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71hqSRFg5YL._AC_UL200_SR200,200_.jpg',
  title: 'Book of questions: Revised and Updated.',
  author: 'Gregory Stock',
}

function Booklist() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
