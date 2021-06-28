import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {useSelector} from "react-redux";
import {COLORS, dummyData, FONTS, icons, SIZES} from "../constants";
import {IconButton, TabButton} from "../components";
import VerticalTextButton from "../components/VerticalTextButton";
import Svg, {Circle} from "react-native-svg";

const Order = ({navigation, route}) => {
    const appTheme = useSelector(state => state.appTheme);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("Milk Tea");
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        let {selectedLocation} = route.params;
        setSelectedLocation(selectedLocation)
    })
    useEffect(() => {
        let menuList = dummyData.menuList.filter((menuItem) => menuItem.category === selectedCategory)
        setMenu(menuList)
    }, [selectedCategory])

    function renderHeaderSection() {
        return (
            <SafeAreaView
                style={{
                    height: 200,
                    backgroundColor: COLORS.primary,
                    alignItems: "center",
                    paddingVertical: SIZES.padding
                }}
            >
                {/*NavBar*/}
                <View
                    style={{
                        flexDirection: "row",
                        paddingHorizontal: SIZES.radius,
                        alignItems: "center"
                    }}
                >
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => navigation.goBack()}
                    />
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h1,
                                fontSize: 25
                            }}>
                            Pick-up Order
                        </Text>
                    </View>
                    <View style={{width: 25}}/>
                </View>
                {/*Location*/}
                <View
                    style={{
                        marginTop: SIZES.radius,
                        backgroundColor: COLORS.white1,
                        paddingHorizontal: SIZES.radius,
                        paddingVertical: 5,
                        borderRadius: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.primary,
                            ...FONTS.body3,
                        }}
                    >
                        {selectedLocation?.title}
                    </Text>
                </View>

            </SafeAreaView>
        );
    }

    function renderTopBarSection() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    height: 50,
                    marginTop: SIZES.radius,
                    justifyContent: "center",
                    paddingLeft: SIZES.padding * 2,
                    paddingRight: SIZES.padding,

                }}
            >
                {/*TabButtons*/}
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row"
                    }}>
                    <TabButton
                        containerStyle={{
                            width: 70
                        }}
                        label={'Menu'}
                        selected={selectedTab === 0}
                        onPress={() => setSelectedTab(0)}
                    />
                    <TabButton
                        containerStyle={{
                            width: 100
                        }}
                        label={'Previous'}
                        selected={selectedTab === 1}
                        onPress={() => setSelectedTab(1)}
                    />
                    <TabButton
                        containerStyle={{
                            width: 93
                        }}
                        label={'Favourite'}
                        selected={selectedTab === 2}
                        onPress={() => setSelectedTab(2)}
                    />
                </View>
                {/*OrderNumber*/}
                <View
                    style={{
                        width: 35,
                        height: 35,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: COLORS.primary
                    }}>
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}>0</Text>
                </View>

            </View>
        );
    }

    function renderSideBar() {
        return (
            <View>
                <Svg height='65' width='65' viewBox='0 0 65 65'>
                    <Circle
                        cx={'5'}
                        cy={'60'}
                        r={'60'}
                        fill={COLORS.primary}/>
                </Svg>
                <ScrollView
                    style={{
                        backgroundColor: COLORS.primary,
                    }}
                    contentContainerStyle={{
                        marginTop: 5,
                        width: 65,
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1

                    }}
                >
                    <VerticalTextButton
                        label={'Snack'}
                        selected={selectedCategory === 'Snack'}
                        onPress={() => setSelectedCategory('Snack')}
                        containerStyle={{
                            marginTop: 0,
                        }}/>
                    <VerticalTextButton
                        label={'Coffee'}
                        selected={selectedCategory === 'Coffee'}
                        onPress={() => setSelectedCategory('Coffee')}
                        containerStyle={{
                            marginTop: 50,
                            width: 60
                        }}/>
                    <VerticalTextButton
                        label={'Smoothie'}
                        selected={selectedCategory === 'Smoothie'}
                        onPress={() => setSelectedCategory('Smoothie')}
                        containerStyle={{
                            marginTop: 60,
                            width: 90
                        }}/>
                    <VerticalTextButton
                        label={'Specialtea'}
                        selected={selectedCategory === 'Specialtea'}
                        onPress={() => setSelectedCategory('Specialtea')}
                        containerStyle={{
                            marginTop: 80,
                            width: 95
                        }}/>
                    <VerticalTextButton
                        label={'Milk Tea'}
                        selected={selectedCategory === 'Milk Tea'}
                        onPress={() => setSelectedCategory('Milk Tea')}
                        containerStyle={{
                            marginTop: 30,
                            width: 50,
                            lineHeight: 0
                        }}/>

                </ScrollView>
                <Svg height={65} width={65} viewBox={'0 0 65 65'}>
                    <Circle
                        cx={'5'}
                        cy={'0'}
                        r={'60'}
                        fill={COLORS.primary}/>
                </Svg>
            </View>

        );
    }

    return (
        <View style={styles.container}>
            {/*HeaderSection*/}
            {renderHeaderSection()}
            {/*DetailSection*/}
            <View
                style={{
                    flex: 1,
                    backgroundColor: appTheme.backgroundColor,
                    marginTop: -45,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                }}
            >
                {/*TabBar*/}
                {renderTopBarSection()}
                {/*SideBar&Listing*/}
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row"
                    }}>
                    {/*Side    Bar*/}
                    {renderSideBar()}
                    {/*Listing*/}
                    <FlatList
                        contentContainerStyle={{
                            marginTop: SIZES.padding,
                            paddingBottom: 50
                        }}
                        data={menu}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) => {

                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => navigation.navigate('OrderDetail', {selectedItem: item})}>
                                    <View
                                        style={{
                                            height: 150,
                                            paddingHorizontal: SIZES.padding,
                                            marginTop: index > 0 ? SIZES.padding : 0,
                                            alignItems: "flex-end",
                                            justifyContent: "flex-end"
                                        }}>

                                        {/*Thumbnail*/}

                                        <View
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: SIZES.padding,
                                                width: 130,
                                                height: 140,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: SIZES.radius,
                                                backgroundColor: COLORS.lightYellow,
                                                zIndex: 1
                                            }}>
                                            <Image
                                                source={item.thumbnail}
                                                resizeMode={'contain'}
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                }}/>
                                        </View>

                                        {/*Details*/}

                                        <View
                                            style={{
                                                width: '70%',
                                                height: '85%',
                                                paddingLeft: '22%',
                                                paddingRight: SIZES.base,
                                                paddingVertical: SIZES.base,
                                                borderRadius: SIZES.radius,
                                                justifyContent: "space-between",
                                                backgroundColor: COLORS.primary
                                            }}>
                                            <Text
                                                style={{
                                                    color: COLORS.white,
                                                    ...FONTS.h2,
                                                    fontSize: 18,
                                                    lineHeight: 25
                                                }}>
                                                {item.name}
                                            </Text>
                                            <Text
                                                style={{
                                                    color: COLORS.lightYellow,
                                                    ...FONTS.h2,
                                                    fontSize: 18,
                                                    lineHeight: 25
                                                }}>
                                                {item.price}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Order;
