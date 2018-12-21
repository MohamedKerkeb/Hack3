import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Main.css';


class Main extends Component {
  render() {
    return (
      <div>
        <h1>PAGE D'ACCUEIL</h1>
        <div className="logo">
            <div className="bloc-1">
                <div class="card1">
                <Link to="/quizz"><img src="https://vignette.wikia.nocookie.net/browmanwood/images/8/86/Point_d%27interrogation.png/revision/latest?cb=20130217173859&path-prefix=fr" className="images" alt="avatar" /></Link>
                <h2 class="">QUIZZ</h2>
                </div>
            </div>
            <div>
                <div class="card2">
                <Link to="/wiki"><img src="https://cdn.icon-icons.com/icons2/936/PNG/512/book_icon-icons.com_73655.png" className="images" alt="avatar" /></Link>
                <h2 class="">WIKI</h2>
                </div>
            </div>
        </div>
        <div className="logo2"> 
                <div class="card3">
                <Link to="/ranking"><img src="https://png.pngtree.com/element_origin_min_pic/16/11/27/d1afb36b6b274d3abf0b42cbfe1d0f32.jpg" className="images" alt="avatar" /></Link>
                <h2 class="">RANKING</h2>
            </div>
            <div>
                <div class="card4">
                <Link to="/points"><img src="http://pluspng.com/img-png/flag-logo-png-big-image-png-2400.png" className="images" alt="avatar" /></Link>
                <h2 class="">POINTS</h2>
                </div>
            </div>
        </div>
        <div class="list">
        <h3>CHECKLIST / BILAN</h3>
            <label><input class="item" type="checkbox" checked/><span>Canon G7X</span></label>
            <label><input class="item" type="checkbox"/><span>Canon 70D</span></label>
            <label><input class="item" type="checkbox"/><span>GoPro Hero 3</span></label>
            <label><input class="item" type="checkbox" checked/><span>Macbook Pro 13" i7 16G</span></label>
            <label><input class="item" type="checkbox"/><span>Rode GoMic Pro</span></label>
            <label><input class="item" type="checkbox" checked/><span>SDXC 32G 300MB/s</span></label>
            <label><input class="item" type="checkbox"/><span>External Hard Disk 2TB HDD</span></label>
            <label><input class="item" type="checkbox"/><span>Joby Gorillapod</span></label>
            <label><input class="item" type="checkbox"/><span>Coffe</span></label>
        </div>
      </div>
    );
  }
}

export default Main;