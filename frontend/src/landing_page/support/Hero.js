import React from 'react';

function Hero() {
    return (
      <section className='container-fluid' id="supportHero">
        <div className='p-4' id="supportWrapper">
            <h1 className='fs-4'>Support Portal</h1>
            <a href="">Track Tickets</a>
        </div>
        <div className='row p-3 m-3'>
            <div className='col-6 p-4 mt-3'>
                <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
                <input className="mb-2" placeholder='Eg. how do I activate F&O' />
                <br />
                <a href="">Track account opening</a>
                <a href="">Track segment activation</a>
                <a href="">Intraday margins</a>
                <a href="">Kite user manual</a>
            </div>
            <div className='col-6 p-4 mt-3'>
                <h1 className='fs-4'>Featured</h1>
                <ol className='mt-3'>
                    <li><a href="">Current Takeovers and Delisting - January 2026</a></li>
                    <li className='mt-2'><a href="">Latest Intraday leverages - MIS & CO</a></li>
                </ol>
            </div>
        </div>
      </section>
    );
}

export default Hero;