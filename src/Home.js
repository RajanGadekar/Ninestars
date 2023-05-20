import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home(){
        useEffect(()=>{
            AOS.init({duration:1000});
        },[]);
    return(
        <>
            <div id="one" className="container-fluid">
                <div className="row">
                    <div data-aos="fade-down" id="ones" className="col-md-6 p-5">
                        <p id="a">Bettter digital<br></br> experience with<br></br> Ninestars</p>
                        <p id="b">We are team of talented designers making<br></br> websites with Bootstrap</p>
                        <button id="bt" className="btn">Get Started</button>
                    </div>
                    <div  id="p" className="col-md-6">
                        <img id="img" data-aos="fade-up" src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/hero-img.svg'></img>
                    </div>
                </div>
            </div>
            <div id="two" className="container-fluid">
                <div className="row">
                <div id="p" className="col-md-6 p-5">
                        <img data-aos="fade-down" id="img" src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/about-img.svg'></img>
                    </div>
                    <div id="p" className="col-md-6 p-5">
                    <div data-aos="fade-down" className="row">
                        <div id="vol" className="col-md-12">
                            <h2>Voluptatem dignissimos<br></br> provident quasi</h2><p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                        </div>
                        <div data-aos="fade-down" className="col-md-6">                        
                        <h4>Corporis voluptates sit</h4><p>
                                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                        <div data-aos="fade-down" className="col-md-6">
                            <h4>Ullamco laboris nisi</h4><p>
                              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Ser</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div id="three" className="container-fluid">
            <center id='op'><h3>Services</h3><h2>Check out the great services we offer</h2></center>
            <div className="row justify-content-md-center">
                <div id='pr' data-aos="fade-up" className="col-md-2">
                    <h5>Lorem Ipsum</h5>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                </div>
                <div id='pr' data-aos="fade-up" className="col-md-2">
                    <h5>Sed ut perspiciatis</h5>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                </div>
                <div id='pr' data-aos="fade-up" className="col-md-2">
                    <h5>Magni Dolores</h5>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                </div>
                <div id='pr' data-aos="fade-up" className="col-md-2">
                    <h5>Nemo Enim</h5>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                </div>
                </div>
            </div>
            <div id="three" className="container-fluid">
            <center id='por'><h3>Portfolio</h3><h2>Check out our beautifull portfolio</h2></center>
            <div className="row justify-content-md-center">
                <div id='prs' data-aos="zoom-in" className="col-md-3">
                    <img id='img' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/portfolio/portfolio-4.jpg'></img>
                </div>
                <div id='prs' data-aos="zoom-in" className="col-md-3">
                    <img id='img' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/portfolio/portfolio-5.jpg'></img>
                </div>
                <div id='prs' data-aos="zoom-in" className="col-md-3">
                    <img id='img' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/portfolio/portfolio-6.jpg'></img>
                </div>
                <div id='prs' data-aos="zoom-in" className="col-md-3">
                    <img id='img' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/portfolio/portfolio-7.jpg'></img>
                </div>
                <div id='prs' data-aos="zoom-in" className="col-md-3">
                    <img id='img' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/portfolio/portfolio-8.jpg'></img>
                </div>
                <div id='prs' data-aos="zoom-in" className="col-md-3">
                    <img id='img' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/portfolio/portfolio-9.jpg'></img>
                </div>
                <div id='prs' data-aos="zoom-in" className="col-md-3">
                    <img id='img' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/portfolio/portfolio-1.jpg'></img>
                </div>
                <div id='prs' data-aos="zoom-in" className="col-md-3">
                    <img id='img' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/portfolio/portfolio-2.jpg'></img>
                </div>
                <div id='prs' data-aos="zoom-in" className="col-md-3">
                    <img id='img' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/portfolio/portfolio-3.jpg'></img>
                </div>
                </div>
            </div>
           
            <div id="three" className="container-fluid">
            <center><h3>F.A.Q</h3><h2>Frequently Asked Questions</h2></center>
            <div className="row justify-content-md-center mt-5">
            <div id='drop' class="dropdown-toggle w-75  border-dark shadow"  type="button" data-toggle="collapse" data-target="#dat1">
            <span id="drops"><b>How to find deals and coupons?</b></span>
            </div>
            <div class="collapse  w-75" id="dat1">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel. Proin augue tortor, condimentum id sapien a, tempus venenatis massa. Aliquam egestas eget diam sed sagittis. Vivamus consectetur purus vel felis molestie sollicitudin. Vivamus sit amet enim nisl. Cras vitae varius metus, a hendrerit ex. Sed in mi dolor. Proin pretium nibh non volutpat efficitur.</p>   
            </div>
            <div id='drop' class="dropdown-toggle w-75  border-dark shadow"  type="button" data-toggle="collapse" data-target="#dat2">
            <span id="drops"><b>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</b></span>
            </div>
            <div class="collapse  w-75" id="dat2">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel. Proin augue tortor, condimentum id sapien a, tempus venenatis massa. Aliquam egestas eget diam sed sagittis. Vivamus consectetur purus vel felis molestie sollicitudin. Vivamus sit amet enim nisl. Cras vitae varius metus, a hendrerit ex. Sed in mi dolor. Proin pretium nibh non volutpat efficitur.</p>   
            </div>
            <div id='drop' class="dropdown-toggle w-75  border-dark shadow"  type="button" data-toggle="collapse" data-target="#dat3">
            <span id="drops"><b>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</b></span>
            </div>
            <div class="collapse  w-75" id="dat3">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel. Proin augue tortor, condimentum id sapien a, tempus venenatis massa. Aliquam egestas eget diam sed sagittis. Vivamus consectetur purus vel felis molestie sollicitudin. Vivamus sit amet enim nisl. Cras vitae varius metus, a hendrerit ex. Sed in mi dolor. Proin pretium nibh non volutpat efficitur.</p>   
            </div>
            <div id='drop' class="dropdown-toggle w-75  border-dark shadow"  type="button" data-toggle="collapse" data-target="#dat4">
            <span id="drops"><b>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</b></span>
            </div>
            <div class="collapse  w-75" id="dat4">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel. Proin augue tortor, condimentum id sapien a, tempus venenatis massa. Aliquam egestas eget diam sed sagittis. Vivamus consectetur purus vel felis molestie sollicitudin. Vivamus sit amet enim nisl. Cras vitae varius metus, a hendrerit ex. Sed in mi dolor. Proin pretium nibh non volutpat efficitur.</p>   
            </div>
            </div>
            </div>
            <div id="threee" className="container">
            <center id='team'><h3>Team</h3><h2>Our team is always here to help</h2></center>
            <div className="row justify-content-md-center">
                <div  data-aos="zoom-in" id='prss' className="col-md-3">
                    <img id='imgs' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/team/team-1.jpg'></img>
                </div>
                <div  data-aos="zoom-in" id='prss' className="col-md-3">
                    <img id='imgs' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/team/team-2.jpg'></img>
                </div>
                <div  data-aos="zoom-in" id='prss' className="col-md-3">
                    <img id='imgs' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/team/team-3.jpg'></img>
                </div>
                <div  data-aos="zoom-in" id='prss' className="col-md-3">
                    <img id='imgs' src='https://bootstrapmade.com/demo/templates/Ninestars/assets/img/team/team-4.jpg'></img>
                </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
            <center id='contact'><h3>Contact Us</h3><h2>Contact us the get started</h2></center>
                <div className="row">
                    <div id='hig' className="col-md-4 m-4 p-4">
                        <h4>Location</h4>
                        <p>A108 Adam Street, New York, NY 535022</p>
                        <h4>Email</h4>
                        <p>info@example.com</p>
                        <h4>Call</h4>
                        <p>+1 5589 55488 55s</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24194.89157059023!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1682511633599!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div id='hig' className="col-md-6 m-4 p-4">
                        <label>Your Name</label><br></br>
                        <input id="sub" type="text"></input>
                        <label>Your Email</label>
                        <input id="sub" type="text"></input><br></br>
                        <label>Subject</label><br></br>
                        <input id="sub" type="text"></input>
                        <label>Address</label><br></br>
                        <textarea></textarea>
                        <button id="bt" className="btn m-5">Send Message</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <center>
                        <h4>Join Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <input style={{width:'400px',height:'40px',border:'none',boxShadow:'1px 0px 30px 1px rgb(212, 202, 202)'}} type="text"></input><button id="bt" className="btn m-5">Subscribe</button>
                    </center>
                </div>
            </div>
            <footer className="conatiner-fluid">
                 <div className="row justify-content-md-center">
                 <div id='qpr' data-aos="fade-up" className="col-md-2">
                    <h3>Ninestars</h3>
                    <p>A108 Adam Street
New York, NY 535022
United States
<br></br>
Phone: +155895548855<br></br>
Email: info@example.com</p>
                </div>
                <div id='qpr' data-aos="fade-up" className="col-md-2">
                    <h5>Useful Links</h5>
                    <p><br></br>
Home<br></br>
About us<br></br>
Services<br></br>
Terms of service<br></br>
Privacy policy</p>
                </div>
                <div id='qpr' data-aos="fade-up" className="col-md-2">
                    <h5>Our Services</h5>
                    <p><br></br>
Web Design<br></br>
Web Development<br></br>
Product Management<br></br>
Marketing<br></br>
Graphic Design</p>
                </div>
                <div id='qpr' data-aos="fade-up" className="col-md-2">
                    <h5>Our Social Networks</h5>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                    <div id='cir'><img src=""></img></div>
                </div>
                 </div>
            </footer>
        </>
    )
}

