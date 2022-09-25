import React from 'react'
import PropTypes from 'prop-types'
import {
//   BoltIcon,
//   CircleIcon,
//   GridIcon,
//   ListIcon,
  SearchIcon,
  SparklesIcon,
} from '../assets/Icons'
import {
  NavbarLink,
  NavbarMark,
} from './NavbarParts'
export const NavbarLoggedOut = ({
    onClickNavbarMark,
}) => {
    return (
        <nav className='navbar'>
            <div className='navbar-content'>
                <div className='navbar-container'>
                    <div className='navbar-main'>
                        <NavbarMark onClick={onClickNavbarMark} />
                        <div className='navbar-links'>
                  <NavbarLink
                  className="navbar-link "
                  label="Editorial"
                //   pathname={pathname}
                  to="/"
                />
                  <NavbarLink
                   className="navbar-link labelOnly"
                label="Creative Briefs"
                // onClick={onClickArtistInvites}
                // pathname={pathname}
                to="/creative-briefs"
                />
                <NavbarLink
                    className="navbar-link labelOnly"
                    label="Blog"
                    // pathname={pathname}
                    // to={elloBlogPath}
                    // onClick={trackBlogLink}
                  />
                <NavbarLink
                className="navbar-link labelOnly"
                icon={<SparklesIcon />}
                label="Discover"
                // pathname={pathname}
                to="/discover"
              />
              <NavbarLink
                className="navbar-link labelOnly"
                icon={<SearchIcon />}
                label="Search"
                // pathname={pathname}
                to="/search"
              />
              </div>
             <NavbarLink
              className="navbar-link isLogin"
              label="Login"
              //   onClick={onClickLogin}
            //   pathname={pathname}
              to="/enter"
            />
            <NavbarLink
              className="navbar-link isSignUp"
              label="Sign Up"
            //   onClick={onClickSignup}
            //   pathname={pathname}
            to="/join"
            />
                    </div>
                </div>

            </div>
        </nav>

    )
}