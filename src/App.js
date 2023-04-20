import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App() {
  
  return (
  <section className="pricing py-5">
    <div className='container'>
      <div className='row'>
        <div className='col-sm-4'>
          <div className="card mb-5 mb-lg-0 bronze">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
              <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
              <hr></hr>
              <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                  Private Projects</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                  Phone Support</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
                </li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                  Reports</li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-sm-4">
        <div className="card mb-5 mb-lg-0 silver">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="card mb-5 mb-lg-0 ">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    
  )
    
}

export default App;




