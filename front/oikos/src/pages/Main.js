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
        <div classNames="list">
        <h3>CHECKLIST / BILAN</h3>
            <label><input className="item" type="checkbox" /><span>J’ai privilégié la vente/achat d’occasion ou le reconditionné plutôt qu’un appareil neuf</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai choisi un appareil porteur d’un logo environnemental</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai débranché mes appareils laissés allumés/en veille</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai coupé l’alimentation de ma box TV/Internet</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai limité le nombre de programmes ou d’onglets ouverts et inutilisés sur mon appareil</span></label>
            <label><input className="item" type="checkbox" /><span>J’ai désactivé les fonctions GPS, Wi-fi, bluetooth de mon téléphone ou de ma tablette quand je n’utilisais pas ces fonctionnalités</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai désactivé le Wi-fi de ma box lorsque je n’en avais pas l’utilité</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai réglé mon ordinateur et mon smartphone en mode « économie d’énergie » quand c’était possible</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai branché mes équipements (ordinateur, imprimante, box) sur une multiprise à interrupteur pour l’éteindre plus régulièrement</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai limité l’usage du cloud au strict nécessaire pour favoriser un stockage en local</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai recyclé mon vieil appareil
</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai limité le nombre de destinataires de mes mails au strict nécessaire
</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai nettoyé ma liste de diffusion email
</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai optimisé la taille des pièces jointes de mon email : compression de fichiers, images en basse définition 
</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai trouvé des alternatives aux sites de transfert de fichiers lourds : clé USB par exemple
</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai supprimé les pièces jointes d’un message auquel je répondais
</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai utilisé des mots-clés précis sur mon moteur de recherche pour limiter la sollicitation des serveurs
</span></label>
            <label><input className="item" type="checkbox"/><span>J’ai supprimé le cache et l’historique de mes recherches
</span></label>
            

        </div>
      </div>
    );
  }
}

export default Main;