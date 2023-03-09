import React from 'react';

import RekomBuyer from './RekomBuyer';

function RecomendedBuyer() {
    return (
        <div>
            <div className='container'>
                <div className='recomended-buyer d-flex justify-content-between'>
                    <h3>Rekomended Buyer</h3>
                    <h6 className='text-danger'>Lihat Semua</h6>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                    <div className="col">
                        <RekomBuyer names="John Doe" jobs="Ceo of Write Book" />
                    </div>
                    <div className="col">
                        <RekomBuyer names="Alex" jobs="Ceo of Tik Tak" />
                    </div>
                    <div className="col">
                        <RekomBuyer names="Johnson" jobs="Ceo of LandOfDawn" />
                    </div>
                    <div className="col">
                        <RekomBuyer names="Brody" jobs="Ceo of Marksman" />
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default RecomendedBuyer;