export default function App() {
  return (
      <form name="contact" method="POST" netlify>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

  )
}