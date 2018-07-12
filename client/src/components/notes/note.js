import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Card, Textarea, Input, CardItem, Body } from 'native-base';

export default class Note extends React.Component {
    render() {
        return(
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Input placeholder="Title of your note"/>
                            <Textarea rowSpan={5} bordered placeholder="Write your note :)" />
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