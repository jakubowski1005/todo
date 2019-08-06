import React, { Component } from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
//import 'semantic-ui-css'

export class Footer extends Component {
    render() {
        const iconStyling = {
          color: 'grey'
        }
        return (
            <>
               <Segment inverted>
                  <div className="ui container">
                    <Link to="https://github.com/"><Icon name="github" size="huge" style={iconStyling}/></Link>
                    <Link to="https://linkedin.com/"><Icon name="linkedin"  size="huge" style={iconStyling}/></Link>
                    <Link to="https://facebook.com/"><Icon name="facebook"  size="huge" style={iconStyling}/></Link>
                    <Link to="https://instagram.com/"><Icon name="instagram"  size="huge" style={iconStyling}/></Link>
                  </div>
                  <div className="ui container">
                    <p style={iconStyling}>All Rights Reserved 2019 Artur Jakubowski</p>
                  </div>
              </Segment>   
            </>
        )
    }
}

export default Footer

