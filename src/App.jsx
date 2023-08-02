import { useState } from "react"

export default function App() {  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  console.log(name, email)
  return (
    <form name="contact" method="post" action="/contact">
      <input type="hidden" name="form-name" value="contact"/>
      <label>Your Name:</label>
      <input required type="text" name="name"/>
      <label>Your Email:</label>
      <input required type="email" name="email"/>
      <button type="submit">Send</button>
    </form>

  )
}