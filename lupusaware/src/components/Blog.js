import NeonSign from '../img/neonsign.jpg'

export default function Blog(){

    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <div className='home-heroImage'>
                <div className='hero-div2'>
                    <div className="hero-div2-box">
                        <img style={{display:'flex', objectFit:'cover', width:'100%', height: 'auto'}} src={NeonSign}></img>
                    </div>
                </div>
                <div className="hero-div1">
                    <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'top'}}>Contact</h1>
                    <div className="hero-div1-box">
                        <p style={{padding: '35px'}}>Welcome to Lupus Awareness! My name is Jeremy, and I made this site to share resources and my experience with having Lupus. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}