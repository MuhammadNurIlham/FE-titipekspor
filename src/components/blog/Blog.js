import React from 'react';
import KelasEkspor from '../../assets/images/icon-kelasekspor.png';

function Blog() {
    return (
        <div className='container'>
            <div className='blog d-flex justify-content-between'>
                <h3>Blog</h3>
                <h6 className='text-danger'>Lihat Semua</h6>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                <div className="col">
                    <div className="card h-100">
                        <img src={KelasEkspor}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">John Doe</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={KelasEkspor}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Alex Cuy</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={KelasEkspor}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Frans</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={KelasEkspor}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Robert</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Blog;