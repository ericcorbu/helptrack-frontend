import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class HelpForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.name = React.createRef();
        this.grading = React.createRef();
        this.question = React.createRef();

    }

    handleSubmit(event){
        event.preventDefault();
        var formData = {
            name: this.name.current.value,
            needsGrading: this.grading.current.checked,
            hasQuestion: this.question.current.checked
        }
        
        var xhr = new XMLHttpRequest()
        xhr.open('POST', '/SubmitHelpRequest');
        xhr.send(JSON.stringify(formData));
        
    }

    render() {
        return (
            <Form id="helpForm" onSubmit={this.handleSubmit}>
                <Form.Group controlId="zoomName">
                    <Form.Label>Zoom Name</Form.Label>
                    <Form.Control type="text" ref={this.name} />
                </Form.Group>
                <Form.Group controlId="helpType">
                    <Form.Label>Type of Help</Form.Label>
                    <Form.Check type="radio" name="helpType" value="Grading" ref={this.grading} label="Grading"/>
                    <Form.Check type="radio" name="helpType" value="Question" ref={this.question} label="Question"/>
                </Form.Group>
                <Button type="submit">Ask For Help</Button>
            </Form>
        );
    }
}
export default HelpForm;