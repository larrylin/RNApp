/**
 * Created by wuyunqiang on 2017/7/25.
 */
import React from 'react';
import {
    TextInput
} from 'react-native';
export default class Input extends React.Component {

    constructor(){
        super();
        this.state = {
            focus:false,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    clear = ()=>{
        Log('this.textinput 执行了这里清除text')
        this.textinput&&this.textinput.clear();
    };

    setRef = (text)=>{
        this.textinput = text;
    };


    //textinput 失去焦点
    blur = ()=>{
        Log('获取实例this.textinput 失去焦点');
        this.refs.textinput&& this.refs.textinput.blur();
    };

    getRef = ()=>{
        Log('获取实例this.textinput',this.textinput);
        return this.textinput;
    };

    onEndEditing = ()=>{
        Log('是否执行了这里 失去焦点')
        this.setState({
            focus:false,
        });
        this.props.onEndEditing&&this.props.onEndEditing()
    }

    render (){
        return (
            <TextInput
                numberOfLines={1}
                underlineColorAndroid={'transparent'}
                {...this.props}
                style={{padding:0,...this.props.style}}
                ref = 'textinput'
                autoFocus = {this.state.focus}
                onEndEditing = {this.onEndEditing}
            />
        )
    }
}
