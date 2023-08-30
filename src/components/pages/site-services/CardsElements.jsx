import { Card } from 'flowbite-react';
import { ALT_PARAGRAPH_1, FONO_PARAGRAPH_1, PISC_PARAGRAPH_1 } from './servicesTexts';

export default function CardsElements() {
  return (
    <div className='mt-8 mb-8 sm:px-5 md:px-20 xl:px-40'>
        <Card className=''>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Psicología cabalística
            </h5>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                {PISC_PARAGRAPH_1}
            </p>

        </Card>
        
        <div className='py-10 xl:py-20'>
            <Card className=''>
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    Fonoaudiología
                </h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                    {FONO_PARAGRAPH_1}
                </p>

            </Card>
        </div>

        <Card className='md:mb-10 xl:mb-20'>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Consejería, sexualidad y educación
            </h5>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg text-justify">
                {ALT_PARAGRAPH_1}
            </p>

        </Card>

    </div>
  )
}


