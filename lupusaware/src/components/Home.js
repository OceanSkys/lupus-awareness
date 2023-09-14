import Saying from '../img/saying.jpg';
import Friends from '../img/friends.jpg';

export default function Home(){

    return(
    <div>
        <div className='box1' style={{display:'flex', justifyContent:'center'}}>
            <div className='home-heroImage'>
            
                <div className="hero-div1">
                    <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'top'}}>Lupus Awareness</h1>
                    <div className="hero-div1-box">
                        <p style={{padding: '35px'}}>Welcome to Lupus Awareness! My name is Jeremy, and I made this site to share resources and my experience with having Lupus. </p>
                    </div>
                </div>
                <div className='hero-div2'>
                    <div className="hero-div2-box">
                        <img style={{display:'flex', objectFit:'cover', width:'100%', height: 'auto'}} src={Saying}></img>
                    </div>
                </div>
            </div>
        </div>
        <div className='space'>
            <div className='space-box'>
                <h2>Hello</h2>
            </div>
        </div>
        <div className='box2' style={{display:'flex', justifyContent:'center', paddingBottom: '80px'}}>
            <div className='home-heroImage'>
                <div className='hero-div2'>
                    <div className="hero-div2-box">
                        <img style={{display:'flex', objectFit:'cover', width:'100%', height: 'auto'}} src={Friends}></img>
                    </div>
                </div>
                <div className="hero-div1">
                    <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'top'}}>Not Alone</h1>
                    <div className="hero-div1-box">
                        <p style={{padding: '35px'}}>While having Lupus can seem like a lonely journey sometimes, the fact is that you aren't alone! </p>
                    </div>
                </div>
            </div>
        </div>
    </div>       
    );
}