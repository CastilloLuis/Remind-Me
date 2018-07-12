import React from 'react';
import { Container, Header, Button, Icon, Fab, Text, Content, View } from 'native-base';

export default class OpenButton extends React.Component {
    constructor(props) {
        super(props);
    };
    openModal = (visible) => {
        this.props.setModalVisible(visible);
    }
    render() {
        return(
            <View style={{ flex: 1 }}>
                <Fab
                    style={{ backgroundColor: 'red' }}
                    position="bottomRight" 
                    onPress={() => {
                            console.log('adding2 item');
                            this.openModal(true);
                        }
                    }
                    >
                    <Icon name="add" />
                </Fab>
            </View>  
        )
    }
}