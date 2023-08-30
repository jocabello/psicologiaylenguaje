
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
const logoImgUrl = new URL('/logo/PeiColor.png', import.meta.url).href

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className='bg-[#caf0f8] '>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className=''>
            <Footer.Brand
              alt="Flowbite Logo"
              href="/"
              name="Psicología y Lenguaje"
              src={logoImgUrl}
            />
          </div>
          <div className="sm:mt-16 sm:grid-cols-2 sm:gap-6 grid grid-rows-1 grid-flow-col gap-4 md:mt-16 ">

            <div>

              <div>
                <Footer.Title title="Dirección" />
                <p className='-mt-5 mb-3'>Callao n° 2970 oficina 508, Las Condes, Santiago</p>
              </div>
              <div>
                <Footer.Title title="Teléfono" />
                <p className='-mt-5 mb-3'>+569 58736797</p>
              </div>

            </div>

            <div>

              <div>
                <Footer.Title title="Email" />
                <p className='-mt-5 mb-3'>consultapsicologiaylenguaje@gmail.com</p>
              </div>
              <div>
                <Footer.Title title="Redes sociales" />
                <div className="flex space-x-6 sm:mt-0  ">
                  <div className='-mt-4 flex space-x-6'>
                    <Footer.Icon
                      href="#"
                      icon={BsFacebook}
                    />
                    <Footer.Icon
                      href="#"
                      icon={BsInstagram}
                    />
                    <Footer.Icon
                      href="#"
                      icon={BsTwitter}
                    />
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>
        <Footer.Divider />
        <div className="flex-auto">
          <Footer.Copyright
            by="Psicología y Lenguaje"
            href="/"
            year={2023}
          />
        </div>
      </div>
    </Footer>
  )
}


