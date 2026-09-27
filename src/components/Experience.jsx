import { Briefcase, Building, Calendar, 
    Code, 
    Cpu, Layout, Terminal } from 'lucide-react'
import React from 'react'

const Experience = () => {
    const Skills =[
        {
            id:1,
            name: 'HTML & CSS',
            width: "70%",
            icon: Layout
        },
            {
            id:2,
            name: 'React Js',
            width: "85%",
            icon: Cpu
        },
             {
            id:3,
            name: 'Python',
            width: "88%",
            icon: Code
        },
            {
            id:4,
            name: 'Javascript',
            width: "87%",
            icon: Terminal
        },

            
    ]

    const Experiences =[
        {
            id: 1,
            role: 'Fresher',
            company:'',
            date:''
        }
    ]
  return (
    <section id='skills'
     className=' text-lime-100 py-20 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>
            <div className='grid md:grid-cols-2 gap-16 items-start'>
                <div data-aos='fade-right'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-12'>
                        Technical <span className='text-lime-400'> Skills</span> 
                    </h2>
                    <div className=' space-y-8'>
                        {Skills.map((skill)=>{
                            const SkillIcon = skill.icon;
                            return(
                                <div key={skill.id} className='group'>
                                    <div className='flex items-center justify-between mb-2'>
                                        <div className='flex items-center gap-3'>
                                            <div className=' p-2 bg-[#113e20] rounded-lg
                                             group-hover:bg-primary transition-colors duration-300'>
                                                < SkillIcon size={20}
                                                 className=' text-amber-200 group-hover:text-white' />                                                 
                                            </div>
                                            <span className=' font-medium tracking-wide'>
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className=' text-[#f2b99c] font-bold'>
                                            {skill.width}
                                        </span>
                                        </div>

                                    <div className=' h-2 w-full bg-[#e67f11] rounded-full
                                     p-0.5'>
                                        <div className=' h-full rounded-full bg-linear-to-r
                                        from-primary to-amber-900 shadow-[0_0_15px_#e67f11]'
                                        style={{width:skill.width}}>                                            
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>

                <div className='fade-left'>
                    <h2 className=' text-3xl md:text-5xl font-extrabold text-lime-500
                     mb-12'> Work <span className='text-lime-100'>Experience</span>
                     </h2>
                     <div className=' space-y-6'>
                        {Experiences.map((exp)=> (
                            <div key={exp.id}
                              className=' group relative p-6 rounded-2xl
                             bg-[#b74213] hover:border-pink-900 transition-all duration-300'>
                                <div className='flex gap-4'>
                                    <div className=' shrink-0 mt-1'>
                                        <div className=' p-3 bg-[#295f07] rounded-xl border border-gray-800
                                         group-hover:border-indigo-950 transition-colors'>
                                            <Briefcase className='text-lime-200' size={24}/>

                                        </div>
                                    </div>
                                    <div>
                                        <h3 className=' text-xl font-bold text-white
                                         group-hover:text-fuchsia-200 transition-colors'>
                                            {exp.role}
                                        </h3>

                                        <div className=' flex flex-col sm:flex-row sm:items-center gap-2
                                         sm:gap-4 mt-2 text-sm text-gray-400'>
                                            {/* <span  className=' flex items-center gap-1.5'>
                                                <Building size={14} className=' text-fuchsia-200' />
                                                {exp.company}
                                            </span>
                                             <span  className=' flex items-center gap-1.5'>
                                                <Calendar size={14} className=' text-fuchsia-200' />
                                                {exp.date}
                                            </span> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                     </div>

                    
                </div>
            </div>
        </div>        
    </section>
  )
}

export default Experience
Experience