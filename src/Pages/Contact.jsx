import "./Contact.css"
const Contact = () =>{
    return(
        <div>
            <hr />
            <h2>LET'S CONNECT</h2>
            <form className="Big-Bud">
                <div className="F-btn">
                    <label>Name</label>
                    <br/>
                    <input type="Name" />
                </div>
                <div className="S-btn">
                    <label>Email</label>
                    <br/>
                    <input type="email" />
                </div>
                <div className="T-btn">
                    <label>Message</label>
                    <br/>
                    <input type="Message" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Contact

