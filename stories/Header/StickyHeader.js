import React, { Component } from 'react'
import { boolean } from '@storybook/addon-knobs/react'
import {
  Button,
  Collapse,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Header,
  Headers,
  HeaderContent,
  HeaderSearch,
  HeaderRightZone,
  HeaderSocialsZone,
  HeaderToggler,
  HeaderLinkZone,
  Icon,
  LinkList,
  LinkListItem,
  Nav,
  NavItem,
  NavLink,
  HeaderBrand,
  UncontrolledDropdown
} from '../../src'

// eslint-disable-next-line react/prop-types
// eslint rule has to be disable for few lines here as Storybook addons will go in error
// if PropTypes are declared in these components
export class SlimHeader extends Component {
  state = {
    collapsed: true
  }

  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <Header type="slim" theme={this.props.theme}>
        <HeaderContent>
          <HeaderBrand>Ente appartenenza/Owner</HeaderBrand>
          <HeaderLinkZone>
            <HeaderToggler
              onClick={() =>
                this.setState({ collapsed: !this.state.collapsed })
              }>
              <span>Ente appartenenza/Owner</span>
              <Icon icon="it-expand" />
            </HeaderToggler>
            <Collapse isOpen={!this.state.collapsed} header>
              <LinkList>
                <LinkListItem href="#">Link 1</LinkListItem>
                <LinkListItem href="#" active>
                  Link 2 Active
                </LinkListItem>
              </LinkList>
            </Collapse>
          </HeaderLinkZone>
          <HeaderRightZone>
            <UncontrolledDropdown nav tag="div">
              <DropdownToggle nav caret>
                ITA
                <Icon icon="it-expand" />
              </DropdownToggle>
              <DropdownMenu>
                <Row>
                  <Col size="12">
                    <LinkList>
                      <LinkListItem tag={DropdownItem} href="#">
                        <span>ITA</span>
                      </LinkListItem>
                      <LinkListItem tag={DropdownItem} href="#">
                        <span>ENG</span>
                      </LinkListItem>
                    </LinkList>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="it-access-top-wrapper">
              <Button color="primary" size="sm">
                Accedi
              </Button>
            </div>
          </HeaderRightZone>
        </HeaderContent>
      </Header>
    )
  }
}

export class CenterHeader extends Component {
  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <Header type="center" theme={this.props.theme}>
        <HeaderContent>
          <HeaderBrand iconName="it-code-circle">
            <h2>Lorem Ipsum Lorem Ipsum</h2>
            <h3>Inserire qui la tag line</h3>
          </HeaderBrand>
          <HeaderRightZone>
            <HeaderSocialsZone label="Seguici su">
              <ul>
                <li>
                  <a href="#" aria-label="Facebook" target="_blank">
                    <Icon icon="it-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Github" target="_blank">
                    <Icon icon="it-github" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" target="_blank">
                    <Icon icon="it-twitter" />
                  </a>
                </li>
              </ul>
            </HeaderSocialsZone>
            <HeaderSearch label="Cerca" iconName="it-search" />
          </HeaderRightZone>
        </HeaderContent>
      </Header>
    )
  }
}

export class NavHeader extends Component {
  state = {
    collapsed: true
  }

  render() {
    const isOpen = !this.state.collapsed
    return (
      // eslint-disable-next-line react/prop-types
      <Header type="navbar" theme={this.props.theme}>
        <HeaderContent expand="lg" megamenu>
          <HeaderToggler
            onClick={() => this.setState({ collapsed: isOpen })}
            aria-controls="nav1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <Icon icon="it-burger" />
          </HeaderToggler>
          <Collapse
            isOpen={isOpen}
            navbar
            header
            onOverlayClick={() => this.setState({ collapsed: isOpen })}>
            <div className="menu-wrapper">
              <Nav navbar>
                <NavItem active>
                  <NavLink href="#" active>
                    <span>link 1 active </span>
                    <span className="sr-only">current</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" disabled>
                    Link 2
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link 3</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link 4</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" disabled>
                    Megamenu label
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    )
  }
}

const StickyHeader = () => {
    const open = boolean('show', true)
    if(!open){
      return (
        <Headers sticky>
           <SlimHeader/>
           <CenterHeader/>
           <NavHeader/>
        </Headers>
      )
    }
  else { 
  return (
      <Headers>
      <SlimHeader/>
      <CenterHeader/>
      <NavHeader/>
      </Headers>
  )
  }
}

export default StickyHeader
