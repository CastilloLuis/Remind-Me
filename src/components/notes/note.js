import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Card, Textarea, Input, CardItem, Body, Row, Col, Grid, Button, Text, Left, Right,} from 'native-base';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            userid: this.props.userid,
            new: false
        }
    }

    saveNote = (state) => {
        this.props.saveNote(state);
        this.props.closeWindow();
    }

    updateNote = (state, noteid) => {
        ((this.state.title === '') ? this.state.title = this.props.title : false);
        ((this.state.text === '') ? this.state.text = this.props.text : false);        
        state.noteid = noteid;
        this.props.updateNote(state);
    }

    closeWindow = () => {
        this.props.closeWindow();
    }

    render() {
        return(
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Input 
                                placeholder="Title of your note" 
                                value={((this.props.new) ? this.state.title : this.props.title)} 
                                onChangeText={((this.props.new) ? 
                                                (title) => this.setState({title}) : 
                                                (title) => {
                                                    this.props.title = title; 
                                                    this.setState({title});
                                                }
                                            )}  
                                style={{width: '100%'}} 
                                maxLength={20}
                            />
                            <Textarea 
                                rowSpan={12} 
                                value={((this.props.new) ? this.state.text : this.props.text)} 
                                onChangeText={((this.props.new) ?
                                                (text) => this.setState({text}) :
                                                (text) => {
                                                    this.props.text = text,
                                                    this.setState({text});
                                                }
                                            )} 
                                bordered placeholder="Write your note :)" 
                                style={{width: '100%'}}
                            />
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Left>
                                    <Col>
                                        <Button danger onPress={() => this.closeWindow()}>
                                            <Text>CANCEL</Text>
                                        </Button>  
                                    </Col>
                                </Left>
                                <Right>
                                    <Col>
                                        <Button 
                                            success 
                                            onPress={() => ((this.props.new) ? 
                                                            this.saveNote(this.state) : 
                                                            this.updateNote(this.state, this.props.noteid))
                                                    }
                                        >
                                            <Text>SAVE</Text>
                                        </Button>                                                                                                    
                                    </Col>
                                </Right>
                            </Row>
                        </Grid>
                    </CardItem>
                </Card>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});