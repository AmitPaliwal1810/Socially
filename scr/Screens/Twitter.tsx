import {Text, TextInput, View} from 'react-native';
import {CustomeButton, TopNavigation} from '../Components';
import tw from 'twrnc';
import {useCallback, useState} from 'react';
import {color} from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Twitter = ({navigation}: any) => {
  const [twitter, setTwitter] = useState<string>('');

  const handleSubmit = useCallback(async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      const {response}: any = await fetch('http://localhost:8080/twitter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          twitter: twitter,
        }),
      });
      // Need to add token
      const data = await response.json();
      console.log({data});
    } catch (error) {
      console.log(error);
    }
  }, [twitter]);

  return (
    <>
      <TopNavigation navigation={navigation} />
      <View style={tw`h-full flex-1 mt-4 px-6 gap-y-12 `}>
        <Text style={tw`text-black text-4xl`}>Twitter</Text>
        <View>
          <Text style={tw`text-black text-lg font-semibold`}>
            Enter your twitter link
          </Text>
          <TextInput
            style={[
              tw`h-14 w-full rounded-lg text-black text-2xl px-4`,
              {
                backgroundColor: color.primary,
              },
            ]}
            onChangeText={setTwitter}
            value={twitter}
            placeholder=""
            placeholderTextColor="black"
            autoFocus={true}
          />
        </View>
        <View style={tw`w-full justify-center items-center`}>
          <CustomeButton
            onClick={handleSubmit}
            text="Save"
            style={[
              tw`h-12 w-20 rounded-lg flex justify-center items-center`,
              {
                backgroundColor: color.primary,
              },
            ]}
            textStyle={tw`text-black text-2xl `}
          />
        </View>
      </View>
    </>
  );
};
