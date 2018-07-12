import React from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import { Container } from 'native-base';
import OpenButton from './addbutton';

export default class AddNote extends React.Component {
    state = {
        modalVisible: false,
    };
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }   
    render() {
        return (
            <Container>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                            onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <OpenButton 
                    setModalVisible={() => this.setModalVisible()}
                />
            </Container>
          );
    }
}