import { useEffect, useState } from 'react'
import './contactForm.css'
import '../button/button.css'

// COMPONENTS
import Button from '../button/button'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isFormValid, setIsFormValid] = useState(false)
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const [formSubitted, setFormSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isFormValid) {
            setFormSubmitLoading(true)
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...formData,
                        access_key: "9c329279-00d1-4c3f-92bc-c62931396384"
                    })
                })

                if (response.ok) { 
                    setFormSubmitted(true)
                } else {
                    alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.')
                }
            } catch (error) { 
                alert('Erro: ', error)
            } finally {
                setFormSubmitLoading(false)
            }
        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }
        const isValid = formData.name.trim() &&
            formData.email.trim() &&
            isValidEmail(formData.email) &&
            formData.message.trim()

        setIsFormValid(isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className='contact-form d-flex fd-column al-center'>
            <h2>We love meeting new people and helping them.</h2>
            <form onSubmit={handleSubmit}>
                <div className='d-flex form-group'>
                    <input
                        className='form-input'
                        type="text"
                        id='name'
                        name='name'
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange} />
                    <input
                        className='form-input'
                        type="email"
                        id='email'
                        name='email'
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange} />
                </div>
                <div className='d-flex form-group'>
                    <textarea
                        className='form-input'
                        id='message'
                        name='message'
                        placeholder="Message *"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4">
                    </textarea>
                </div>

                <div className='al-center d-flex jc-end form-group'>
                    {formSubitted && <p className='text-primary'>Formulário enviado com sucesso!</p>}
                    <Button type='submit' buttonStyle={`secondary ${!isFormValid || formSubmitLoading ? 'disabled' : ''}`}>Enviar</Button>
                </div>

            </form>
        </div>
    )
}

export default ContactForm
