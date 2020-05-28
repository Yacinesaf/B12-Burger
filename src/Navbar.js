import React, { Component } from 'react';
import './styles.css'
import logo from './assets/logo.png'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      scrolled: false
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
    if (scrollPos > heightDiff) {
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
      <div className={this.state.scrolled ? 'navScrolledBgColor' : ''}>
        <div ref='header' className={this.state.scrolled ? 'navScrolled' : 'nav'}>
          <h4 className='navText' >{this.props.isEnglish ? 'HOME' : 'ACCEUIL'}</h4>
          <h4 className='navText' >{this.props.isEnglish ? 'ABOUT US' : 'A PROPOS'}</h4>
          <img src={logo} alt='logo' height={150} width={150} style={{ margin: '0px 20px' }} />
          <h4 className='navText' >BURGERS</h4>
          <h4 className='navText' >{this.props.isEnglish ? 'CONTACT' : 'CONTACTER'}</h4>
        </div>
      </div>
    );
  }
}

export default Navbar;