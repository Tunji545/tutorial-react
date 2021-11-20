import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { books } from './data'
import SpecificBook from './Book'

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <SpecificBook key={book.id} {...book} />
      ))}
    </section>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
