import { Layout } from "../components/layouts/Layout";
import '../assets/styles/carlist.css'

export default function CarList() {
  return (
    <Layout>
      <div className="section-title">
        <div className="head">Car Listing</div>
        <div className="content">choose car of your choice for rent</div>
      </div>

      <div className="container">
        <div className="filterside">
          <div className="filter-card">
            <div className="heading">Find Your Car</div>
            <form action="" className="filter-form">
              <div className="form-ctl">
              
                <select name="inpbrand" id="inpbrand">
                  <option value="default">select-brand</option>
                </select>
              </div>
              <div className="form-ctl">
                
                <select name="inpfuel" id="inpbrand">
                  <option value="default">select-fuel-type</option>
                </select>
              </div>
              <div className="form-ctl">
                <button className="search-btn">Search Car</button>
              </div>
            </form>
          </div>
        </div>
        <div className="main-list">
            <div className="listing-heading">0 Listing</div>
        </div>
      </div>
    </Layout>
  );
}
