import Friends from '../img/friends.jpg'

export default function Resources(){

    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <div className='home-heroImage'>
                <div className='hero-div2'>
                    <div className="hero-div2-box">
                        <img style={{display:'flex', objectFit:'cover', width:'100%', height: 'auto'}} src={Friends}></img>
                    </div>
                </div>
                <div className="hero-div1">
                    <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'top'}}>Resources</h1>
                    <div className="hero-div1-box">
                        <p style={{padding: '35px'}}>Resources page! :D </p>
                    </div>
                </div>
            </div>
        </div>
    );
}