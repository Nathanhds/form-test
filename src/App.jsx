import { useState } from "react"

export default function App() {  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  console.log(name, email)
  return (
      <form name="contact"  method="POST">
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" name="name" id="name" value={name} onChange={(ev) => setName(ev.target.value)}/>
        </div>
        <div>
          <label htmlFor="name">Your Email:</label>
            <input type="text" name="email" id="email" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
        </div>
          <button type="submit">Send</button>
      </form>

  )
}