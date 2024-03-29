import React from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import '../styles/animate.css'
import '../styles/main.css'
import '../styles/owl.theme.css'
import '../styles/owl.transitions.css'
import '../styles/owl.carousel.css'

function App() {
  return (
    //   <script type="text/javascript" src="js/jquery.js"></script>
    //   <script type="text/javascript" src="js/ajaxchimp.js"></script>
    
    //   <script type="text/javascript" src="js/owl.carousel.min.js"></script>
    //   <script type="text/javascript" src="js/wow.js"></script>
    //   <script type="text/javascript" src="js/parallax.js"></script>
    //   <script type="text/javascript" src="js/nicescroll.js"></script>
    //   <script type="text/javascript" src="js/main.js"></script>
    //   <script type="text/javascript" src="js/scrollTo.js"></script>

    <body>
    {/* Header Section */}
      <header>
        <div className="container">
          <div className="logo pull-left animated wow fadeInLeft">
            <img className="logo-image" src="img/logo.png" alt="" title="" />
          </div>
    
    
          <nav className="pull-left">
            <ul className="list-unstyled">
              <li className="animated wow fadeInLeft" data-wow-delay="0s"><a href="#about">About</a></li>
              <li className="animated wow fadeInLeft" data-wow-delay=".1s"><a href="#app_features">Features</a></li>
              <li className="animated wow fadeInLeft" data-wow-delay=".2s"><a href="#testimonials">Testimonials</a></li>
            </ul>
          </nav>
    
          <div className="social pull-right">
            <ul className="list-unstyled">
              <li className="animated wow fadeInRight" data-wow-delay=".2s"><a href="#"><img src="img/facebook.png" alt="" title="" /></a></li>
              <li className="animated wow fadeInRight" data-wow-delay=".1s"><a href="#"><img src="img/twitter.png" alt="" title="" /></a></li>
              <li className="animated wow fadeInRight" data-wow-delay="0s"><a href="#"><img src="img/google.png" alt="" title="" /></a></li>
            </ul>
          </div>
    
          <span className="burger_icon">menu</span>
        </div>
      </header>
      {/* End Header Section */}
    
    
    
    
    
    
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="caption">
            <h1 className="text-uppercase  animated wow fadeInLeft">Creators of Robofriends and SmartBrain</h1>
            <p className="enhance text-lowercase  animated wow fadeInLeft">Developers of the future, building for today</p>
    
            <a href="https://github.com/aneagoie/robofriends" className="app_store_btn text-uppercase animated wow fadeInLeft">
              <i className="android_icon"></i>
              <span>Robofriends</span>
            </a>
    
            <a href="https://github.com/aneagoie/smart-brain" className="app_store_btn text-uppercase animated wow fadeInLeft">
              <i className="iphone_icon"></i>
              <span>SmartBrain</span>
            </a>
          </div>
        </div>
      </section>
      {/* End Hero Section     */}
    
    
    
      {/* Featured On Section   */}
      <section className="featured_on">
        <div className="container">
          <ul className="list-unstyled text-center clearfix">
            <li className="col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown">
              <img src="img/google_logo.png" alt="" title="" />
            </li>
            <li className="col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown" data-wow-delay=".2s">
              <img src="img/facebook_logo.png" alt="" title="" />
            </li>
            <li className="col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown" data-wow-delay=".3s">
              <img src="img/yahoo_logo.png" alt="" title="" />
            </li>
            <li className="col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown" data-wow-delay=".4s">
              <img src="img/paypal_logo.png" alt="" title="" />
            </li>
          </ul>
        </div>
      </section>
      {/* End Featured On Section */}
    
  
      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center animated wow fadeInLeft">
              <div className="iphone">
                <img src="img/iphone.png" alt="" title="" />
              </div>
            </div>
            <div className="col-md-6 animated wow fadeInRight">
              <div className="features_list">
                <h1 className="text-uppercase">The Greatest Products Ever Created</h1>
                <p>Seuismod ligula ipsum vulputate tellus quisque dictum tortor at purus faucibus tincidunt, pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                <ul className="list-unstyled">
                  <li className="camera_icon">
                    <span>Euismod ligula ipsum vulputate tellus.</span>
                  </li>
                  <li className="video_icon">
                    <span>Morbi non efficitur nibh sit amet est eros.</span>
                  </li>
                  <li className="eye_icon">
                    <span>Fusce faucibus ante liberonec luctus egestas.</span>
                  </li>
                  <li className="pic_icon">
                    <span>Quisque pretium malesuada ornare.</span>
                  </li>
                  <li className="loc_icon">
                    <span>Cras interdum vestibulum dolor.</span>
                  </li>
                </ul>
    
                <a href="#" className="app_store_btn text-uppercase" id="play_video" data-video="https://www.youtube.com/watch?v=sCX_YMPuJGA?autoplay=1&showinfo=0">
                  <i className="play_icon"></i>
                  <span>About Video</span>
                </a>
                <a href="#hero" className="app_link">Get the app</a>
              </div>
            </div>
          </div>
        </div>
    
        <div className="about_video show_video">
          <a href="" className="close_video"></a>
        </div>
      </section>
      {/* End About Section */}
    
    
      {/* App Features Section */}
      <section className="app_features" id="app_features">
        <div className="container">
    
          <div className="row text-center">
            <div className="col-sm-4 col-md-4 details animated wow fadeInDown" data-wow-delay="0s">
              <img src="img/f_icon1.png" alt="" title="" />
              <h1 className="text-uppercase">malesuada fames turpis.</h1>
              <p className="text-lowercase">vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.</p>
            </div>
            <div className="col-sm-4 col-md-4 details animated wow fadeInDown" data-wow-delay=".1s">
              <img src="img/f_icon2.png" alt="" title="" />
              <h1 className="text-uppercase">malesuada fames turpis.</h1>
              <p className="text-lowercase">vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.</p>
            </div>
            <div className="col-sm-4 col-md-4 details animated wow fadeInDown" data-wow-delay=".2s">
              <img src="img/f_icon3.png" alt="" title="" />
              <h1 className="text-uppercase">malesuada fames turpis.</h1>
              <p className="text-lowercase">vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm-4 col-md-4 details animated wow fadeInDown" data-wow-delay="0s">
              <img src="img/f_icon4.png" alt="" title="" />
              <h1 className="text-uppercase">malesuada fames turpis.</h1>
              <p className="text-lowercase">vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.</p>
            </div>
            <div className="col-sm-4 col-md-4 details animated wow fadeInDown" data-wow-delay=".1s">
              <img src="img/f_icon5.png" alt="" title="" />
              <h1 className="text-uppercase">malesuada fames turpis.</h1>
              <p className="text-lowercase">vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.</p>
            </div>
            <div className="col-sm-4 col-md-4 details animated wow fadeInDown" data-wow-delay=".2s">
              <img src="img/f_icon6.png" alt="" title="" />
              <h1 className="text-uppercase">malesuada fames turpis.</h1>
              <p className="text-lowercase">vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.</p>
            </div>
          </div>
    
        </div>
      </section>
      {/* And App Features Section */}
    

      {/* Testimonials Section */}
      <section className="testimonials animated wow fadeIn" id="testimonials" data-wow-duration="2s">
        <div className="container">
          <div className="testimonials_list">
    
            <ul className="list-unstyled text-center slides clearfix" id="tslider">
              <li>
                <blockquote>
                  <p>Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci  in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas.</p>
                  <span className="author text-uppercase">John Doe</span>
                  <span className="job">Full Stack developer</span>
    
                </blockquote>
              </li>
    
              <li>
                <blockquote>
                  <p>Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci  in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas.</p>
                  <span className="author text-uppercase">Alex Fredy</span>
                  <span className="job">Javascript developer</span>
    
                </blockquote>
              </li>
    
              <li>
                <blockquote>
                  <p>Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci  in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas.</p>
                  <span className="author text-uppercase">Sara Aliba</span>
                  <span className="job">Web Designer</span>
    
                </blockquote>
              </li>
            </ul>
            <div id="slider_nav">
              <div id="prev_arrow"></div>
              <div id="next_arrow"></div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonials Section */}
    

      {/* Email Subscription Section */}
      <section className="sub_box">
        <p className="cta_text animated wow fadeInDown">We're hiring. Join Our company!</p>
        <form action="#" method="post" className="animated wow fadeIn" data-wow-duration="2s" id="submit_form">
          <input type="email" id="mc-email" placeholder="Enter your email"/>
          <button type="submit" id="mc_submit">
            <i className="icon"></i>
          </button>
        </form>
        <div className="message" id="error_msg">Please Enter A Valid Email.</div>
        <div className="message" id="success_msg">Thank You For Your Subscription.</div>
      </section>
      {/* End Email Subscription Section */}
    

      {/* Footer Section */}
      <footer>
        <ul className="list-unstyled list-inline app_platform">
          <li className="animated wow fadeInDown" data-wow-delay="0s">
            <a href=""><img src="img/android_icon.png" alt="" title="" /></a>
          </li>
          <li className="animated wow fadeInDown" data-wow-delay=".1s">
            <a href=""><img src="img/ios_icon.png" alt="" title="" /></a>
          </li>
          <li className="animated wow fadeInDown" data-wow-delay=".2s">
            <a href=""><img src="img/windows_icon.png" alt="" title="" /></a>
          </li>
        </ul>
        <p className="copyright animated wow fadeIn" data-wow-duration="2s" /> <strong>Pixelhint</strong>
      </footer>
      {/* End Footer Section */}
    
    </body>
  );
}

export default App;
