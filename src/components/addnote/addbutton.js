import React from 'react';
import { Container, Header, Button, Icon, Fab, Text, Content, View } from 'native-base';

export default class OpenButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    };
    openModal = (visible) => {
        this.props.setModalVisible(visible);
    }
    logOut = () => this.props.logOut();
    render() {
        return(
            <View style={{ flex: 1 }}>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: 'red' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                        <Text>+</Text>
                    <Button style={{ backgroundColor: 'blue' }} onPress={() => this.openModal(true)}>
                        <Text>+</Text>
                    </Button>
                    <Button style={{ backgroundColor: 'red' }} onPress={() => this.logOut()}>
                        <Text>X</Text>
                    </Button>
                </Fab>
            </View>  
        )
    }
}