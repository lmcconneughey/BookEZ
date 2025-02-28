'use client'
import * as React from 'react'
const BookDetailsPage = ({params}) => {

    const { id } = React.use(params)
    console.log(id)
    return(
        <div>BookDetailsPage</div>
    )
}

export default BookDetailsPage