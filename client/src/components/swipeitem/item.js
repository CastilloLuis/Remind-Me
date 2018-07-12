import React from 'react';
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button } from 'native-base';

export default class SwipeItem extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteNote = (noteid) => {
        this.props.deleteNote(noteid);
    }

    render() {
        return (
            <SwipeRow
                rightOpenValue={-75}
                body={
                    <View>
                    <Text style={{fontWeight: 'bold'}}>{this.props.title}</Text>
                    </View>
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