import React from 'react'
import Image, { StaticImageData } from 'next/image'
import manilaPic from '../img/temp/trending/trending-manila.png'
import sfrPic from '../img/temp/trending/trending-sfr.png'
import frankfPic from '../img/temp/trending/trending-frankf.png'
import washPic from '../img/temp/trending/trending-wash.png'
import stockPic from '../img/temp/trending/trending-stock.png'
import seattlePic from '../img/temp/trending/trending-seattle.png'

const trendingCities = {
    data: [
        {
            picURI: manilaPic,
            city: 'Manila',
            rating: 4.91,
            votes: 147,
            price: 250,
        },
        {
            picURI: sfrPic,
            city: 'San Francisco',
            rating: 4.91,
            votes: 147,
            price: 250,
        },
        {
            picURI: frankfPic,
            city: 'Frankfurn main',
            rating: 4.91,
            votes: 147,
            price: 250,
        },
        {
            picURI: washPic,
            city: 'Washington',
            rating: 4.91,
            votes: 147,
            price: 250,
        },
        {
            picURI: stockPic,
            city: 'Stockholm',
            rating: 4.91,
            votes: 147,
            price: 250,
        },
        {
            picURI: seattlePic,
            city: 'Seatle',
            rating: 4.91,
            votes: 147,
            price: 250,
        },
    ]

}

function Trending() {
  return (
    <section className='b bg-lightGray-7'>
        <div className="container px-32 pt-24 pb-8 mx-auto space-y-4 max-w-5xl ">
            <h2 className='text-center text-5xl text-darkGray-4 font-dmsans font-bold'>Trending Cities</h2>
            <p className='text-center text-lg text-darkGray-1'>The most searched for cities on TopGuide</p>
            <div className='md:grid md:grid-cols-2 md:grid-rows-3'>
                {
                    trendingCities.data.map(cityData => <CityCard picURI={cityData.picURI} city={cityData.city} rating={cityData.rating} votes={cityData.votes} price={cityData.price} />
                        )
                }
                
            </div>
        </div>
    </section>
  )
}

function CityCard({picURI, city, rating, votes, price}) {
    return (
        <div className='flex flex-row justify-between'>
            <Image className='bg-slate-400' src={picURI} height="170px" width="160px"/>
            <div>
                <h4>{city}</h4>
                <p>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 11.9532L3.43074 13.9147C2.91697 14.1971 2.31846 13.7374 2.4171 13.1362L3.09765 8.98853L0.213886 6.0502C-0.203981 5.62442 0.0251203 4.87905 0.600728 4.79162L4.59003 4.18568L6.37322 0.408861C6.6306 -0.136287 7.3694 -0.136287 7.62678 0.408861L9.40997 4.18568L13.3993 4.79162C13.9749 4.87905 14.204 5.62442 13.7861 6.0502L10.9023 8.98853L11.5829 13.1362C11.6815 13.7374 11.083 14.1971 10.5693 13.9147L7 11.9532Z" fill="#FFD166"/>
                </svg>
                {`${rating} (${votes})`}
                </p>
                <p>{`$${price.toFixed(2)}`}
                <span>/night</span>
                </p>
                <button>Book Now</button>
            </div>

            
        </div>
    )
}

export default Trending