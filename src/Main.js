import React from 'react';
import './Main.css';

function Main() {
    return (
        <>
            <div id="banner">
                <div className="container py-md-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-title">
                                <h1>Some Heading goes here</h1>
                                <p className='lead'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi hic tenetur rerum suscipit, incidunt molestias quidem magni alias numquam facere aperiam quos debitis libero aliquam dolorem vel natus deserunt? Ipsa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container section">
                <div className="row">
                    <div className="col">
                        <h2 className='section-head'>Some Heading Goes Here</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box">
                                <i class='bx bx-anchor bx-burst' ></i>
                                <h3>Some Heading</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste placeat facere doloribus magni cumque corporis. Voluptate dolores veritatis fuga. Impedit.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <i class='bx bxs-bar-chart-alt-2 bx-burst' ></i>
                                <h3>Some Heading</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste placeat facere doloribus magni cumque corporis. Voluptate dolores veritatis fuga. Impedit.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <i class='bx bxs-diamond bx-burst' ></i>
                                <h3>Some Heading</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste placeat facere doloribus magni cumque corporis. Voluptate dolores veritatis fuga. Impedit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='testimonial' className='section'>
                <div className="container">
                    <div className="row">
                        <h2 className="section-head">Testimonial</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, natus!</p>
                            <img src="https://freepngimg.com/thumb/bill_gates/23973-7-bill-gates-file.png" alt="Bill Gates img" width={150}/>
                            <div className="author">Bill Gates</div>
                            <div className="author-company">Microsoft</div>
                        </div>
                        <div className="col-md-6">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, natus!</p>
                            <img src="https://pngimg.com/uploads/steve_jobs/steve_jobs_PNG33447.png" alt="Steve Jobs img" width={150}/>
                            <div className="author">Steve Jobs</div>
                            <div className="author-company">Apple</div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;