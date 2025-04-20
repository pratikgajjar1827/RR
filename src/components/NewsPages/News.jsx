import React from 'react';
import { Link } from 'react-router-dom';
import NewsImage1 from '../../assets/images/blog/blog-image1.jpg';
import NewsImage2 from '../../assets/images/blog/blog-image2.jpg';
import NewsImage3 from '../../assets/images/blog/blog-image3.jpg';

const blog = [
  { id: 1, img: NewsImage1, title: "Creating innovative strategies for exceptional future outcomes.", subtitle: "Branding", date: "May 15, 2025" },
  { id: 2, img: NewsImage2, title: "Stratify Agency transforms the way we work through the power of AI-driven innovation. ", subtitle: "Design Trends", date: "May 15, 2025" },
  { id: 3, img: NewsImage3, title: "Common UX pinpoints in Dashboard-related projects. ", subtitle: "Marketing", date: "May 15, 2025" },
  { id: 4, img: NewsImage2, title: "Stratify Agency transforms the way we work through the power of AI-driven innovation. ", subtitle: "Design Trends", date: "May 15, 2025" },
  { id: 5, img: NewsImage3, title: "Common UX pinpoints in Dashboard-related projects. ", subtitle: "Marketing", date: "May 15, 2025" },
  { id: 6, img: NewsImage1, title: "Creating innovative strategies for exceptional future outcomes.", subtitle: "Branding", date: "May 15, 2025" },
];

function News() { 
    return (
        <>
        <section class="blog-area pt-130 pb-20">
            <div class="container-lg">
                <div class="row g-5">
                    {blog.map((blog) => (
                        <div key={blog.id} className="col-lg-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="blog__item">
                                <div class="blog__image">
                                    <img src={blog.img} alt="image"/>
                                    <img src={blog.img} alt="image"/>
                                </div>
                                <div class="blog__content">
                                    <ul>
                                        <li>{blog.subtitle}</li>
                                        <li class="date">{blog.date}</li>
                                    </ul>
                                    <h4><Link to="/news-details">{blog.title}</Link></h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default News;
