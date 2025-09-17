import React, { useRef } from "react";
import { Entypo } from "@/components/general/entypo";
import { Image } from "@/components/general/image";
import SafeContainer from "@/components/general/safe-container";
import { ScrollView } from "@/components/general/scroll-view";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { FlashList } from "@shopify/flash-list";
import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { ActionSheetRef } from "react-native-actions-sheet";
import { ActionSheet } from "@/components/general/action-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ListItem = {
  createdAt: string;
  createdBy: string;
  content: string;
  avatar: string;
  username: string;
};

export default function Home() {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const insets = useSafeAreaInsets();

  const data: ListItem[] = Array.from({ length: 10 }).map((_, index) => ({
    createdAt: new Date().toISOString(),
    createdBy: "ivanleopoldo",
    content: `This is a sample content for item ${index + 1}.`,
    avatar: "https://github.com/mrzachnugent.png",
    username: "mrzachnugent",
  }));

  function renderItem({ item }: { item: ListItem }) {
    return (
      <View className="items-center gap-2 py-3">
        <View className="px-4 items-center flex-row gap-3">
          <Avatar className="border border-border h-14 w-14" alt="user">
            <AvatarImage source={{ uri: item.avatar }} />
            <AvatarFallback>
              <Text>ZN</Text>
            </AvatarFallback>
          </Avatar>
          <View className="flex-1 gap-1">
            <View className="flex-row items-center justify-between">
              <View className="flex-row gap-1 items-baseline">
                <Text className="font-bold text-lg">{item.username}</Text>
                <Text className="text-muted-foreground">1d</Text>
              </View>
              <Button
                onPress={() => actionSheetRef.current?.show()}
                variant={"ghost"}
                size={"icon"}
              >
                <Entypo name="dots-three-horizontal" />
              </Button>
              <ActionSheet
                safeAreaInsets={insets}
                gestureEnabled
                ref={actionSheetRef}
                indicatorClassName="bg-foreground/30"
                defaultOverlayOpacity={0.7}
                containerClassName="bg-muted rounded-t-3xl px-4 pt-2 border border-border"
              >
                <View>
                  <Text>{item.username}</Text>
                  <Text>{item.username}</Text>
                  <Text>{item.username}</Text>
                  <Text>{item.username}</Text>
                  <Text>{item.username}</Text>
                  <Text>{item.username}</Text>
                </View>
              </ActionSheet>
            </View>
            <Text className="text-foreground">{item.content}</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          className="h-48"
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-2 pl-[5.2rem] pr-4"
        >
          <Image uri="https://picsum.photos/200/300" />
          <Image uri="https://picsum.photos/200/300" />
          <Image uri="https://picsum.photos/1920/1080" />
          <Image uri="https://picsum.photos/200/300" />
        </ScrollView>
      </View>
    );
  }

  return (
    <SafeContainer edges={["top"]}>
      <FlashList
        ListHeaderComponent={() => (
          <>
            <Pressable
              onPress={() => router.push("/modal")}
              className="flex-row items-center gap-3 px-4 py-3"
            >
              <Avatar className="h-14 w-14" alt="user">
                <AvatarImage
                  source={{ uri: "https://github.com/mrzachnugent.png" }}
                />
                <AvatarFallback>
                  <Text>ZN</Text>
                </AvatarFallback>
              </Avatar>
              <View className="relative h-full">
                <Text className="font-bold text-lg">mrzachnugent</Text>
                <Text className="text-muted-foreground">
                  {"What will you do?"}
                </Text>
              </View>
            </Pressable>
            <View className="bg-border h-[0.5px]" />
          </>
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="bg-border h-[1px]" />}
        ListFooterComponent={() => <View className="bg-border h-[1px]" />}
        data={data}
        renderItem={renderItem}
      />
    </SafeContainer>
  );
}
