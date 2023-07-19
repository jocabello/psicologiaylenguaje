
import { Accordion } from 'flowbite-react';

export default function AccordionElement() {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          ¿Qué es un trastorno del espectro autista?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            
            El trastorno del espectro autista es una afección relacionada con el desarrollo del cerebro que afecta la manera en la que una persona percibe y socializa con otras personas, lo que causa problemas en la interacción social y la comunicación. El trastorno también comprende patrones de conducta restringidos y repetitivos.
            
          </p>
          {/* <p className="text-gray-500 dark:text-gray-400">
            <p>
              Check out this guide to learn how to 
            </p>
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="https://flowbite.com/docs/getting-started/introduction/"
            >
              <p>
                get started
              </p>
            </a>
            <p>
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </p> */}
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          ¿Que ocurre cuando... ?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
              has a design equivalent in our Figma file.
            
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            
              Check out the
            
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="https://flowbite.com/figma/"
            >
              
                Figma design system
              
            </a>
            
              based on the utility classes from Tailwind CSS and components from Flowbite.
            
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          ¿Cual es la diferencia entre... ?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://flowbite.com/pro/"
              >
                <p>
                  Flowbite Pro
                </p>
              </a>
            </li>
            <li>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://tailwindui.com/"
                rel="nofollow"
              >
                <p>
                  Tailwind UI
                </p>
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}