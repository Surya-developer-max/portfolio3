export default function contact() {
    return (
        <>
            <div  className="d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh", width: '100%' }}>
                <div className="contact-items">
                    <h1>Phone</h1>
                    <h5>+91 9944487227</h5>
                </div>
                <div className="contact-items">
                    <h1>Email</h1>
                    <h5>stmugesh123@gmail.com</h5>
                </div>
                <div className="contact-items">
                    <h1>Whatsapp Me</h1>
                    <h5><a href="https://wa.me/9944487227" target="_blank" className="text-decoration-none text-light">Chat with us on WhatsApp</a></h5>
                </div>
                <div className="contact-items">
                    <h1>GIt</h1>
                    <h5><a href="https://github.com/Surya-developer-max" className="text-decoration-none text-light">Click Me</a></h5>
                </div>
            </div>

        </>
    );
}