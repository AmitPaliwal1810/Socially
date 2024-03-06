import {Dimensions, ScrollView, Text, View} from 'react-native';
import {CustomeButton, TopNavigation} from '../Components';
import tw from 'twrnc';
import {color} from '..';

import {LineChart} from 'react-native-chart-kit';
import {useState} from 'react';

const WeeklyLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthlyLabels = ['1 W', '2 W', '3 W', '4 W'];
const weekly = [5000, 1200, 2560, 8000, 4520, 2569, 1010];
const monthly = [50000, 128000, 12560, 58000];

const userData = {
  userName: 'Amit Paliwal',
  facebook: 8555,
  instagram: 50000,
  twitter: 100000,
};

export const Dashboard = () => {
  const [tab, setTab] = useState<string>('weekly');
  return (
    <>
      <TopNavigation />

      <ScrollView>
        <View style={tw`h-full flex-1 mt-4 px-6 gap-y-6 `}>
          <Text style={tw`text-black text-4xl`}>Dashboard</Text>
          <View
            style={[
              tw`w-full p-4 rounded-2`,
              {
                backgroundColor: color.primary,
              },
            ]}>
            <Text style={tw`text-black text-xl`}>
              Name: {userData.userName}
            </Text>
          </View>
          <View
            style={[
              tw`w-full p-4 rounded-2`,
              {
                backgroundColor: color.primary,
              },
            ]}>
            <Text style={tw`text-black text-xl`}>
              Facebook: {userData.facebook}
            </Text>
            <Text style={tw`text-black text-xl`}>
              Instagram: {userData.instagram}
            </Text>
            <Text style={tw`text-black text-xl`}>
              Twitter: {userData.twitter}
            </Text>
          </View>
          <View style={tw`w-full justify-start items-center gap-4`}>
            <View style={tw`w-full flex-row justify-start items-center gap-4`}>
              <CustomeButton
                onClick={() => setTab('weekly')}
                text="Track Weekly"
                style={[
                  tw`h-12 w-30 rounded-lg flex justify-center items-center`,
                  {
                    backgroundColor:
                      tab === 'weekly' ? color.primary_1 : color.primary,
                  },
                ]}
                textStyle={tw`text-black text-xl `}
              />
              <CustomeButton
                onClick={() => setTab('monthly')}
                text="Track Monthly"
                style={[
                  tw`h-12 w-30 rounded-lg flex justify-center items-center`,
                  {
                    backgroundColor:
                      tab === 'monthly' ? color.primary_1 : color.primary,
                  },
                ]}
                textStyle={tw`text-black text-xl `}
              />
            </View>
            <LineChart
              data={{
                labels: tab === 'weekly' ? WeeklyLabels : monthlyLabels,
                datasets: [
                  {
                    data: tab === 'weekly' ? weekly : monthly,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 50}
              height={320}
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: color.primary,
                backgroundGradientFrom: color.primary_1,
                backgroundGradientTo: color.primary_1,
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 8,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: color.primary_1,
                },
              }}
              style={tw`rounded-2`}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
