import { Button, Modal  } from 'flowbite-react';
import { useEffect, useState } from 'react';

import { people } from './peopleArray';




export default function TeamSection() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const [selectedPerson, setSelectedPerson] = useState([]);

  // useEffect(() => {
  //   props.setOpenModal('dismissible')
  //   console.log(selectedPerson);
  // }, [selectedPerson]);
  // useEffect(() => {
  //   console.log(selectedPerson);
  // }, [openModal]);
  
  const handleOpenModal = (person) => {
    setSelectedPerson(person);
    props.setOpenModal('dismissible')
    // console.log(Date.now().toString());

  }

  return (
    // <div className="bg-white py-24 sm:py-32">
    <div className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce nuestro equipo</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Somos un equipo multidisciplinario con amplia experiencia y altamente calificado
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-32 w-32 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  <div className='p-1'>
                    <Button 
                      size="xs" 
                      gradientDuoTone="purpleToBlue"
                      onClick={() => {
                        // setSelectedPerson({
                        //   personName: person.name
                        // })
                        // props.setOpenModal('dismissible')
                        // console.log(selectedPerson.personName);

                        handleOpenModal(person)
                      }}
                    >
                      Más información
                    </Button>
                  </div>
                </div>
              </div>

            {/* modal */}
            <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
              <Modal.Header className="text-xl font-semibold leading-7 tracking-tight text-gray-900">{selectedPerson.name}</Modal.Header>
              <Modal.Body>
                <div className="xl:flex">

                  <div className='flex-2 p-3 pr-8'>
                    <div className='flex justify-center flex-wrap '>
                      <img className="h-40 w-40 rounded-full" src={selectedPerson.imageUrl} alt="" />
                    </div>
                      <p className="flex justify-center text-base font-semibold mt-3 text-indigo-600">{selectedPerson.role}</p>
                  </div>

                  <div className='flex-1'>
                    {
                      selectedPerson.descriptions 
                      ?<>
                        {selectedPerson.descriptions.map((desc) => (
                      <p key={desc} className="mb-4 text-lg leading-8 text-gray-800 text-justify">
                        {desc}
                      </p>
                    ))}
                      </>
                      :<></>
                    }
                  </div>

                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button> */}
                <Button gradientDuoTone="cyanToBlue"  onClick={() => props.setOpenModal(undefined)}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
            

            
            </li>
          ))}
        </ul>
      </div>
      {/* modal again? */}
    </div>
  )
}
  