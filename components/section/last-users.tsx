import { UsageHistoryData } from "@/interfaces/usage";
import { formatRelativeTime } from "@/utils/formatters";
import { User } from "lucide-react-native";
import { Text, View } from "react-native";

interface LastUsersProps {
  data: UsageHistoryData[];
}

export const LastUsers = ({ data }: LastUsersProps) => {
  if (data.length === 0) {
    return (
      <View className="px-5 mb-6">
        <Text className="text-xl font-urban-bold text-black mb-3">
          Last Users
        </Text>
        <View className="bg-white rounded-2xl p-4">
          <Text className="text-sm text-gray-500 text-center">
            No usage history available
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="px-5 mb-6">
      <Text className="text-xl font-urban-bold text-black mb-3">
        Last Users
      </Text>
      <View className="bg-white rounded-2xl p-4 gap-3">
        {data.map((record) => (
          <View
            key={record.id}
            className="flex-row items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
          >
            <View className="flex-row items-center flex-1">
              <View className="w-10 h-10 bg-purple rounded-full items-center justify-center">
                <User color="#6a1b9a" size={20} />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-sm font-urban-semibold text-black">
                  {record.user.name}
                </Text>
                <Text className="text-xs font-urban text-black/60">
                  {record.user.NIM} • {record.user.studyProgram}
                </Text>
                <Text className="text-xs font-urban text-black/60">
                  {formatRelativeTime(record.date)}
                </Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-lg font-urban-bold text-black">
                {record.usage}L
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
