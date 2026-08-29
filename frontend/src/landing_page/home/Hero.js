import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container' style={{marginBottom:"120px"}}>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='p-5 w-75 mx-auto d-block' />
                <h1 className='mt-4'>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <Link to='/signup' className='p-2 btn btn-primary fs-5 mb-5 mt-4' style={{width:"18%", margin: '0 auto'}}>Signup Now</Link>
            </div>
        </div>
    );
}

export default Hero;