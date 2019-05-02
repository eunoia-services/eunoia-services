import React,{Component} from 'react';
import '../css/LandingMain.css'

export default class LandingMain extends Component{
    render = ()=>{
        return (
        <header className="masthead" id='head'>
            {/* <div className='white h-100 w-100'></div> */}
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center head-text">
                        <h1>GIVE YOUR HOME SOME<br/>SHINE</h1>
                        <p>Reliable house cleaning professionals serving bhavnagar area</p>
                    </div>
                </div>
            </div>
        </header>
        );
    }
}