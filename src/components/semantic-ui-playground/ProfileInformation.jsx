import React, { Component } from 'react'
import { Header, Image, Segment, Grid } from 'semantic-ui-react'

export class ProfileInformation extends Component {
    render() {
        return (
            <div>
                <Header as='h1'>Hello {this.props.match.params.name} !</Header>
                <Grid>
                    <Grid.Column width={6}>
                        <Image 
                            src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" 
                            size='large' 
                            style={{padding: '20px'}}
                            circular />
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Segment padded='very' inverted></Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default ProfileInformation
