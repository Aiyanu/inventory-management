import { Star } from 'lucide-react'
import React from 'react'

type RatingsProps = {
    rating: number
}

function index({ rating }: RatingsProps) {
    return [1, 2, 3, 4, 5].map((index) => (<Star key={index} color={index <= rating ? '#FFC107' : '#E4ESE9'} className='w-4 h-4' />))
}

export default index