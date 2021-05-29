import React from 'react';
import Link from 'next/link';

const ProfessionalSolutions = () => {
    return (
        <div className="solutions-area ptb-110">
            <div className="container">
                <div className="section-title">
                    <h2>We Offer Professional Solutions</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-income"></i>
                            </div>
                            <h3>
                                <Link href="/index-5/#">
                                    <a>Data Analysts</a>
                                </Link>
                            </h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box active">
                            <div className="icon">
                                <i className="flaticon-automatic"></i>
                            </div>
                            <h3>
                                <Link href="/index-5/#">
                                    <a>Automatic Optimization</a>
                                </Link>
                            </h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-locked"></i>
                            </div>
                            <h3>
                                <Link href="/index-5/#">
                                    <a>Security & Surveillance</a>
                                </Link>
                            </h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-molecular"></i>
                            </div>
                            <h3>
                                <Link href="/index-5/#">
                                    <a>Healthcare & Manufacturing</a>
                                </Link>
                            </h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-gear"></i>
                            </div>
                            <h3>
                                <Link href="/index-5/#">
                                    <a>Software Engineers</a>
                                </Link>
                            </h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-ceo"></i>
                            </div>
                            <h3>
                                <Link href="/index-5/#">
                                    <a>IT Professionals</a>
                                </Link>
                            </h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalSolutions;