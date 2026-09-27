import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react'
import React from 'react'

const Certificates = () => {
    const certifications =[
        {
            id: 1,
            title: 'Diploma in Computer Application',
            issuer: 'Chandrika Academy',
            date:'sept 2026',
            link:'#'
        },
         {
            id: 2,
            title: 'c-programming',
            issuer: 'Coursera / Meta',
            date:'feb 2026',
            link:'#'
        },
         {
            id: 3,
            title: 'Frontend Development',
            issuer: 'Udemy',
            date:'dec 2025',
            link:'#'
        },
            
    ]


  return (
    <section id='certificates'
        className='text-white py-20'>
        <div className=' max-w-7xl mx-auto lg:px-16'>
            <div className=' mb-16'>
                <p className='text-amber-300 text-sm uppercase
                 tracking-widest mb-2 font-semibold'>Achivements</p>
                 <h2 className=' text-4xl md:text-5xl font-extrabold
                  text-amber-200'> Certifications.</h2>
            </div>            


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {certifications.map((cert)=>(
                <div key={cert.id} data-aos='zoom-in'
                 className='group relative bg-[#b74213] border border-[#feae59] 
                 p-6 rounded-2xl transition-all duration-300
                 hover:border-primary/50
                 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)] '>
                    <div className='absolute -top-4 -right-4
                     bg-primary p-3 rounded-xl shadow-lg
                     transform group-hover:rotate-12 transition-transform'>
                        <Award className='text-white' size={24}/>
                    </div>
                    <div className='flex items-center gap-4
                     mb-4 text-xs text-lime-100'>
                        <span className='flex items-center gap-1'>
                            <ShieldCheck size={14}
                            className='text-lime-600' />
                            {cert.issuer}
                        </span>
                         <span className='flex items-center gap-1'>
                            <Calendar size={14}
                            className='text-lime-600' />
                            {cert.date}
                        </span>
                    </div>

                    <h3 className='text-xl font-black mb-3
                    group-hover:text-primary transition-colors'>
                        {cert.title}
                    </h3>
                    <p className='text-gray-400 text-sm mb-6
                    line-clamp-2 '>
                        {cert.desc}
                    </p>
                    {/* <a href={cert.link}
                     target='_blank'
                     rel='noopener noreferrer'
                     className='inline-flex items-center gap-2
                     text-sm font-medium text-lime-100
                     hover:text-white transition-colors
                     border-b border-transparent
                     hover:border-white pb-1'>
                        View Certificate <ExternalLink size={14}/>
                     </a> */}
                </div>

            ))}

            </div>
        </div>
    </section>
    
  )
}

export default Certificates
