import style from './Contact.module.css'
import { useState } from 'react'
import copiar from '../Img/copy.png'
import selo from '../Img/selo.png'
import oldGame from '../Img/oldGame.png'
import heart2 from '../Img/heart2.png'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'

import { motion } from 'framer-motion'



export const Contact = () => {
  const [copy, setCopy] = useState('artdevcontato@gmail.com')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(copy)
    setCopied(true)

  }

  // === ALERT ===


  // ==== EMAIL ====
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const templateParams = {
    email: email,
    message: comment,
    from_name: name,
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send("service_r1dfqat", "template_o6v57km", templateParams, "md5tgl6uKx9uztlJK").then((response) => {
      console.log("Email Enviado", response.status, response.text)
      setName('')
      setEmail('')
      setComment('')
      Swal.fire("Mensagem enviada! :D");
    })
  }

  return (

    <div className={style.container2}>
      <div className={style.card2}>
        <img src={selo} className={style.selo} />
        <img src={heart2} className={style.heart} />
        <motion.img src={oldGame} className={style.game}
          initial={{ opacity: 0, y: -75, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1, type: 'spring', stiffness: 200 }}
        />
        <form className={style.form2} onSubmit={sendEmail}>
          <div className={style.formAll}>
            <div className={style.formFrom}>
              <input type="name" name='name' placeholder='Name' className={style.input2}
                value={name}
                onChange={(e) => { setName(e.target.value) }} />
              <label htmlFor="name" className={style.label2}>De</label>
            </div>
            <div className={style.formTo}>
              <input type="email" name='email' placeholder='From' className={style.input2}
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                required />
              <label htmlFor="name" className={style.label2}>Email</label>
            </div>
            <div className={style.formEmail}>
              <input type="text" name='text' placeholder='' value={copy} className={style.input2 + (copied ? ' colorC' : ' color3')}
                onClick={handleCopy} />
              <label htmlFor="name" className={`${style.label2} ${style.label22}`}>Para</label>
              <div className={style.infoCopy}>
                <img src={copiar} className={style.copiado} />
              </div>
            </div>
          </div>
          <div className={style.formComment}>
            <textarea name="comment" cols="30" rows="10"
              value={comment}
              onChange={(e) => { setComment(e.target.value) }}
              className={`${style.input2} ${style.comment}`}
              required></textarea>
          </div>
          <div className={style.btnDiv}>
            <button className={style.btn} type='submit'>
              <span className={style.span}>Enviar</span>
              <div className={style.svgWrapper}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}
