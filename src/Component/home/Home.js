import './home.css';
import './homeresponsive.css';
import { Link } from "react-router-dom";
import Slider from '../../slider_background.jpg';

function Home() {
	return (
		<div>
			<div className="home" style={{ height: '700px' }}>
				{/* Slider Section */}
				<div className="hero_slider_container">
					<div className="hero_slider owl-carousel" style={{ display: 'block' }}>
						<div className="hero_slide">
							<div className="hero_slide_background" style={{ backgroundImage: `url(${Slider})` }}></div>
							<div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
								<div className="hero_slide_content text-center">
									<h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Programming Made <span>Simple</span>  !</h1>
								</div>
							</div>
						</div>

						{/* <div className="hero_slide">
							<div className="hero_slide_background" style={{ backgroundImage: `url(${Slider})` }}></div>
							<div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
								<div className="hero_slide_content text-center">
									<h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">WE
DESIGN & DEVELOP <span>Mobile Application</span></h1>
								</div>
							</div>
						</div> */}


						{/* <div className="hero_slide">
							<div className="hero_slide_background" style={{ backgroundImage: `url(${Slider})` }}></div>
							<div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
								<div className="hero_slide_content text-center">
									<h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Get your <span>Education</span> today!</h1>
								</div>
							</div>
						</div> */}

					</div>

					{/* <div className="hero_slider_left hero_slider_nav trans_200"><span className="trans_200">prev</span></div>
					<div className="hero_slider_right hero_slider_nav trans_200"><span className="trans_200">next</span></div> */}
				</div>

			</div>

			<div className="hero_boxes">
				<div className="hero_boxes_inner">
					<div className="container">
						<div className="row">

							<div className="col-lg-4 hero_box_col">
							<Link to="/element">
								<div className="hero_box d-flex flex-row align-items-center justify-content-start">
									<img src="images/professor.svg" className="svg" alt="" />
									<div className="hero_box_content">
										<h2 className="hero_box_title">Offline Classes</h2>
										<Link to="/element" className="hero_box_link">IN HINDI</Link>
									</div>
								</div></Link>
							</div>
						

							<div className="col-lg-4 hero_box_col">
							<Link to="/element">
								<div className="hero_box d-flex flex-row align-items-center justify-content-start">
									<img src="images/earth-globe.svg" className="svg" alt="" />
									<div className="hero_box_content">
										<h2 className="hero_box_title">Two Projects</h2>
										<Link to="/element" className="hero_box_link">FROM SCRATCH</Link>
									</div>
								</div>
								</Link>
							</div>

							<div className="col-lg-4 hero_box_col">
							<Link to="/element">
								<div className="hero_box d-flex flex-row align-items-center justify-content-start">
									<img src="images/books.svg" className="svg" alt="" />
									<div className="hero_box_content">
										<h2 className="hero_box_title">Interview Preparation</h2>
										<Link to="/element" className="hero_box_link">RESUME,ONLINE PROFILE,MOCK INTERVIEW</Link>
									</div>
								</div>
								</Link>
							</div>
								
								
						

						</div>
					</div>
				</div>
			</div>


			<div className="popular page_section">
				<div className="container">
					<div className="row">
						<div className="col">

						</div>
					</div>

					<div _ngcontent-scn-c11="" class="popular page_section">
						<div _ngcontent-scn-c11="" class="container"><
							div _ngcontent-scn-c11="" class="row">
							<div _ngcontent-scn-c11="" class="col">
								<div _ngcontent-scn-c11="" class="section_title text-center">
									<h1 _ngcontent-scn-c11="">Popular Courses</h1>
								</div>
							</div>
						</div>
							<div _ngcontent-scn-c11="" class="row course_boxes">
								<div _ngcontent-scn-c11="" class="col-lg-4 course_box">
								<Link to="/angular">
									<div _ngcontent-scn-c11="" class="card" tabindex="0">
										<img _ngcontent-scn-c11="" class="card-img-top" src="/images/2.png" alt="Angular - The Complete Guide (2021 Edition)  - Programming With Gurudutt" />
										<div _ngcontent-scn-c11="" class="card-body text-center">
											<div _ngcontent-scn-c11="" class="card-title">
												<Link to="/angular">Angular - The Complete Guide (2021 Edition)</Link>
											</div>
											<div _ngcontent-scn-c11="" class="card-text">Master Angular 11 (latest version) and build awesome, reactive web apps.</div>
										</div>
										<div _ngcontent-scn-c11="" class="price_box d-flex flex-row align-items-center">
											<div _ngcontent-scn-c11="" class="course_author_image">
												<img _ngcontent-scn-c11="" src="/images/gurudutt.PNG" alt="Gurudutt - Programming With Gurudutt" />
											</div>
											<div _ngcontent-scn-c11="" class="course_author_name">Gurudutt Sharma,
													<span _ngcontent-scn-c11="">Author</span>
											</div>
											<div _ngcontent-scn-c11="" class="course_price d-flex flex-column align-items-center justify-content-center">
												<span _ngcontent-scn-c11="">₹4000</span>
											</div>
										</div>
									</div>
                                   </Link>
								</div>
								<div _ngcontent-scn-c11="" class="col-lg-4 course_box">
									<div _ngcontent-scn-c11="" class="card" tabindex="0">
										<img _ngcontent-scn-c11="" class="card-img-top" src="/images/3.png" alt="React - The Complete Guide (2021 Edition)  - Programming With Gurudutt" />
										<div _ngcontent-scn-c11="" class="card-body text-center">
											<div _ngcontent-scn-c11="" class="card-title">
												<Link to= "/react">React - The Complete Guide (2021 Edition)</Link>
											</div>
											<div _ngcontent-scn-c11="" class="card-text">Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, TypeScript and way more!</div>
										</div>
										<div _ngcontent-scn-c11="" class="price_box d-flex flex-row align-items-center">
											<div _ngcontent-scn-c11="" class="course_author_image">
												<img _ngcontent-scn-c11="" src="/images/gurudutt.PNG" alt="Gurudutt - Programming With Gurudutt" />
											</div>
											<div _ngcontent-scn-c11="" class="course_author_name">Gurudutt Sharma, <span _ngcontent-scn-c11="">Author</span>
											</div>
											<div _ngcontent-scn-c11="" class="course_price d-flex flex-column align-items-center justify-content-center">
												<span _ngcontent-scn-c11="">₹4000</span>
											</div>
										</div>
									</div>
								</div>
								<div _ngcontent-scn-c11="" class="col-lg-4 course_box">
									<div _ngcontent-scn-c11="" class="card" tabindex="0">
										<img _ngcontent-scn-c11="" class="card-img-top" src="/images/1.png" alt="NodeJS - The Complete Guide (JavaScript, Express, MongoDB)  - Programming With Gurudutt" />
										<div _ngcontent-scn-c11="" class="card-body text-center">
											<div _ngcontent-scn-c11="" class="card-title">
												<a _ngcontent-scn-c11="" href="javascript:void(0)">NodeJS - The Complete Guide (JavaScript, Express, MongoDB)</a>
											</div>
											<div _ngcontent-scn-c11="" class="card-text">Master Node JS, build REST APIs with Node.js and Exress add Authentication, use MongoDB &amp; much more!
																									</div>
										</div>
										<div _ngcontent-scn-c11="" class="price_box d-flex flex-row align-items-center">
											<div _ngcontent-scn-c11="" class="course_author_image">
												<img _ngcontent-scn-c11="" src="/images/gurudutt.PNG" alt="Gurudutt - Programming With Gurudutt" />
											</div>
											<div _ngcontent-scn-c11="" class="course_author_name">Gurudutt Sharma,
																											 <span _ngcontent-scn-c11="">Author</span>
											</div>
											<div _ngcontent-scn-c11="" class="course_price d-flex flex-column align-items-center justify-content-center">
												<span _ngcontent-scn-c11="">₹4000</span>
											</div>
										</div>
									</div>
								</div>
								<div _ngcontent-scn-c11="" class="col-lg-4 course_box">
									<div _ngcontent-scn-c11="" class="card" tabindex="0">
										<img _ngcontent-scn-c11="" class="card-img-top" src="/images/4.png" alt="MERN Stack - The Complete Guide  - Programming With Gurudutt" />
										<div _ngcontent-scn-c11="" class="card-body text-center">
											<div _ngcontent-scn-c11="" class="card-title">
												<a _ngcontent-scn-c11="" href="javascript:void(0)">MERN Stack - The Complete Guide</a>
											</div>
											<div _ngcontent-scn-c11="" class="card-text">The Best Resource for Building Amazing Full-Stack Apps with the Best in MongoDB, Express, React and Node.js
																																 </div>
										</div>
										<div _ngcontent-scn-c11="" class="price_box d-flex flex-row align-items-center">
											<div _ngcontent-scn-c11="" class="course_author_image">
												<img _ngcontent-scn-c11="" src="/images/gurudutt.PNG" alt="Gurudutt - Programming With Gurudutt" />
											</div>
											<div _ngcontent-scn-c11="" class="course_author_name">Gurudutt Sharma, <span _ngcontent-scn-c11="">Author</span></div>
											<div _ngcontent-scn-c11="" class="course_price d-flex flex-column align-items-center justify-content-center">
												<span _ngcontent-scn-c11="">₹6000</span>
											</div>
										</div>
									</div>
								</div>
								<div _ngcontent-scn-c11="" class="col-lg-4 course_box">
									<div _ngcontent-scn-c11="" class="card" tabindex="0">
										<img _ngcontent-scn-c11="" class="card-img-top" src="/images/5.png" alt="MEAN Stack - The Complete Guide  - Programming With Gurudutt" />
										<div _ngcontent-scn-c11="" class="card-body text-center">
											<div _ngcontent-scn-c11="" class="card-title">
												<a _ngcontent-scn-c11="" href="javascript:void(0)">MEAN Stack - The Complete Guide</a>
											</div>
											<div _ngcontent-scn-c11="" class="card-text">The Best Resource for Building Amazing Full-Stack Apps with the Best in MongoDB, Express, Angular and Node.js</div>
										</div>
										<div _ngcontent-scn-c11="" class="price_box d-flex flex-row align-items-center">
											<div _ngcontent-scn-c11="" class="course_author_image">
												<img _ngcontent-scn-c11="" src="/images/gurudutt.PNG" alt="Gurudutt - Programming With Gurudutt" /></div>
											<div _ngcontent-scn-c11="" class="course_author_name">Gurudutt Sharma,
																																									 <span _ngcontent-scn-c11="">Author</span>
											</div>
											<div _ngcontent-scn-c11="" class="course_price d-flex flex-column align-items-center justify-content-center">
												<span _ngcontent-scn-c11="">₹6000</span>
											</div>
										</div>
									</div>
								</div>
								<div _ngcontent-scn-c11="" class="col-lg-4 course_box">
									<div _ngcontent-scn-c11="" class="card" tabindex="0">
										<img _ngcontent-scn-c11="" class="card-img-top" src="/images/6.png" alt="Ultimate AWS Certified Developer Associate 2021  - Programming With Gurudutt" />
										<div _ngcontent-scn-c11="" class="card-body text-center">
											<div _ngcontent-scn-c11="" class="card-title">
												<a _ngcontent-scn-c11="" href="javascript:void(0)">Ultimate AWS Certified Developer Associate 2021</a>
											</div>
											<div _ngcontent-scn-c11="" class="card-text">Become an AWS Certified Developer! Learn all Amazon Web Services Developer topics. PASS the AWS Certified Developer Exam</div>
										</div>
										<div _ngcontent-scn-c11="" class="price_box d-flex flex-row align-items-center">
											<div _ngcontent-scn-c11="" class="course_author_image">
												<img _ngcontent-scn-c11="" src="/images/gurudutt.PNG" alt="Gurudutt - Programming With Gurudutt" /></div>
											<div _ngcontent-scn-c11="" class="course_author_name">Gurudutt Sharma, <span _ngcontent-scn-c11="">Author</span></div>
											<div _ngcontent-scn-c11="" class="course_price d-flex flex-column align-items-center justify-content-center">
												<span _ngcontent-scn-c11="">₹4000</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>






			{/* <div className="popular page_section">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="section_title text-center">
								<h1>Popular Courses</h1>
							</div>
						</div>
					</div>

					<div className="row course_boxes">

						<div className="col-lg-4 course_box">
							<div className="card">
								<img className="card-img-top" src="images/course_1.jpg" alt="https://unsplash.com/@kellybrito" />
								<div className="card-body text-center">
									<div className="card-title"><a href="courses.html">Angular - The complete guide (2021 Edition)</a></div>
									<div className="card-text">Master Angular 11 (latest version) and build awesome, reactive web apps</div>
								</div>
								<div className="price_box d-flex flex-row align-items-center">
									<div className="course_author_image">
										<img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh" />
									</div>
									<div className="course_author_name">Gurudutt Sharma <span>Author</span></div>
									<div className="course_price d-flex flex-column align-items-center justify-content-center"><span>
										₹4000
</span></div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 course_box">
							<div className="card">
								<img className="card-img-top" src="images/course_2.jpg" alt="https://unsplash.com/@cikstefan" />
								<div className="card-body text-center">
									<div className="card-title"><a href="courses.html">Beginners guide to HTML</a></div>
									<div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
								</div>
								<div className="price_box d-flex flex-row align-items-center">
									<div className="course_author_image">
										<img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh" />
									</div>
									<div className="course_author_name">Gurudutt Sharma <span>Author</span></div>
									<div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
								</div>
							</div>
						</div>


						<div className="col-lg-4 course_box">
							<div className="card">
								<img className="card-img-top" src="images/course_3.jpg" alt="https://unsplash.com/@dsmacinnes" />
								<div className="card-body text-center">
									<div className="card-title"><a href="courses.html">Advanced Photoshop</a></div>
									<div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
								</div>
								<div className="price_box d-flex flex-row align-items-center">
									<div className="course_author_image">
										<img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh" />
									</div>
									<div className="course_author_name">Gurudutt Sharma <span>Author</span></div>
									<div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}



			<div _ngcontent-dhl-c7="" class="services page_section">
				<div _ngcontent-dhl-c7="" className="container">
					<div _ngcontent-dhl-c7="" className="row">
						<div _ngcontent-dhl-c7="" className="col">
							<div _ngcontent-dhl-c7="" className="section_title text-center">
								<h1 _ngcontent-dhl-c7="">Our Services</h1>
							</div></div></div>
					<div _ngcontent-dhl-c7="" className="row services_row">
						<div _ngcontent-dhl-c7="" className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
							<div _ngcontent-dhl-c7="" className="icon_container d-flex flex-column justify-content-end">
								<img _ngcontent-dhl-c7="" src="/images/exam.svg" alt="Exam - Programming With Gurudutt" />
							</div><h3 _ngcontent-dhl-c7="">classNameroom Training</h3><p _ngcontent-dhl-c7="">
								Regular attendance in classNamees helps student to interact with other individuals of their own age, be better disciplined, follow a regular schedule, and improve their physical fitness and mental alertness. classNameroom learning helps students and teachers know each other in a better manner.</p>
						</div><div _ngcontent-dhl-c7="" className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
							<div _ngcontent-dhl-c7="" className="icon_container d-flex flex-column justify-content-end">
								<img _ngcontent-dhl-c7="" src="/images/professor.svg" alt="Projects - Programming With Gurudutt" />
							</div><h3 _ngcontent-dhl-c7="">Two Projects From Scratch</h3>
							<p _ngcontent-dhl-c7="">Once you complete reading and understanding the fundamentals, it is time to try it out. If you are learning a new technology, start by building a small product using it.</p></div>
						<div _ngcontent-dhl-c7="" className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
							<div _ngcontent-dhl-c7="" className="icon_container d-flex flex-column justify-content-end">
								<img _ngcontent-dhl-c7="" src="/images/mortarboard.svg" alt="Mock Interview - Programming With Gurudutt" />
							</div><h3 _ngcontent-dhl-c7="">2 Mock interview</h3><p _ngcontent-dhl-c7="">The purpose of a mock interview is to provide you with an opportunity to practice your interviewing skills in an environment similar to an actual interview. A mock interview is a great opportunity to become familiar with interview questions and interview etiquette.</p>
						</div></div></div></div>




			<div _ngcontent-dhl-c7="" className="events page_section">
				<div _ngcontent-dhl-c7="" className="container">
					<div _ngcontent-dhl-c7="" className="row">
						<div _ngcontent-dhl-c7="" className="col">
							<div _ngcontent-dhl-c7="" className="section_title text-center">
								<h1 _ngcontent-dhl-c7="">Upcoming Classes</h1>
							</div>
						</div>
					</div>
					<div _ngcontent-dhl-c7="" className="event_items">
					</div><div _ngcontent-dhl-c7="" className="row event_item course_box">
						<div _ngcontent-dhl-c7="" className="col">
							<div _ngcontent-dhl-c7="" className="row d-flex flex-row align-items-end">
								<div _ngcontent-dhl-c7="" className="col-lg-2 order-lg-1 order-2">
									<div _ngcontent-dhl-c7="" className="event_date d-flex flex-column align-items-center justify-content-center">
										<div _ngcontent-dhl-c7="" className="event_day">20</div>
										<div _ngcontent-dhl-c7="" className="event_month">March</div></div></div>
								<div _ngcontent-dhl-c7="" className="col-lg-6 order-lg-2 order-3">
									<div _ngcontent-dhl-c7="" className="event_content" tabindex="0">
										<div _ngcontent-dhl-c7="" className="event_name"><a _ngcontent-dhl-c7="" href="javascript:void(0)" className="trans_200">Angular - The Complete Guide (2021 Edition)</a></div>
										<div _ngcontent-dhl-c7="" className="event_location">With two live projects from scratch, Free GIT (Version Control) classNamees</div>
										<p _ngcontent-dhl-c7="">Master Angular 11 (latest version) and build awesome, reactive web apps.</p></div></div>
								<div _ngcontent-dhl-c7="" class="col-lg-4 order-lg-3 order-1">
									<div _ngcontent-dhl-c7="" className="event_image"><img _ngcontent-dhl-c7="" src="/images/2.png" alt="Angular - The Complete Guide (2021 Edition)" /></div></div></div></div></div>
					<div _ngcontent-dhl-c7="" className="row event_item course_box">
						<div _ngcontent-dhl-c7="" className="col"><div _ngcontent-dhl-c7="" className="row d-flex flex-row align-items-end"><div _ngcontent-dhl-c7="" className="col-lg-2 order-lg-1 order-2"><div _ngcontent-dhl-c7="" className="event_date d-flex flex-column align-items-center justify-content-center"><div _ngcontent-dhl-c7="" className="event_day">20</div><div _ngcontent-dhl-c7="" className="event_month">March</div>
						</div></div>
							<div _ngcontent-dhl-c7="" className="col-lg-6 order-lg-2 order-3">
								<div _ngcontent-dhl-c7="" className="event_content" tabindex="0">
									<div _ngcontent-dhl-c7="" className="event_name"><a _ngcontent-dhl-c7="" href="javascript:void(0)" className="trans_200">React - The Complete Guide (2021 Edition)</a></div>
									<div _ngcontent-dhl-c7="" className="event_location">With two live projects from scratch, Free GIT (Version Control) classNamees</div><p _ngcontent-dhl-c7="">Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, TypeScript and way more!</p></div></div>
							<div _ngcontent-dhl-c7="" className="col-lg-4 order-lg-3 order-1">
								<div _ngcontent-dhl-c7="" className="event_image"><img _ngcontent-dhl-c7="" src="/images/3.png" alt="React - The Complete Guide (2021 Edition)" /></div></div></div></div></div>
					<div _ngcontent-dhl-c7="" className="row event_item course_box"><div _ngcontent-dhl-c7="" className="col">
						<div _ngcontent-dhl-c7="" className="row d-flex flex-row align-items-end">
							<div _ngcontent-dhl-c7="" className="col-lg-2 order-lg-1 order-2">
								<div _ngcontent-dhl-c7="" className="event_date d-flex flex-column align-items-center justify-content-center">
									<div _ngcontent-dhl-c7="" className="event_day">20</div>
									<div _ngcontent-dhl-c7="" className="event_month">March</div></div></div><div _ngcontent-dhl-c7="" className="col-lg-6 order-lg-2 order-3">
								<div _ngcontent-dhl-c7="" className="event_content" tabindex="0"><div _ngcontent-dhl-c7="" className="event_name"><a _ngcontent-dhl-c7="" href="javascript:void(0)" className="trans_200">NodeJS - The Complete Guide (JavaScript, Express, MongoDB)</a></div>
									<div _ngcontent-dhl-c7="" className="event_location">With two live projects from scratch, Free GIT (Version Control) classNamees</div><p _ngcontent-dhl-c7="">Master Node JS, build REST APIs with Node.js and Exress add Authentication, use MongoDB &amp; much more!</p></div></div>
							<div _ngcontent-dhl-c7="" className="col-lg-4 order-lg-3 order-1"><div _ngcontent-dhl-c7="" className="event_image"><img _ngcontent-dhl-c7="" src="/images/1.png" alt="NodeJS - The Complete Guide (JavaScript, Express, MongoDB)" /></div></div></div></div></div><div _ngcontent-dhl-c7="" className="row event_item course_box">
						<div _ngcontent-dhl-c7="" className="col"><div _ngcontent-dhl-c7="" className="row d-flex flex-row align-items-end"><div _ngcontent-dhl-c7="" className="col-lg-2 order-lg-1 order-2"><div _ngcontent-dhl-c7="" className="event_date d-flex flex-column align-items-center justify-content-center"><div _ngcontent-dhl-c7="" className="event_day">10</div>
							<div _ngcontent-dhl-c7="" className="event_month">April</div></div></div>
							<div _ngcontent-dhl-c7="" className="col-lg-6 order-lg-2 order-3"><div _ngcontent-dhl-c7="" className="event_content" tabindex="0"><div _ngcontent-dhl-c7="" className="event_name"><a _ngcontent-dhl-c7="" href="javascript:void(0)" className="trans_200">MERN Stack - The Complete Guide</a></div>
								<div _ngcontent-dhl-c7="" className="event_location">With two live projects from scratch, Free GIT (Version Control) classNamees</div>
								<p _ngcontent-dhl-c7="">The Best Resource for Building Amazing Full-Stack Apps with the Best in MongoDB, Express, React and Node.js</p></div></div>
							<div _ngcontent-dhl-c7="" className="col-lg-4 order-lg-3 order-1"><div _ngcontent-dhl-c7="" className="event_image"><img _ngcontent-dhl-c7="" src="/images/4.png" alt="MERN Stack - The Complete Guide" /></div></div></div></div></div>
					<div _ngcontent-dhl-c7="" className="row event_item course_box"><div _ngcontent-dhl-c7="" className="col"><div _ngcontent-dhl-c7="" className="row d-flex flex-row align-items-end"><div _ngcontent-dhl-c7="" className="col-lg-2 order-lg-1 order-2"><div _ngcontent-dhl-c7="" className="event_date d-flex flex-column align-items-center justify-content-center">
						<div _ngcontent-dhl-c7="" className="event_day">10</div><div _ngcontent-dhl-c7="" className="event_month">April</div></div></div><div _ngcontent-dhl-c7="" className="col-lg-6 order-lg-2 order-3">
							<div _ngcontent-dhl-c7="" className="event_content" tabindex="0"><div _ngcontent-dhl-c7="" className="event_name"><a _ngcontent-dhl-c7="" href="javascript:void(0)" className="trans_200">MEAN Stack - The Complete Guide</a></div>
								<div _ngcontent-dhl-c7="" className="event_location">With two live projects from scratch, Free GIT (Version Control) classNamees</div><p _ngcontent-dhl-c7="">The Best Resource for Building Amazing Full-Stack Apps with the Best in MongoDB, Express, Angular and Node.js</p></div></div>
						<div _ngcontent-dhl-c7="" className="col-lg-4 order-lg-3 order-1"><div _ngcontent-dhl-c7="" className="event_image"><img _ngcontent-dhl-c7="" src="/images/5.png" alt="MEAN Stack - The Complete Guide" /></div></div></div></div></div>
					<div _ngcontent-dhl-c7="" className="row event_item course_box"><div _ngcontent-dhl-c7="" className="col"><div _ngcontent-dhl-c7="" className="row d-flex flex-row align-items-end">
						<div _ngcontent-dhl-c7="" className="col-lg-2 order-lg-1 order-2"><div _ngcontent-dhl-c7="" className="event_date d-flex flex-column align-items-center justify-content-center"><div _ngcontent-dhl-c7="" className="event_day">10</div>
							<div _ngcontent-dhl-c7="" className="event_month">April</div></div></div><div _ngcontent-dhl-c7="" className="col-lg-6 order-lg-2 order-3"><div _ngcontent-dhl-c7="" className="event_content" tabindex="0"><div _ngcontent-dhl-c7="" className="event_name"><a _ngcontent-dhl-c7="" href="javascript:void(0)" className="trans_200">Ultimate AWS Certified Developer Associate 2021</a></div>
								<div _ngcontent-dhl-c7="" className="event_location">With two live projects from scratch, Free GIT (Version Control) classNamees</div><p _ngcontent-dhl-c7="">Become an AWS Certified Developer! Learn all Amazon Web Services Developer topics. PASS the AWS Certified Developer Exam</p></div></div><div _ngcontent-dhl-c7="" className="col-lg-4 order-lg-3 order-1">
							<div _ngcontent-dhl-c7="" className="event_image"><img _ngcontent-dhl-c7="" src="/images/6.png" alt="Ultimate AWS Certified Developer Associate 2021" />
							</div></div></div></div></div></div></div>




			{/* <div className="register">

				<div className="container-fluid">

					<div className="row row-eq-height">
						<div className="col-lg-6 nopadding">



							<div className="register_section d-flex flex-column align-items-center justify-content-center">
								<div className="register_content text-center">
									<h1 className="register_title">Register now and get a discount <span>50%</span> discount until 1 January</h1>
									<p className="register_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
									<div className="button button_1 register_button mx-auto trans_200"><a href="#">register now</a></div>
								</div>
							</div>

						</div>

						<div className="col-lg-6 nopadding">



							<div className="search_section d-flex flex-column align-items-center justify-content-center">
								<div className="search_background" style={{ backgroundImage: "url('images/search_background.jpg')" }}></div>
								<div className="search_content text-center">
									<h1 className="search_title">Search for your course</h1>
									<form id="search_form" className="search_form" action="post">
										<input id="search_form_name" className="input_field search_form_name" type="text" placeholder="Course Name" required="required" data-error="Course name is required." />
										<input id="search_form_category" className="input_field search_form_category" type="text" placeholder="Category" />
										<input id="search_form_degree" className="input_field search_form_degree" type="text" placeholder="Degree" />
										<button id="search_submit_button" type="submit" className="search_submit_button trans_200" value="Submit">search course</button>
									</form>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div> */}



			{/* <div className="services page_section">

				<div className="container">
					<div className="row">
						<div className="col">
							<div className="section_title text-center">
								<h1>Our Services</h1>
							</div>
						</div>
					</div>

					<div className="row services_row">

						<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
							<div className="icon_container d-flex flex-column justify-content-end">
								<img src="images/earth-globe.svg" alt="" />
							</div>
							<h3>Online Courses</h3>
							<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
						</div>

						<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
							<div className="icon_container d-flex flex-column justify-content-end">
								<img src="images/exam.svg" alt="" />
							</div>
							<h3>Indoor Courses</h3>
							<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
						</div>

						<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
							<div className="icon_container d-flex flex-column justify-content-end">
								<img src="images/books.svg" alt="" />
							</div>
							<h3>Amazing Library</h3>
							<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
						</div>

						<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
							<div className="icon_container d-flex flex-column justify-content-end">
								<img src="images/professor.svg" alt="" />
							</div>
							<h3>Exceptional Professors</h3>
							<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
						</div>

						<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
							<div className="icon_container d-flex flex-column justify-content-end">
								<img src="images/blackboard.svg" alt="" />
							</div>
							<h3>Top Programs</h3>
							<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
						</div>

						<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
							<div className="icon_container d-flex flex-column justify-content-end">
								<img src="images/mortarboard.svg" alt="" />
							</div>
							<h3>Graduate Diploma</h3>
							<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
						</div>

					</div>
				</div>
			</div> */}



			{/* <div className="testimonials page_section">
				<div className="testimonials_background" style={{ backgroundImage: "url('images/testimonials_background.jpg')" }}></div>
				<div className="testimonials_background_container prlx_parent">
					<div className="testimonials_background prlx" style={{ backgroundImage: "url('images/testimonials_background.jpg')" }}></div>
				</div>
				<div className="container">

					<div className="row">
						<div className="col">
							<div className="section_title text-center">
								<h1>What our students say</h1>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-10 offset-lg-1">

							<div className="testimonials_slider_container">


								<div className="owl-carousel owl-theme testimonials_slider">


									<div className="owl-item">
										<div className="testimonials_item text-center">
											<div className="quote">“</div>
											<p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
											<div className="testimonial_user">
												<div className="testimonial_image mx-auto">
													<img src="images/testimonials_user.jpg" alt="" />
												</div>
												<div className="testimonial_name">james cooper</div>
												<div className="testimonial_title">Graduate Student</div>
											</div>
										</div>
									</div>

									<div className="owl-item">
										<div className="testimonials_item text-center">
											<div className="quote">“</div>
											<p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
											<div className="testimonial_user">
												<div className="testimonial_image mx-auto">
													<img src="images/testimonials_user.jpg" alt="" />
												</div>
												<div className="testimonial_name">james cooper</div>
												<div className="testimonial_title">Graduate Student</div>
											</div>
										</div>
									</div>


									<div className="owl-item">
										<div className="testimonials_item text-center">
											<div className="quote">“</div>
											<p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
											<div className="testimonial_user">
												<div className="testimonial_image mx-auto">
													<img src="images/testimonials_user.jpg" alt="" />
												</div>
												<div className="testimonial_name">james cooper</div>
												<div className="testimonial_title">Graduate Student</div>
											</div>
										</div>
									</div>

								</div>

							</div>
						</div>
					</div>

				</div>
			</div> */}


			{/* <div className="events page_section">
				<div className="container">

					<div className="row">
						<div className="col">
							<div className="section_title text-center">
								<h1>Upcoming Events</h1>
							</div>
						</div>
					</div>

					<div className="event_items">


						<div className="row event_item">
							<div className="col">
								<div className="row d-flex flex-row align-items-end">

									<div className="col-lg-2 order-lg-1 order-2">
										<div className="event_date d-flex flex-column align-items-center justify-content-center">
											<div className="event_day">07</div>
											<div className="event_month">January</div>
										</div>
									</div>

									<div className="col-lg-6 order-lg-2 order-3">
										<div className="event_content">
											<div className="event_name"><a className="trans_200" href="#">Student Festival</a></div>
											<div className="event_location">Grand Central Park</div>
											<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
										</div>
									</div>

									<div className="col-lg-4 order-lg-3 order-1">
										<div className="event_image">
											<img src="images/event_1.jpg" alt="https://unsplash.com/@theunsteady5" />
										</div>
									</div>

								</div>
							</div>
						</div>


						<div className="row event_item">
							<div className="col">
								<div className="row d-flex flex-row align-items-end">

									<div className="col-lg-2 order-lg-1 order-2">
										<div className="event_date d-flex flex-column align-items-center justify-content-center">
											<div className="event_day">07</div>
											<div className="event_month">January</div>
										</div>
									</div>

									<div className="col-lg-6 order-lg-2 order-3">
										<div className="event_content">
											<div className="event_name"><a className="trans_200" href="#">Open day in the Univesrsity campus</a></div>
											<div className="event_location">Grand Central Park</div>
											<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
										</div>
									</div>

									<div className="col-lg-4 order-lg-3 order-1">
										<div className="event_image">
											<img src="images/event_2.jpg" alt="https://unsplash.com/@claybanks1989" />
										</div>
									</div>

								</div>
							</div>
						</div>


						<div className="row event_item">
							<div className="col">
								<div className="row d-flex flex-row align-items-end">

									<div className="col-lg-2 order-lg-1 order-2">
										<div className="event_date d-flex flex-column align-items-center justify-content-center">
											<div className="event_day">07</div>
											<div className="event_month">January</div>
										</div>
									</div>

									<div className="col-lg-6 order-lg-2 order-3">
										<div className="event_content">
											<div className="event_name"><a className="trans_200" href="#">Student Graduation Ceremony</a></div>
											<div className="event_location">Grand Central Park</div>
											<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
										</div>
									</div>

									<div className="col-lg-4 order-lg-3 order-1">
										<div className="event_image">
											<img src="images/event_3.jpg" alt="https://unsplash.com/@juanmramosjr" />
										</div>
									</div>

								</div>
							</div>
						</div>

					</div>

				</div>
			</div> */}

		</div>

	);
}
export default Home;