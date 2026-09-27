import React from 'react'
import about from '../assets/myphoto.png'

const AboutSection = () => {
  return (
    <section id='about'
     className="text-white mt-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2
         gap-12 items-center py-16 xl:px-16 relative z-10">
            <div data-aos='fade-right'>
                <h2 className="text-4xl md:text-5xl font-extrabold text-lime-100 mb-6">
                    More <span className='text-lime-400'>About </span>Me
                </h2>
                <p className='text-lime-300 text-base lg:text-lg
                 mb-10 leading-relaxed'>
                   I, Mamuni Garnayak pursuing third-year diploma student at PMIT College, in CSE (Computer Science and Engineering) degree. <br /> <br />I am passionate about technology, eager to learn new skills, and dedicated to improving my knowledge in the field. I enjoy exploring programming, problem-solving, and working on innovative projects.
                </p>
                <div className="grid grid-cols-3 gap-6 max-w-xl">
                   

                    <div className="text-center rounded-2xl bg-amber-500
                     p-5 transition-all duration-300 hover:border-primary/50">
                        <h3 className='text-fuchsia-950 font-bold text-2xl
                         md:text-3xl'>3</h3>
                         <p className='text-xs text-fuchsia-950 uppercase
                          tracking-wider mt-0.5'>Projects</p>
                    </div>

                    <div className="text-center rounded-2xl bg-lime-300
                     p-5 transition-all duration-300 hover:border-primary/50">
                        <h3 className='text-fuchsia-950 font-bold text-2xl
                         md:text-3xl'>+2</h3>
                         <p className='text-xs text-fuchsia-950 uppercase
                          tracking-wider mt-0.5'>Courses</p>
                    </div>
               </div>             
            </div>
            <div className="mt-16 md:mt-0 flex justify-center
             lg:justify-end relative" data-aos='fade-left'>
                <div className="relative w-76 h-76 md:w-96 md:h-120">
                    <div className="absolute inset-0 z-0 rounded-full
                    shadow-lg border border-primary translate-x-4 translate-y-4">                      
                    </div>
                    <div className=' relative z-10 w-full h-full bg-[#2ccd4f] rounded-full
                     overflow-hidden border border-[#d8dbae]'>
                        <img src={about} alt="About" 
                        className='w-full h-full object-cover transition-transform duration-500
                         hover:scale-110'/>
                    </div>
                </div>
             </div>

        </div>
    </section>

   
  )
}

export default AboutSection
