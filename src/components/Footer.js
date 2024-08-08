//commit your own branch

import React from "react";

function Footer(){
    return(
        <footer class="footer p-5"> 
        <div class="container"> 
            <div class="row"> 
                <div class="col-md-3"> 
                    <h2>Fund.<i>Girls</i></h2> 
                </div> 
                <div class="col-md-3"> 
                    <h5>About Us</h5> 
                    <p> 
                        Fund.Girls is a leading platform that provides 
                        Charities and Donors resources for hosting charities and 
                        making their Donations 
                        . 
                    </p> 
                </div> 
                <div class="col-md-3"> 
                    <h5>Contact Us</h5> 
                    <ul class="list-unstyled"> 
                        <li>Email: info@example.com</li> 
                        <li>Phone: +1233567890</li> 
                        <li>Address: 123 Street, City, Country</li> 
                    </ul> 
                </div> 
                <div class="col-md-3"> 
                    <h5>Follow Us</h5> 
                    <ul class="list-inline footer-links"> 
                        <li class="list-inline-item"> 
                          <a href="#"> 
                                <i class="fab fa-facebook"></i> 
                          </a> 
                          </li> 
                        <li class="list-inline-item"> 
                          <a href="#"> 
                                <i class="fab fa-twitter"></i> 
                          </a> 
                        </li> 
                        <li class="list-inline-item"> 
                          <a href="#"> 
                                <i class="fab fa-instagram"></i> 
                          </a> 
                        </li> 
                        <li class="list-inline-item"> 
                          <a href="#"> 
                                <i class="fab fa-linkedin"></i> 
                          </a> 
                        </li> 
                    </ul> 
                </div> 
            </div> 
            <hr/> 
            <div class="row"> 
                <div class="col-md-6"> 
                    <p>© 2024 Fan Girls. All rights reserved.</p> 
                </div> 
                <div class="col-md-6 text-end"> 
                    <ul class="list-inline footer-links"> 
                        <li class="list-inline-item"> 
                            <a href="#" class="text-white"> 
                                Privacy Policy 
                            </a> 
                        </li> 
                        <li class="list-inline-item"> 
                            <a href="#" class="text-white"> 
                                Terms of Service 
                            </a> 
                        </li> 
                        <li class="list-inline-item"> 
                            <a href="#" class="text-white"> 
                                Sitemap 
                            </a> 
                        </li> 
                    </ul> 
                </div> 
            </div> 
        </div> 
    </footer> 
    );
}
export default Footer;