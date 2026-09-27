import React from 'react'
import edu from '../assets/myread.png'
import { Calendar, CheckCircle, GraduationCap } from 'lucide-react'

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: 'Diploma in CSE',
            institution: " Pabitra Mohan Institute of Technology",
            duration: "2024 - 2027",
            score: ' percentage: 84%'
        },
        {
            id: 1,
            degree: 'Secondary School',
            institution: "DAV Talcher thermal high school",
            duration: "2023 - 2024 ",
            score: 'percentage: 75%'
        },

        
    ]
  return (
    <section id='education'
        className='text-white py-20 overflow-hidden' >
        <div className=' max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='mb-16' >
                
                <p className='text-amber-300 text-sm uppercase tracking-widest
                 mb-2 font-semibold'
                >Learning Path</p>

                <h2 className='text-4xl md:text-5xl font-extrabold
                 text-amber-500' data-aos='fade-right' > Education.</h2>
            </div>

               {/* <--------- image ---------------> */}
            <div className='flex flex-col lg:flex-row items-center gap-16'>
                <div className=' w-full lg:w-5/12 flex justify-center lg:justify-start' 
                data-aos='fade-right'>
                    <div className='relative'>
                        <div className='absolute h-full w-full z-0 p-2 translate-x-4
                         translate-y-4 rounded-2xl shadow-lg border border-b-amber-200'></div>
                         <div className=' relative z-10 bg-amber-700
                          rounded-2xl overflow-hidden border border-b-amber-400'>
                            <img src={edu} alt="education"
                            className=' w-64 h-73 md:w-96 md:h-120 object-cover
                            transform transition-transform duration-500 hover:scale-110' />
                          </div>
                       
                          <div className='absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full
                           blur-2xl'></div>
                    </div>
                </div>

                <div className=' w-full lg:w-7/12 space-y-6'
                 data-aos='fade-left'>
                    {
                        educationData.map((edu) =>(
                            <div
                                key = {edu.id}
                                className='group relative p-6 rounded-2xl bg-[#b74213]
                                border borderfuchsia-200
                                transition-all duration-300 hover:boder-primary/70'>
                                    <div className='flex flex-col sm:flex-row sm:items-center 
                                    justify-between gap-4 mb-4'>
                                        <div className='flex items-center gap-3'>
                                            <div className=' p-2 bg-amber-200 rounded-lg border border-primary/20 
                                                 group-hover:border-primary transition-colors'>
                    < GraduationCap className='text-primary' size={24}/>
                                            </div>
                                            <div>
                                                <h3 className='text-lg font-bold text-white group-hover:text-primary
                                                 transition-colors'>
                                                    {edu.degree}
                                                </h3>
                                                <p className='text-amber-100 font-bold text-sm'>
                                                    {edu.institution}
                                                </p>
                                            </div>
                                        </div>
                                    <div className='flex items-center gap-2 text-xs font-medium bg-lime-950
                                    px-3 py-1 rounded-full border border-b-lime-100 w-fit'>
                                        < Calendar size={12} className='text-primary'/>
                                        {edu.duration}
                                      
                                    </div>
                                    </div>

                                    <p className='text-lime-200 font-bold text-sm leading-relaxed mb-4'>
                                        {edu.score}
                                    </p>

                                    <div className='flex items-center gap-2 text-[10px] uppercase-wider 
                                     text-lime-200 font-bold'>
                                        < CheckCircle size={12}/>
                                        Academic Excellence
                                    </div>
                              </div>
                            
                        ))}

                </div>
            </div>
        
        </div>

    </section>
  )
}

export default Education
