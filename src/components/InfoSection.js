import React, { Component } from 'react';
import '../css/Services.css';
import Image1 from '../img/intelligence2.jpg';
import Image2 from '../img/training.jpg';
import Image3 from '../img/customer support.jpg';
import Image4 from '../img/cctv.jpg';
import Image5 from '../img/quality.jpg';
import Image6 from '../img/news.jpg';
import Image7 from '../img/statistics.jpg';
import Image8 from '../img/jobs.jpg';
import Image9 from '../img/arm-forces.jpg';
import Image10 from '../img/others.jpg';
import Image11 from '../img/news.jpg';





class InfoSection extends Component {
    render() {
        return (

            <div className="InfoSection" >
                <hr />
                <h2>OUR SERVICES</h2>
                <hr />

                <ul className="honeycomb">
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image1} alt={Image1} />
                        <div className="honeycomb-cell_title">Intelligence</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image2} alt={Image2} />
                        <div className="honeycomb-cell_title">Training</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image3} alt={Image3} />
                        <div className="honeycomb-cell_title">Customer Support</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image4} alt={Image4} />
                        <div className="honeycomb-cell_title">CCTV</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image5} alt={Image5} />
                        <div className="honeycomb-cell_title">Quality</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image6} alt={Image6} />
                        <div className="honeycomb-cell_title">AIP</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image7} alt={Image7} />
                        <div className="honeycomb-cell_title">Statistics</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image8} alt={Image8} />
                        <div className="honeycomb-cell_title">Advantage Jobs</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image9} alt={Image9} />
                        <div className="honeycomb-cell_title">Arm Forces</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image10} alt={Image10} />
                        <div className="honeycomb-cell_title">Other Support</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src={Image11} alt={Image11} />
                        <div className="honeycomb-cell_title">News</div>
                    </li>
                    <li className="honeycomb-cell honeycomb_Hidden">
                    </li>

                </ul>

            </div>

        );

    }

}

export default InfoSection;
