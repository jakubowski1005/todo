import React, { Component } from 'react'
import { Menu, Segment, Icon, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

export class NavigationBar extends Component {
    constructor() {
        super()
        this.state = {
            activeItem: 'home'
        }

        this.logout = this.logout.bind(this);
    }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logout() {
    this.setState({ activeItem: 'logout' });
    AuthenticationService.logout();
  }

    render() {
        const { activeItem } = this.state
        return (
            <Segment inverted>
                <Menu inverted pointing secondary size="huge">
                    <Menu.Item as={Link} to="/" name='Done!' active={activeItem === 'Done!'} onClick={this.handleItemClick}>
                        <Icon name='check' /> Done!
                    </Menu.Item>   
                <Menu.Menu position="right">
                    {AuthenticationService.isUserLoggedIn() &&
                    <Dropdown item text='User'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/profile/username"><Icon name='id card' /> Profile</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/tasks/username"><Icon name='tasks' /> Tasks</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/settings/username"><Icon name='settings' /> Settings</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                        {!AuthenticationService.isUserLoggedIn() &&
                        <Menu.Item
                            as={Link} to="/login"
                            name='sign in'
                            active={activeItem === 'sign in'}
                            onClick={this.handleItemClick}
                        />}
                        {!AuthenticationService.isUserLoggedIn() &&
                        <Menu.Item
                            as={Link} to="/register"
                            name='sign up'
                            active={activeItem === 'sign up'}
                            onClick={this.handleItemClick}
                        />}
                        {AuthenticationService.isUserLoggedIn() &&
                        <Menu.Item
                            as={Link} to="/"
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.logout}
                        />}
                </Menu.Menu>
                </Menu>
            </Segment>
        )
    }
}

export default NavigationBar
