import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Props } from './type'
import { styles } from './styles';
import { hp } from '../../Common/functions';


const CustomHeader = (props: Props) => {
    const { leftIcon, rightIcon, onPressLeftIcon, onPressRightIcon } = props;
    return (
        <View style={{ marginTop: hp(1), flexDirection: "row" }}>
            {
                leftIcon &&
                <TouchableOpacity onPress={onPressLeftIcon} style={styles.touchLeft}>
                    {leftIcon}
                </TouchableOpacity>
            }
            {
                rightIcon &&
                <TouchableOpacity onPress={onPressRightIcon} style={styles.touchRight}>
                    {rightIcon}
                </TouchableOpacity>
            }
        </View>
    )
}

export default CustomHeader