import { Link } from "react-router-dom";
function Footer () {
    return (
        
<footer className="footer">
		<div className="container">
			
			
			{/* <div className="newsletter">
				<div className="row">
					<div className="col">
						<div className="section_title text-center">
							<h1>Subscribe to newsletter</h1>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col text-center">
						<div className="newsletter_form_container mx-auto">
							<form action="post">
								<div className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-center">
									<input id="newsletter_email" className="newsletter_email" type="email" placeholder="Email Address" required="required" data-error="Valid email is required."/>
									<button id="newsletter_submit" type="submit" className="newsletter_submit_btn trans_300" value="Submit">Subscribe</button>
								</div>
							</form>
						</div>
					</div>
				</div>

			</div> */}

		
			<div className="footer_content">
				<div className="row">

				
					<div className="col-lg-3 footer_col">

						<div className="logo_container">
							<div className="logo">
								<img src="images/logo.png" alt=""/>
								{/* <span>course</span> */}
							</div>
						</div>

						<p className="footer_about_text">Hi! I am Gurudutt Sharma! I am a passionate and pragmatic software engineer with 6 years of professional experience and I've taught over five hundred people how to code or how to become professional software engineers through my courses.</p>

					</div>

					

					<div className="col-lg-3 footer_col">
						<div className="footer_column_title">Menu</div>
						<div className="footer_column_content">
							<ul>
								<li className="footer_list_item"><Link to="/">Home</Link></li>
								<li className="footer_list_item"><Link to="/aboutus">About Us</Link></li>
							
								<li className="footer_list_item"><Link to="contactus">Contact</Link></li>
							</ul>
						</div>
					</div>

				

					<div className="col-lg-3 footer_col">
						<div className="footer_column_title">Usefull Links</div>
						<div className="footer_column_content">
							<ul>
							<li className="footer_list_item"><Link to="/courses">Courses</Link></li>
								<li className="footer_list_item"><Link to ="/news">Blogs</Link></li>
							
							</ul>
						</div>
					</div>

				

					<div className="col-lg-3 footer_col">
						<div className="footer_column_title">Contact</div>
						<div className="footer_column_content">
							<ul>
								<li className="footer_contact_item">
									<div className="footer_contact_icon">
										<img src="images/placeholder.svg" alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									Opposite Gali No. 10, Radhe Shyam Vihar Phase 1, Muradnagar, Ghaziabad, Uttar Pradesh 201206
								</li>
								<li className="footer_contact_item">
									<div className="footer_contact_icon">
										<img src="images/smartphone.svg" alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									9988252428, 7701864964
								</li>
								<li className="footer_contact_item">
									<div className="footer_contact_icon">
										<img src="images/envelope.svg" alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>official.gurudutt.sharma@gmail.com
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>


			<div className="footer_bar d-flex flex-column flex-sm-row align-items-center">
				<div className="footer_copyright">
					<span></span>
				</div>
				<div className="footer_social ml-sm-auto">
					<ul className="menu_social">
						<li className="menu_social_item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
						<li className="menu_social_item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
						<li className="menu_social_item"><a href="#"><i className="fab fa-instagram"></i></a></li>
						<li className="menu_social_item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
						<li className="menu_social_item"><a href="#"><i className="fab fa-twitter"></i></a></li>
					</ul>
				</div>
			</div>

		</div>
	</footer>
        
    );
}

export default Footer;