import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// setup var
const title = 'I love you to the moon and back.'
const author = 'Amelia Hepworth'
const img =
  'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg'

function Booklist() {
  return (
    <section className='booklist'>
      <Book job='developer' />
      <Book title='random title' number={22} />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
