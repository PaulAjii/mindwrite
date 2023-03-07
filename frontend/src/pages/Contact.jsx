const Contact = () => {
  const handleClick = (e) => {
    e.preventDefault()

    console.log('Message sent successfully...')
  }
  return (
    <section className='contact-us'>
      <div className="container">
        <h1 className="title contact-title">Contact Us</h1>

        <form className="contact-form">
          <div className="form-fields__container">
            <div className="form-control">
              <label>Fullname:</label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                required
              />
            </div>

            <div className="form-control">
              <label>Email:</label>
              <input
                type="email"
                placeholder="e.g. example@gmail.com"
                required
              />
            </div>

            <div className="form-control">
              <label>Message:</label>
              <textarea
                name="message"
                placeholder="Type in your message..."
                required
              ></textarea>
            </div>
            <button
              className="btn submit-btn"
              type="submit"
              onClick={ handleClick }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact