import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Card } from 'native-base';

export default class Note extends Component {
    return() {
        render(
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            
                        </Body>
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