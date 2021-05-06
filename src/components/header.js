import { Link } from "gatsby";
import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                {/* {data.logo.file.url ? (
                  <img src={data.logo.file.url} alt="logo" />
                ) : (
                    <span>{data.siteName}</span>
                  )} */}
                  CHEF METAFUNI
              </Link>
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
              onKeyDown={() => {
                this.setState({
                  menu: !menu
                });
              }}
              role="none"
            >
              <span></span>
            </div>
            {header === "home" ? (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                  onKeyDown={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li key="home">
                    <Link to="/#home">Home</Link>
                  </li>

                  {data.menus
                    .filter(item => item === "Recipes")
                    .map(t => {
                      return (
                        <li key="Recipes">
                          <Link to={`/recipes`}>Recipes</Link>
                        </li>
                      );
                    })}

                  {data.menus
                    .filter(item => item === "Blogs")
                    .map(t => {
                      return (
                        <li key="Blogs">
                          <Link to={`/blogs`}>Blog</Link>
                        </li>
                      );
                    })}

                  {data.menus
                    .filter(item => item === "Work")
                    .map(t => {
                      return (
                        <li key="Work">
                          <Link to={`/#Work`}>Work</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Testimonials")
                    .map(t => {
                      return (
                        <li key="Testimonials">
                          <Link to={`/#Testimonials`}>Testimonials</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Photos")
                    .map(t => {
                      return (
                        <li key="Photos">
                          <Link to={`/photos`}>Photos</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Contact")
                    .map(t => {
                      return (
                        <li key="Contact">
                          <Link to={`/#Contact`}>Contact</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Social")
                    .map(t => {
                      return (
                        <li key="Social" style={{ transform: 'translateY(3px)' }}>
                          <Link to="https://www.instagram.com/stefano_metafuni_chef/" target="_blank" rel="noreferrer" className="fab fa-instagram">
                          </Link>
                        </li>
                      )
                    })}
                </ul>
              </div>
            ) : (
                <div className="menu">
                  <ul
                    onClick={() => {
                      this.setState({
                        menu: false
                      });
                    }}
                    onKeyDown={() => {
                      this.setState({
                        menu: false
                      });
                    }}
                  >
                    <li key="home">
                      <Link to="/#home">Home</Link>
                    </li>
                    {data.menus
                      .filter(item => item === "Recipes")
                      .map(t => {
                        return (
                          <li key="recipes">
                            <Link to="/recipes">Recipes</Link>
                          </li>
                        );
                      })}
                    {data.menus
                      .filter(item => item === "Blogs")
                      .map(t => {
                        return (
                          <li key="blogs">
                            <Link to="/blogs">Blog</Link>
                          </li>
                        );
                      })}
                    {data.menus
                      .filter(item => item === "Photos")
                      .map(t => {
                        return (
                          <li key="photos">
                            <Link to="/photos">Photos</Link>
                          </li>
                        );
                      })}
                    {data.menus
                      .filter(item => item === "Contact")
                      .map(t => {
                        return (
                          <li key="Contact">
                            <Link to={`/contact`}>Contact</Link>
                          </li>
                        );
                      })}

                    {data.menus
                      .filter(item => item === "Social")
                      .map(t => {
                        return (
                          <li key="Social" style={{ transform: 'translateY(3px)' }}>
                            <a href="https://www.instagram.com/stefano_metafuni_chef/" target="_blank" rel="noreferrer" aria-label="instagram" className="fab fa-instagram"> </a>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              )}
          </div>
        </div>
      </header>
    );
  }
}
