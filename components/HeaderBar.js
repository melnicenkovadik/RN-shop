import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS, FONTS, icons, SIZES} from '../constants'
import { useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "../stores/themeActions";

const HeaderBar = () => {
    const appTheme = useSelector(state => state.appTheme);
    const dispatch = useDispatch();

    const toggleThemeHandler = () => {
        if (appTheme.name === 'light') {
            dispatch(toggleTheme('dark'))

        } else {
            dispatch(toggleTheme('light'))
        }
    }
    return (
        <SafeAreaView
            style={{
                top:0,
                alignItems:"center",
                justifyContent:"center",
                height: 150,
                width: "100%",
                backgroundColor: COLORS.purple,
                flexDirection: 'row',
            }}
        >
            <View
                style={{
                    flex: 1,
                    paddingLeft: SIZES.padding
                }}>
                <Text style={{color: COLORS.white, ...FONTS.h2}}>VaDOS,</Text>
                <Text style={{color: COLORS.white, ...FONTS.h2}}>Welcome Back</Text>
            </View>
            {/* Toggle Button*/}
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'flex-end',
                    marginHorizontal: SIZES.padding,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: COLORS.lightPurple
                }}
                onPress={() => toggleThemeHandler()}>
                {/*Sun*/}
                <View
                    style={{
                        width: 40,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        ...(appTheme.name === 'light') ? styles.selectedLightModeStyle : {},

                    }}>
                    <Image
                        source={icons.sunny}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: COLORS.white
                        }}>

                    </Image>
                </View>
                <View
                    style={{
                        width: 40,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        ...(appTheme.name === 'dark') ? styles.selectedNightModeStyle : {},


                    }}>
                    <Image
                        source={icons.night}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: COLORS.white
                        }}>

                    </Image>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    selectedNightModeStyle: {
        borderRadius: 20,
        backgroundColor: COLORS.black
    },
    selectedLightModeStyle: {
        borderRadius: 20,
        backgroundColor: COLORS.yellow
    }
})




export default HeaderBar;
