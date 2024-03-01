import { StyleSheet } from "react-native";
import { hp } from "../../Common/functions";


export const styles = StyleSheet.create({
    touchLeft: {
        position: "absolute",
        zIndex: 1,
        left: hp(2),
    },
    touchRight: {
        position: "absolute",
        zIndex: 1,
        right: hp(2),
    },

});