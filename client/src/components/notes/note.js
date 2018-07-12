import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Card, Textarea, Input, CardItem, Body, Row, Col, Grid, Button, Text, Left, Right,} from 'native-base';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            userid: 1,
            new: false
        }
    }

    saveNote = (state) => {
        this.props.saveNote(state);
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
                                onChangeText={(title) => this.setState({title})} 
                                style={{width: '100%'}}
                            />
                            <Textarea 
                                rowSpan={3} 
                                value={this.state.text} 
                                value={((this.props.new) ? this.state.text : this.props.text)} 
                                bordered placeholder="Write your note :D" 
                                style={{width: '100%'}}
                            />
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Left>
                                    <Col>
                                        <Button 
                                            success 
                                            onPress={() => this.saveNote(this.state)}
                                        >
                                            <Text>SAVE</Text>
                                        </Button>   
                                    </Col>
                                </Left>
                                <Right>
                                    <Col>
                                        <Button danger>
                                            <Text>CANCEL</Text>
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