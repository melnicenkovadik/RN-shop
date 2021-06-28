import React from 'react';
import {Image, TouchableOpacity} from "react-native";
import {COLORS} from "../constants";

function IconButton({
                        containerStyle, iconStyle,
                        icon, onPress
                    }) {

    return (
        <TouchableOpacity
            style={{
                alignItems: "center",
                justifyContent: "center",
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                resizeMode={'contain'}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.white,
                    ...iconStyle
                }}
            />
        </TouchableOpacity>
    )
}

export default IconButton;
