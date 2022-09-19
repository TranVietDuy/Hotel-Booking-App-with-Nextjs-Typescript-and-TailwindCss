import * as React from 'react';
import Image from 'next/image';

import barcelonaPic from "../img/temp/featured-destinations/feature-barcelona.jpg";
import parisPic from "../img/temp/featured-destinations/feature-paris.jpg";
import londonPic from "../img/temp/featured-destinations/feature-london.jpg";
import sydneyPic from "../img/temp/featured-destinations/feature-sydney.jpg";
import hoianPic from "../img/temp/featured-destinations/feature-hoian.jpg";
import tokyoPic from "../img/temp/featured-destinations/feature-tokyo.jpg";
import { StaticImageData } from 'next/image';


const featuredDestinations = [
    { tittle: "Barcelona, Spain",
    picture: barcelonaPic,
    rating: "3.5",
    numberOfActivities: "196",
    avatar: "https://images.unsplash.com/photo-1612881920003-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
},
    { tittle: "Paris, France",
    picture: parisPic,
    rating: "4.5",
    numberOfActivities: "196",
    avatar: "https://images.unsplash.com/photo-1612881920003-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
},
    { tittle: "London, England",
    picture: londonPic,
    rating: "4.5",
    numberOfActivities: "196",
    avatar: "https://images.unsplash.com/photo-1612881920003-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
},
    { tittle: "Sydney, Australia",
    picture: sydneyPic,
    rating: "4.5",
    numberOfActivities: "196",
    avatar: "https://images.unsplash.com/photo-1612881920003-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
},
    { tittle: "Hoi An, Vietnam",
    picture: hoianPic,
    rating: "4.5",
    numberOfActivities: "196",
    avatar: "https://images.unsplash.com/photo-1612881920003-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
},
    { tittle: "Tokyo, Japan",
    picture: tokyoPic,
    rating: "4.5",
    numberOfActivities: "196",
    avatar: "https://images.unsplash.com/photo-1612881920003-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
},
];


export interface  FeaturedDestinationProps {
    tittle: string;
    picture: StaticImageData;
    rating: string;
    numberOfActivities: string;
    avatar: string;
}

export default function FeaturedDestination ({tittle, picture, rating, numberOfActivities, avatar}:  FeaturedDestinationProps) {
  return (
      <div className="mx-auto py-10 bg-lightGray-7 px-4 pt-11 sm:px-6 lg:px-12">
          {/* Headline */}
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className=" font-dmsans text-3xl font-bold leading-10 tracking-tight text-darkGray-4 sm:text-4xl ">
                  Featured Destinations
              </h2>

              <p className="mt-4 max-w-prose  font-dmsans text-base text-lightGray-1 ">
                  Popular destinations open to visitors from Indonesia
              </p>
          </div>
          {/* Featured Destination */}
          <div className="">
              <div className="grid gap-4 ">
                  {featuredDestinations.map((destination) => (
                      <div className="flex flex-col items-center justify-center">
                          <div className="relative h-80 w-full">
                              <Image
                                  src={destination.picture}
                                  layout="fill"
                                  className="rounded-lg "
                              />
                          </div>                            
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}
