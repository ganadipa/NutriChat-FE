import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import { Home, List, Users, BarChart, ClipboardList } from 'lucide-react-native';

export default function Dashboard() {
  return (
    <View className="flex-1 bg-gray-900 p-4">
      <View className="flex-row items-center mb-4">
        <Text className="text-orange-500 text-2xl font-bold">Nutrichat</Text>
      </View>
      <View className="bg-gray-800 p-4 rounded-xl">
        <View className="flex-row items-center space-x-3">
          <Image source={{ uri: 'https://via.placeholder.com/50' }} className="w-14 h-14 rounded-full" />
          <View>
            <Text className="text-white text-lg font-semibold">Timotius Vivaldi G.</Text>
            <Text className="text-gray-400">Lvl 1</Text>
            <View className="h-2 w-32 bg-gray-700 rounded-full mt-1">
              <View className="h-full bg-orange-500 w-2/3 rounded-full" />
            </View>
          </View>
        </View>
      </View>
      <View className="bg-gray-800 p-4 rounded-xl mt-4">
        <Text className="text-white text-sm mb-2">Evaluasi Harian</Text>
        <Text className="text-gray-400 text-xs">
          Minggu ini kamu mengonsumsi kalori 10% lebih banyak daripada minggu lalu! Kamu hampir memenuhi target.
        </Text>
        <View className="flex-row justify-between mt-2">
          <View>
            <Text className="text-orange-500 text-2xl font-bold">2081 kkal</Text>
            <Text className="text-gray-400 text-xs">Total Kalori</Text>
          </View>
          <View>
            <Text className="text-orange-500 text-2xl font-bold">68%</Text>
            <Text className="text-gray-400 text-xs">Persentase RDI</Text>
          </View>
        </View>
      </View>
      <View className="mt-4">
        {['Breakfast', 'Lunch', 'Dinner', 'Snack'].map((meal) => (
          <TouchableOpacity key={meal} className="bg-gray-800 p-4 rounded-xl mb-2">
            <Text className="text-white">Add {meal}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Tabs>
        <Tabs.Screen name="home" options={{ tabBarIcon: () => <Home color="white" size={24} /> }} />
        <Tabs.Screen name="to-do" options={{ tabBarIcon: () => <List color="white" size={24} /> }} />
        <Tabs.Screen name="community" options={{ tabBarIcon: () => <Users color="white" size={24} /> }} />
        <Tabs.Screen name="tracker" options={{ tabBarIcon: () => <BarChart color="white" size={24} /> }} />
        <Tabs.Screen name="evaluate" options={{ tabBarIcon: () => <ClipboardList color="white" size={24} /> }} />
      </Tabs>
    </View>
  );
}
