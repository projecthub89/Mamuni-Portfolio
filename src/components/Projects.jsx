import React from 'react'
import proj1 from '../assets/prj1-.png'
import proj2 from '../assets/proj2.png'
const Projects = () => {
    const projects = [
        {
            id:1,
            image:proj1,
            title:' portfolio',
            desc:'collection of academic,skills, learning journey ',
            tech:['React','Tailwind-css'],
            link:''
        },
              {
            id:2,
            image:proj2,
            title:'Temperature Detector',
            desc:'collection of temperature through DHT11 module',
            tech:['Esp32','C++ programming','dht11'],
            link:''
        },
    ]
  return (
    <section id='projects' 
    className=' py-16 '>
      <div className=' container mx-auto px-4 max-w-7xl'>
        <div className='text-center mb-10'>
          <h2 className=' text-4xl md:text-5xl font-extrabold text-white'>
            Projects. </h2>
            <div className=' w-28 h-1 bg-primary mx-auto mt-2 rounded-full'>              
            </div>
          </div>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-5'>
              {
                projects.map((project)=>(
                 <div key={project.id}
                 className='bg-[#177e0f] rounded-lg overflow-hidden
                  shadow-sm hover:shadow-lg hover:scale-105
                  transition-all duration-300'>
                    <img src={project.image} alt={project.title}
                     className='w-full  object-cover hover:opacity-90
                      transition-opacity duration-300' />
                      <div className=' p-4'>
                        <h3 className=' text-lg font-semibold text-white
                         group-hover:text-primary transition-colors'>
                          {project.title}
                        </h3>
                        <p className='text-amber-200 text-sm mt-1'>
                          {project.desc}
                        </p>

                        <div className='flex flex-wrap gap-1.5 mt-3'>
                          {project.tech.map((tec,idx)=>(
                            <span key={idx}
                            className=' text-xs px-2 py-0.5
                            bg-gray-700 text-gray-300 rounded
                             hover:bg-primary hover:text-white transition-colors duration-300'>
                              {tec}
                            </span>
                          ))}
                        </div>
                    </div>               
                 </div>
                ))}

            </div>     
      </div>

    </section>
    
  )
}

export default Projects
