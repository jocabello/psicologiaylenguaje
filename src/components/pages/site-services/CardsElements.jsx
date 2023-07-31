import { Card } from 'flowbite-react';
import { PISC_PARAGRAPH_1, PISC_PARAGRAPH_2, PISC_PARAGRAPH_3 } from './servicesTexts';

export default function CardsElements() {
  return (
    <div className='mt-8 mb-8 sm:px-5 md:px-20 xl:px-40'>
        <Card className=''>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Psicología
            </h5>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                {PISC_PARAGRAPH_1}
            </p>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                {PISC_PARAGRAPH_2}
            </p>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                {PISC_PARAGRAPH_3}
            </p>
        </Card>
        
        <div className='py-10 xl:py-20'>
            <Card className=''>
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    Fonoaudiología
                </h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                    {PISC_PARAGRAPH_1}
                </p>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                    {PISC_PARAGRAPH_2}
                </p>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                    {PISC_PARAGRAPH_3}
                </p>
            </Card>
        </div>

        <Card className='md:mb-10 xl:mb-20'>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Terapia Alternativa
            </h5>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                {PISC_PARAGRAPH_1}
            </p>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                {PISC_PARAGRAPH_2}
            </p>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                {PISC_PARAGRAPH_3}
            </p>
        </Card>

    </div>
  )
}


