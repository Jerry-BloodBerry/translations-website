'use client'

import { useActionState, useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { sendContactForm, SendContactFormState } from '@/app/api/contact/action'

const initialState: SendContactFormState = {
  success: '',
  errors: {
    name: '',
    email: '',
    message: '',
  },
}

function ContactForm() {
  const [state, formAction] = useActionState(sendContactForm, initialState)
  // Local state to control form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <form action={formAction} className="flex flex-col">
      <div className="text-2xl font-extrabold uppercase mb-2 text-gray-700 tracking-wide">
        Get in Touch
      </div>
      <div className="mt-2">
        <span className="text-red-500 mr-1">*</span>
        <label htmlFor="nameField" className="font-bold">
          Name
        </label>
        <input
          className="w-full mt-2 px-4 py-2 border shadow-[#477050] appearance-none leading-tight text-gray-700 focus:shadow-outline focus:border-none rounded-full"
          type="text"
          name="name"
          id="nameField"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {state.errors?.name && (
          <FormErrorMessage>{state.errors.name}</FormErrorMessage>
        )}
      </div>
      <div className="mt-2">
        <span className="text-red-500 mr-1">*</span>
        <label htmlFor="emailField" className="font-bold">
          Email
        </label>
        <input
          className="w-full mt-2 px-4 py-2 border leading-tight text-gray-700 focus:outline-none focus:shadow-outline rounded-full"
          type="email"
          name="email"
          id="emailField"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {state.errors?.email && (
          <FormErrorMessage>{state.errors.email}</FormErrorMessage>
        )}
      </div>
      <div className="mt-2">
        <span className="text-red-500 mr-1">*</span>
        <label htmlFor="messageField" className="font-bold">
          Message
        </label>
        <textarea
          name="message"
          cols={30}
          rows={7}
          placeholder="Type in your message"
          className="w-full px-4 py-4 mt-2 resize-none rounded-2xl border text-gray-700 focus:outline-none focus:shadow-outline"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {state.errors?.message && (
          <FormErrorMessage>{state.errors.message}</FormErrorMessage>
        )}
      </div>
      <button
        type="submit"
        className="px-4 py-2 font-bold border-2 text-white bg-[#CE2939] rounded-full mt-6 hover:translate-x-1 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
      >
        Send Message <ArrowRight className="inline size-8" />
      </button>
      {state?.success && <p className="text-green-600 mt-4">{state.success}</p>}
    </form>
  )
}

const FormErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-red-500 mt-1 ml-1">{children}</p>
}

export default ContactForm
