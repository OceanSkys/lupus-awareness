import { useNavigate } from 'react-router';

export default function Lup(){

    let navigate = useNavigate();

    return(
        <div>
            <div style={{display:'flex', flexDirection:'column', alignItems: 'center', height: '650px', width: '100%', backgroundColor: 'cyan'}}>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{display: 'flex', width: '8%', height: 'auto'}}>
                        <p id='blogbtn' onClick={() => navigate(`Lup`)}>{'< Blog'}</p>
                    </div>
                    <div style={{display: 'flex', width: '93%'}}>

                    </div>
                </div>
                <div>
                    <p style={{fontSize: '70px', fontWeight:'bold', textDecoration: 'underline'}}>My Story</p>
                </div>
                <div>
                    <p>yeet</p>
                </div>
            </div>
        </div>
    );
}