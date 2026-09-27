import React from 'react'
import { FaEnvelope, FaInstagram, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'


const ContactSections = () => {
    const contactInfo =[
        {
            id:1,
            icon:FaEnvelope,
            title:'Email',
            value:'em@il',
            link:'mamunigarnayak@gmail.com'

        },
        {
            id:2,
            icon:FaPhone,
            title:'Phone',
            value:'phone',
            link:'tel:+91 63713 05705'

        },
        //  {
        //     id:3,
        //     icon:FaInstagram,
        //     title:'Inst@gram',
        //     value:'',
        //     link:null

        // },
         {
            id:4,
            icon:FaMapMarkedAlt,
            title:'Loaction',
            value:'Talcher,Odisha',
            link:null
         },
        ]

  return (
   <section id='contact'
        className=' py-20 bg-amber-900'>
            <div className=' container mx-auto px-4 max-w-6xl'>
                <div className=' text-center mb-12'>
                    <h2 className=' text-3xl md:text-5xl font-extrabold text-white
                     mb-2'>
                        Let's Connect.
                    </h2>
               
                <div className=' w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'>   </div>                 
                </div>
                <div className=' grid md:grid-cols-2 gap-8'>
                    <div>
                        <p className='text-lime-400 mb-8 leading-relaxed'>
                            I'am a vloger and having 13k of follower in 4 months
                        </p>
                        <div className='space-y-6'>
                            {contactInfo.map((info) =>{
                                const Icon = info.icon;
                                return(
                                    <div key={info.id}
                                     className='flex items-center gap-4 group'>
                                        <div className=' w-10 h-10 rounded-full
                                         bg-primary/10 flex items-center justify-center
                                          group-hover:bg-primary/20 transition-colors'>
                                            <Icon size={18} className='text-primary' />
                                        </div>
                                        <div>
                                            <h4 className='text-white font-medium text-sm'>
                                                {info.title}
                                            </h4>
                                            {info.link ? (
                                                <a href={info.link}
                                                className='text-sm text-lime-100
                                                 transition-colors'
                                                  target={info.title ==='Location' ? '_self':'_blank'}
                                                     rel = {info.title ==='Location' ? '':'noopner noreferrer' }>
                                                    {info.value}</a>
                                            ) :(
                                                <p className='text-lime-400 text-sm'>
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )

                                
                            })}
                        </div>
                        </div>
               {/* Contact form with Formspree */}
          <div className='bg-lime-800 rounded-lg p-6'>
            <form
              action="https://formspree.io/f/xzezrzbl" // Replace with your Formspree form URL
              method="POST"
            >
              {/* Email input */}
              <div className='mb-4'>
                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                  Email
                </label>
                <input
                  type="email"
                  id='email'
                  name='email'
                  className='w-full px-4 py-2 bg-lime-100 border border-gray-600 rounded-lg text-gray-700 text-sm focus:outline-none focus:border-primary transition-colors'
                  placeholder='youremail.com'
                  required
                />
              </div>
              {/* Message textarea */}
              <div className='mb-6'>
                <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows="4"
                  placeholder='Your Message...'
                  className='w-full px-4 py-2 bg-lime-100  border border-gray-600 rounded-lg text-gray-700 text-sm focus:outline-none focus:border-primary transition-colors'
                  required
                ></textarea>
              </div>
              {/* Submit button */}
              <button
                type='submit'
                className='w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80'
              >
                Send Message
              </button>
            </form>
          </div>
                    
                </div>
            </div>
    </section>
   
  )
}

export default ContactSections
