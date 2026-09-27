import { Download } from 'lucide-react'
import hero from '../assets/myphoto.png'
import res from '../assets/mamuni_resume.pdf'

const HeroSection = () => {
  return (
    <section id="herosection"
    className='relative w-full h-100vh' data-aos='zoom-in-up'>
        <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
            <div className='h-24 w-2/3 bg-linear-to-br from-[#ccd789] blur-2xl
            invisible opacity-40'></div>
            <div className='h-20 w-3/4 bg-linear-to-r from-[#c3b9c1] blur-2xl
             opacity-40'></div>
        </div>

        <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl
        lg:max-w-7xl mx-auto relative'>
            <div className='grid lg:grid-cols-2 gap-10 xl:gap-14
            relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto'>
                {/* <div className='lg:py-6'> */}
                <div className='order-2 lg:order-1 lg:py-6'>
                    <div className='text-center lg:text-left'>
                        <h1 className='pt-9 text-white font-bold text-4xl md:text-5xl
                         lg:text-6xl'>
                            Hi, I'm{' '}
                            <span className='text-transparent bg-clip-text bg-linear-to-r
                            from-primary to-amber-100'>
                                Mamuni Garnayak 
                                </span>
                                👋🏻
                            </h1>
                    </div>

                    <p className='text-amber-100 pt-8 text-center lg:text-left mx-auto
                    max-w-xl'>
                        final year student of PMIT pursuing diploma in CSE-branch
                    </p>

                    <div className='flex items-center gap-3 pt-9 flex-col sm:flex-row 
                    sm:w-max lg:mx-0'>
                        {/* <button className='px-6 md:px-7 py-3 rounded-full relative
                        group w-full sm:w-max flex justify-center'>
                            <span className='absolute inset-0 rounded-3xl group-hover:scale-105
                            origin-center transition-all ease-in-out bg-primary border-2
                            border-transparent'></span>
                            <span className='relative flex items-center justify-center
                            text-white'> Contact Me</span>
                        </button> */}

                        

                        <button className='border-transparent bg-[#b74213]
                        px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex
                         justify-center'>
                            <div className=' hover:scale-105 transition-all ease-in-out flex 
                            justify-center items-center relative'>
                                <div className='svg-container'>
                                    <Download className=' text-amber-50' size={18}/>
                                    <div className='download-loader
                                    text-white hidden'></div>
                                </div>
                                <a href={res} download="mamuni-resume" className='pl-2
                                 text-white'> Download resume</a>
                            </div>
                         </button>

                    </div>
                </div>
                
                                              {/* <------------- Image---------> */}
                {/* <div className='lg:h-full md:flex'> */}
                <div className='order-1 lg:order-2 lg:h-full md:flex'>
                    <div className='flex w-full h-96 min-h-96 lg:min-h-[none]
                    lg:w-full lg:h-full items-center relative'>

                        <div className=' absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3
                         md:right-40 sm:right-16
                          rounded-[30%_70%_70%_30%/30%_30%_70%_70%] 
                          shadow-lg border border float bg-[#b893856f]'>
                            <img src={hero} alt=" Hero pic"
                            width="500" height="auto" loading='lazy'
                            className='w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] object-cover float' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default HeroSection
