import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../redux/hook'

type Props = {}

const SummaryScreen = (props: Props) => {
    const count = useAppSelector((e) => e.common)
    return (
        <View>
            <Text>SummaryScreen</Text>
        </View>
    )
}

export default SummaryScreen