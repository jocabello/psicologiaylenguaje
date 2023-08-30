import React from 'react'

export default function QuoteElement() {
  return (
    <div className='px-1'>
        <figure className="max-w-screen-md mx-auto text-center">
            <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <blockquote>
                <p className="text-2xl italic font-medium text-gray-600 dark:text-white">"No somos lo que decimos que somos, sino lo que hacemos con lo que somos"</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img className="w-10 h-10 rounded-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgv2-2-f.scribdassets.com%2Fimg%2Fdocument%2F132721651%2Foriginal%2F84c27204f8%2F1596035907%3Fv%3D1&f=1&nofb=1&ipt=84e06c040c09c72e269c48d74182bb40069d2b3849f6fd3c84fd5eb0bcacb3ec&ipo=images" alt="profile picture"/>
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">El Talmud</cite>
                </div>
            </figcaption>
        </figure>


    </div>
  )
}
