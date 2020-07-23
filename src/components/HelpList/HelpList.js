import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
class HelpList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('/api/requests')
            .then(response => response.json())
            .then(data => this.setState({data}));
    }

    render() {
        const studentList = this.state.data.map((student) =>
            <ListGroup.Item>
                {student.name}
                <Badge variant="secondary">{student.type}</Badge>
            </ListGroup.Item>
        );
        return (
            <Card>
                <ListGroup variant="flush">
                    {studentList}
                </ListGroup>
            </Card>
            

        )
            

        

    }
    
}
export default HelpList;