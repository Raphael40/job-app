import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
    cons router = useRouter()

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.screen>
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                }}
            </Stack.screen>
        </SafeAreaView>
    )
}

export default Home;