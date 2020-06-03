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
          <div className='row m-0 p-4 align-items-center justify-content-between'>
            <div className='col-2 p-0'>
              <img src={logo} alt='logo' className='logoMobile' />
            </div>
            <div className='col-auto p-0' >
              <button
                onClick={(e) => { console.log(5); this.setState({ menuIsClicked: !this.state.menuIsClicked }) }}
                className={this.state.menuIsClicked ? "hamburger hamburger--spin is-active menubtn" : "hamburger hamburger--spin menubtn"}
                type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;