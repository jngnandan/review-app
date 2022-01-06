
import React, { Component } from 'react'

export class ReviewsCarousel extends Component {
    state = {
        current: 0,
    }

    render(props) {
        const { reviewsList } = this.props
        const { imgUrl, username, companyName, description } = reviewsList

        const previousReview = (event) => {
            event.preventDefault()

            const { current } = this.state
            const { reviewsList } = this.props
            { 0 === current && this.setState({ current: reviewsList.length }) }
            console.log(reviewsList.length)
            this.setState(prevState => ({
                current: prevState.current - 1
            }))
        }
        const nextReview = (event) => {
            event.preventDefault()
            const { current } = this.state
            const { reviewsList } = this.props

            { (reviewsList.length - 1) === current && this.setState({ current: -1 }) }

            this.setState(prevState => ({
                current: prevState.current + 1
            }))
        }

        return (
            <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-t from-purple-300 to-violet-500 text-white'>
                <h1 className='text-3xl font-bold pb-1'>Reviews</h1>
                <div className='flex flex-row justify-between items-center px-6'>
                    <button onClick={previousReview}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                    </button>
                    <div className='m-1 flex flex-col justify-center items-center'>
                        <img src={reviewsList[this.state.current].imgUrl} />
                        <h1 className='font-bold m-1'>{reviewsList[this.state.current].username}</h1>
                        <p className='font-semibold'>{reviewsList[this.state.current].companyName}</p>
                        <p className='text-center'>{reviewsList[this.state.current].description}</p>
                    </div>
                    <button onClick={nextReview}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}

export default ReviewsCarousel
