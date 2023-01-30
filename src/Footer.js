import React from "react";

const Footer = () => {
    return (
        <>
            <div className="container-fluid px-md-5" style={{ background: '#2d3436', color: 'white' }}>
                <div className="row py-5">
                    <div className="col-md-4">
                        <h2>Footer Content</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Temporibus ipsam maiores eaque ab voluptatum aperiam commodi
                            nobis deserunt ut soluta!</p>
                    </div>
                    <div className="col-2">
                        <h3>Links</h3>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                    </div>
                    <div className="col-2">
                        <h3>Links</h3>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                    </div>

                    <div className="col-2">
                        <h3>Links</h3>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                    </div>
                    <div className="col-2">
                        <h3>Links</h3>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                        <a href="#" style={{display:'block'}}>link</a>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ background: '#636e72' }}>
                <p>copyright by Anand Dewangan 2023</p>
            </div>
        </>
    )
}

export default Footer;