import React from 'react';
import KelasEkspor from '../../assets/images/icon-kelasekspor.png';

function FeatureClass() {
    return (
        <div className='container'>
            <div className='kelasekspor d-flex justify-content-between'>
                <h3>Kelas Ekspor</h3>
                <h6 className='text-danger'>Lihat Semua</h6>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                <div className="col">
                    <div className="card h-100">
                        <img src={KelasEkspor}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Fundamental</h5>
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
                            <h5 className="card-title text-center">Intermediate</h5>
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
                            <h5 className="card-title text-center">Advance</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default FeatureClass;