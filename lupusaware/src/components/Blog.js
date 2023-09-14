import { useNavigate } from 'react-router';
import { Route } from 'react-router-dom';
import NeonSign from '../img/neonsign.jpg'
import Lup from './LupusJourney';

export default function Blog(){

    let navigate = useNavigate();

    return(
        <div>
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center', height: '650px', width: '100%', backgroundColor: 'cyan'}}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', border:'solid', width:'30%', height:'100%', backgroundColor:'white'}}>
                    <p style={{fontSize: '70px', fontWeight:'bold', textDecoration: 'underline'}}>Blog</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', padding:'20px', width:'70%', height: '100%'}}>
                    <p id='buttons' onClick={() => navigate(`Lup`)}>My Diagnosis Story</p>
                    
                </div>
            </div>
        </div>
    );
}