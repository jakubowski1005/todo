import React, { Component } from 'react'
import { Header, Table } from 'semantic-ui-react'

export class TaskList extends Component {
    constructor() {
        super()

        this.state = {
            tasks: [{
                    id: 0,
                    description: 'Be yourself!',
                    isCompleted: false,
                    targetDate: new Date()
                },
                {
                    id: 1,
                    description: 'Drink less beer',
                    isCompleted: false,
                    targetDate: new Date()
                },
                {
                    id: 2,
                    description: 'Exercise everyday',
                    isCompleted: false,
                    targetDate: new Date()
                },
                {
                    id: 3,
                    description: 'Smoke weed everyday',
                    isCompleted: false,
                    targetDate: new Date()
                },
                {
                    id: 4,
                    description: 'Fuck yo girl in da ass',
                    isCompleted: false,
                    targetDate: new Date()
                },
            ]
        }
    }
    render() {
        return (
            <div style={{padding: '100px'}}>
                <Header as='h2'></Header>
                <Table color='black' inverted>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Is Completed?</Table.HeaderCell>
                            <Table.HeaderCell>Target Date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.tasks.map((task) => 
                                <Table.Row>
                                    <Table.Cell>{task.description}</Table.Cell>
                                    <Table.Cell>{task.isCompleted.toString()}</Table.Cell>
                                    <Table.Cell>{task.targetDate.toString()}</Table.Cell>
                                </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default TaskList
