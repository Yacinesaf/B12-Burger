import React from 'react';
import restaurant from './assets/imgAbout.jpg'


function About({isEnglish}) {
  return (
    <div className='container-fluid p-2 p-md-5 m-0 aboutBg'>
      <div className='row px-4 px-md-5 aboutRow'>
        <div className='col-12 col-xl-7 order-2 order-xl-1 about'>
          <h2 className='aboutTitle'>{isEnglish ? 'About us' : 'A propos'}</h2>
          {isEnglish ? 
            <p className='aboutText'>
            Welcome to B12 burger. We're dedicated to providing you the very best of Burgers, with an emphasis on size and taste.
            <br/>
            Founded in 2018, we have come a long way from our beginnings in Laval,Quebec.
            <br />
            Our passion for exquisite burgers drove us to start B12 Burger.
            <br/>
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.    
            <br/>
            <br/>
            Sincerely,
            <br/>
            <br/>
            B12 Burger team</p>
          :
          <p className='aboutText'>
          Bienvenue au B12 Burger. Nous nous engageons à vous offrir le meilleur des hamburgers, en mettant l'accent sur la taille et le goût.
           <br/>
           Fondée en 2018, nous avons parcouru un long chemin depuis nos débuts à Laval, au Québec.
           <br />
           Notre passion pour les hamburgers exquis nous a poussés à lancer le B12 Burger.
           <br/>
           Nous espérons que vous apprécierez nos produits autant que nous aimerons vous les offrir. Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter.
           <br/>
           <br/>
           Cordialement,
           <br/>
           <br/>
           Équipe B12 Burger </p>
          }
        </div>
        <div className='col-12 col-xl-5 order-1 order-xl-2'>
        <img src={restaurant} alt='img' className='AboutImage' /> 
        </div>
      </div>
    </div>
  );
}

export default About;