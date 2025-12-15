import ContactForm from './ContactForm'
import TestimonialsSection from './TestimonialsSection'

const Contact = () => {
  return (
    <>
    <section className='flex rounded-4xl py-5 px-20 mx-9 my-5 gap-10' id='contact'>
       
            <ContactForm />
            <div>
            <h1 className='text-center text-2xl font-bold text-stone-900 pb-5'>Our Clients</h1>
            <TestimonialsSection />
            </div>
          
    </section>
    
    </>
  )
}

export default Contact