import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import Thumb1 from '../../assets/images/resource/testi-1.jpg';
import Thumb2 from '../../assets/images/resource/testi-2.jpg';
import BlogDetails from '../../assets/images/resource/news-details.jpg';
import BlogImage1 from '../../assets/images/blog/blog-image1.jpg';
import BlogImage2 from '../../assets/images/blog/blog-image2.jpg';
import BlogImage3 from '../../assets/images/blog/blog-image3.jpg';

function NewsDetails() {
    return (
        <>
            <Header />
            <PageTitle
                title="News Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/news-details', title: 'News Details' },
                ]}
            />
             <section className="blog-details pt-120 pb-120">
                <div className="container-lg">
                    <div className="funfact__wrp">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-details__left">
                                    <div className="blog-details__img">
                                        <img src={BlogDetails} alt="Image"/>
                                        <div className="blog-details__date">
                                            <span className="day">28</span>
                                            <span className="month">Aug</span>
                                        </div>
                                    </div>
                                    <div className="blog-details__content">
                                        <ul className="list-unstyled blog-details__meta">
                                            <li><Link to="/news-details"><i className="fas fa-user-circle"></i> Admin</Link>
                                            </li>
                                            <li><Link to="/news-details"><i className="fas fa-comments"></i> 02
                                                    Comments</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-details__title">Delivering the best web design agency</h3>
                                        <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
                                        <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet </p>
                                        <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet </p>
                                    </div>
                                    <div className="blog-details__bottom">
                                        <p className="blog-details__tags"> <span>Tags</span> <Link to="/news-details">Business</Link> <Link to="/news-details">Agency</Link></p>
                                        <div className="blog-details__social-list"> <Link to="/news-details"><i className="fab fa-twitter"></i></Link> <Link to="/news-details"><i className="fab fa-facebook"></i></Link> <Link to="/news-details"><i className="fab fa-pinterest-p"></i></Link> <Link to="/news-details"><i className="fab fa-instagram"></i></Link> </div>
                                    </div>
                                    <div className="nav-links">
                                        <div className="prev">
                                            <Link to="/news-details" rel="prev">Bring to the table win-win survival strategies</Link>
                                        </div>
                                        <div className="next">
                                            <Link to="/news-details" rel="next">How to lead a healthy &amp; well-balanced life</Link>
                                        </div>
                                    </div>
                                    <div className="comment-one">
                                        <h3 className="comment-one__title">2 Comments</h3>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image"> <img src={Thumb2} alt="Image"/> </div>
                                            <div className="comment-one__content">
                                                <h3>Kevin Martin</h3>
                                                <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod. </p>
                                                <Link to="/news-details" className="theme-btn btn-one comment-one__btn">Reply</Link>
                                            </div>
                                        </div>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image"> <img src={Thumb1} alt="Image"/> </div>
                                            <div className="comment-one__content">
                                                <h3>Sarah Albert</h3>
                                                <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</p>
                                                <Link to="/news-details" className="theme-btn btn-one comment-one__btn">Reply</Link>
                                            </div>
                                        </div>
                                        <div className="comment-form">
                                            <h3 className="comment-form__title mb-30">Leave a Comment</h3>
                                            <form id="contact_form" name="contact_form" className=""
                                                action="#" method="post">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message"></textarea>
                                                </div>
                                                <div className="mb-3">
                                                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                                    <button type="submit" className="btn-one" data-loading-text="Please wait...">Submit Comment</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar">
                                    <div className="sidebar__single sidebar__search">
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search here"/>
                                            <button type="submit"><i className="far fa-search"></i></button>
                                        </form>
                                    </div>
                                    <div className="sidebar__single sidebar__post">
                                        <h3 className="sidebar__title">Latest Posts</h3>
                                        <ul className="sidebar__post-list list-unstyled">
                                            <li>
                                                <div className="sidebar__post-image"> <img src={BlogImage1} alt="Image"/> </div>
                                                <div className="sidebar__post-content">
                                                    <h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">Top crypto exchange influencers</Link> </h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image"> <img src={BlogImage2} alt="Image"/> </div>
                                                <div className="sidebar__post-content">
                                                    <h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">Necessity may give us best virtual court</Link> </h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image"> <img src={BlogImage3} alt="Image"/> </div>
                                                <div className="sidebar__post-content">
                                                    <h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">You should know about business plan</Link> </h3>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__category">
                                        <h3 className="sidebar__title">Categories</h3>
                                        <ul className="sidebar__category-list list-unstyled">
                                            <li><Link to="/news-details">Blueprint Design<span className="icon-right-arrow"></span></Link> </li>
                                            <li className="active"><Link to="/news-details">Transforming Design<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to="/news-details">Landscape Design<span className="icon-right-arrow"></span></Link> </li>
                                            <li><Link to="/news-details">Urban Design<span className="icon-right-arrow"></span></Link> </li>
                                            <li><Link to="/news-details">industrial design<span className="icon-right-arrow"></span></Link> </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__tags">
                                        <h3 className="sidebar__title">Tags</h3>
                                        <div className="sidebar__tags-list"> <Link to="#">All Project</Link> <Link
                                                to="#">Consultancy</Link> <Link to="#">Experience</Link> <Link to="#">Interior</Link>
                                            <Link to="#">Design</Link>
                                        </div>
                                    </div>
                                    <div className="sidebar__single sidebar__comments">
                                        <h3 className="sidebar__title">Recent Comments</h3>
                                        <ul className="sidebar__comments-list list-unstyled">
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p>A wordpress commenter on <br />launch new mobile app</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p> <span>John Doe</span> on template:</p>
                                                    <h5>comments</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p>A wordpress commenter on <br /> launch new mobile app</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p> <span>John Doe</span> on template:</p>
                                                    <h5>comments</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
}

export default NewsDetails;
