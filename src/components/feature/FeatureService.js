import React from 'react';

// import css
import './FeatureService.css';

// import icon
import Icon1 from '../../assets/images/icon-pelatihan.png';
import Icon2 from '../../assets/images/icon-supplier.png';
import Icon3 from '../../assets/images/icon-buyer.png';
import Icon4 from '../../assets/images/icon-komunitas.png';
import Icon5 from '../../assets/images/icon-cekdata.png';
import Icon6 from '../../assets/images/icon-forwader.png';
import Icon7 from '../../assets/images/icon-permintaan.png';
import Icon8 from '../../assets/images/icon-lainnya.png';

function FeatureService() {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-5 g-4 justify-content-center">
                <div className="col">
                    <div className="card h-100">
                        <img src={Icon1}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Pelatihan</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Icon2}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Supplier</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Icon3}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Buyer</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Icon4}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Komunitas</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Icon5}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Cek Data</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Icon6}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Forwader</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Icon6}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Simulasi</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Icon7}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Permintaan</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Icon8}
                            alt="..."
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Lainnya</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default FeatureService;