import '../../assets/styles/hero.css';


export default function HeroSection() {
    return (
        <section className="hero">
            <div className="card">
                <div className="cardtitle">
                    <span>Find Car</span>
                </div>

                <form action="" className="form">
                    <div className="form-ctl">
                        <label htmlFor="inplocation">Loaction</label>
                        <select name="inplocation" id="location">
                            <option value="mumbai">mumbai</option>
                            <option value="pune">pune</option>
                            <option value="bangluro">bangluro</option>
                            <option value="gurgaon">gurgaon</option>
                        </select>
                    </div>
                    <div className="form-ctl">
                        <label htmlFor="inppickupdate">Pick Up Date</label>
                        <input type="date" name="inppickupdate" id="pickupdate" />
                    </div>
                    <div className="form-ctl">
                        <label htmlFor="inpreturndate">Return Date</label>
                        <input type="date" name="inpreturndate" id="returndate" />
                    </div>

                    <div className="search-btn">search</div>
                </form>
            </div>
        </section>
    );
}