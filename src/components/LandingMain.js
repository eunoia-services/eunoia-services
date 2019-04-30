import React,{Component} from 'react';
import clean from '../assets/recycle_waste.svg'
import '../css/LandingMain.css'

export default class LandingMain extends Component{
    render = ()=>{
        return (
        <div className="row h-100 align-items-center">
            <div className="col-12 col-md-6">
                <div class="welcome-text">
                    <h2>Eunoia Services makes your <br/> house management <span>easier</span></h2>
                    <h5>Sit back and relax while we do the heavy lifting for you.</h5>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="welcome-thumbnail">
                    <img src={clean} alt="Cleaning Agent"/>
                </div>
            </div>
        </div>
        );
    }
}