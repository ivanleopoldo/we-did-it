import SafeContainer from "@/components/general/safe-container";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Image, View } from "react-native";
import { ScrollView } from "@/components/general/scroll-view";
import { DynamicImage } from "@/components/general/dynamic-image";

type ListItem = {
  createdAt: string;
  createdBy: string;
  content: string;
  avatar: string;
  username: string;
};

export default function Home() {
  const data: ListItem[] = Array.from({ length: 10 }).map((_, index) => ({
    createdAt: new Date().toISOString(),
    createdBy: "ivanleopoldo",
    content: `This is a sample content for item ${index + 1}.`,
    avatar: "https://github.com/mrzachnugent.png",
    username: "mrzachnugent",
  }));

  function renderItem({ item }: { item: ListItem }) {
    return (
      <View className="items-center gap-2 py-4">
        <View className="px-4 flex-row gap-3">
          <Avatar className="border border-border h-11 w-11" alt="user">
            <AvatarImage source={{ uri: item.avatar }} />
            <AvatarFallback>
              <Text>ZN</Text>
            </AvatarFallback>
          </Avatar>
          <View className="flex-1 gap-1">
            <Text className="font-bold">{item.username}</Text>
            <Text className="text-foreground">{item.content}</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          className="h-48"
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-2 pl-[4.5rem]"
        >
          <DynamicImage uri="https://picsum.photos/1920/1080" />
          <DynamicImage uri="https://picsum.photos/200/300" />
          <DynamicImage uri="https://picsum.photos/200/300" />
          <DynamicImage uri="https://picsum.photos/200/300" />
        </ScrollView>
      </View>
    );
  }

  return (
    <SafeContainer>
      <FlashList
        ItemSeparatorComponent={() => <View className="bg-border h-[1px]" />}
        ListFooterComponent={() => <View className="bg-border h-[1px]" />}
        data={data}
        renderItem={renderItem}
      />
    </SafeContainer>
  );
}
