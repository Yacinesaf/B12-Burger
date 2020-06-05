import React, { Component } from 'react';
import './styles.css'
import logo from './assets/logo.png'
import './spinAnimationMenuIcon.css'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      scrolled: false,
      menuIsClicked: false
    }
  }
  componentDidMount() {
    var h1 = parseInt(this.refs.header.offsetHeight);
    window.addEventListener('scroll', this._calcScroll.bind(this, h1));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._calcScroll)
  }


  _calcScroll(h1) {
    var _window = window;
    var heightDiff = parseInt(h1);
    var scrollPos = _window.scrollY;
    if (scrollPos > heightDiff - 100) {
      this.setState({
        scrolled: true,
      });
    } else {
      this.setState({
        scrolled: false,
      });
    }
  }

  render() {
    return (
      <div>
        <div className={`d-lg-block d-none ${this.state.scrolled ? 'navScrolledBgColor ' : 'navUnScrolledBgColor '}`}>
          <div ref='header' className='nav'>
            <h4 className='navText' >{this.props.isEnglish ? 'HOME' : 'ACCEUIL'}</h4>
            <h4 className='navText' >{this.props.isEnglish ? 'ABOUT US' : 'A PROPOS'}</h4>
            <img src={logo} alt='logo' className='logo' />
            <h4 className='navText' >BURGERS</h4>
            <h4 className='navText' >{this.props.isEnglish ? 'CONTACT' : 'CONTACTER'}</h4>
          </div>
        </div>
        <div className={this.state.scrolled ? 'container-fluid navMobileScrolled d-lg-none' : 'container-fluid navMobile d-lg-none'} style={{ height: 'fit-content' }}>
          <div className='row m-0 align-items-center justify-content-between'>
            <div className='col-3 col-md-2 p-0'>
              <img src={logo} alt='logo' className='logoMobile' />
            </div>
            <div className='col-auto p-0' >
              <button
                onClick={(e) => { this.setState({ menuIsClicked: !this.state.menuIsClicked }) }}
                className={this.state.menuIsClicked ? "hamburger hamburger--spin is-active menubtn" : "hamburger hamburger--spin menubtn"}
                type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={`container-fluid ${this.state.menuIsClicked ? 'dropedDown ' : ' dropDown'}`}>
          <div className='row justify-content-center'>
            <div className='col-12 d-block' style={{textAlign : 'center'}}>
              <p className='dropDownTexts'>{this.props.isEnglish ? 'Home' : 'Acceuil'}</p>
            </div>
            <div className='col-12 d-block' style={{textAlign : 'center'}}>
              <p className='dropDownTexts'>{this.props.isEnglish ? 'About us' : 'A propos'}</p>
            </div>
            <div className='col-6 d-block' style={{textAlign : 'center'}}>
              <p className='dropDownTexts'>Burgers</p>
            </div>
            <div className='col-12 d-block' style={{textAlign : 'center'}}>
              <p className='dropDownTexts'>{this.props.isEnglish ? 'Contact' : 'Contacter'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;