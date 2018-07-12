import React from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import { Container, Button, Right, Icon } from 'native-base';
import OpenButton from './addbutton';
import CloseButton from './closebutton';
import Note from '../notes/note';

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
                    
                    <View style={{marginTop: 20, marginLeft: '82%', width: '100%'}}>
                        <Button
                            transparent
                            dark 
                            style={{width: 50}}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}> 
                            <Icon name='close' />
                        </Button>
                    </View>

                    <Note />
                    
                </Modal>
                <OpenButton 
                    setModalVisible={() => this.setModalVisible()}
                />
            </Container>
          );
    }
}