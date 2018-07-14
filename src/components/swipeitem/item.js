import React from 'react';
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button, Right, CardItem } from 'native-base';

export default class SwipeItem extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteNote = (noteid) => {
        this.props.deleteNote(noteid);
    }

    goToNote = () => {
        this.props.goToNote();
    }
    render() {
        return (
            <SwipeRow
                rightOpenValue={-75}
                body={
                        <Button 
                            full  
                            transparent 
                            onPress={() => this.goToNote()} 
                            style={{width:'100%', padding: 0}}
                        >
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                                {this.props.title}
                            </Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </Button>
                }
                right={
                    <Button danger onPress={() => this.deleteNote(this.props.noteid)}>
                    <Icon active name="trash" />
                    </Button>
                }

            />
        );
    }

}