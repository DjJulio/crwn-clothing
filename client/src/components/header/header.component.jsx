import React from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCarthidden } from "../../redux/cart/cart.selectors";
import { selectCurrentuser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions.js";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer /*, OptionDiv*/,
  OptionLink
} from "./header.styles.jsx";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  hidden: selectCarthidden
});

const mapDispatchToProps = dispath => ({
  signOutStart: () => dispath(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
