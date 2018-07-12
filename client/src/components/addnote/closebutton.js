import React from 'react';
import {View, Button, Text} from 'native-base';

export default class CloseButton extends React.Component {
    constructor(props) {
        super(props);
    }

    closeModal = (value) => {
        this.props.setModalVisible(value);
    }
    render() {
        return (
            <Button
                primary
                onPress={() => {
                    this.closeModal(!this.state.modalVisible);
                }}> 
                <Text>✖</Text>
            </Button>
        )
    }
}