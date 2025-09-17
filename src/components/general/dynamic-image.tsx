import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type DynamicImageProps = {
  uri: string;
};

export function DynamicImage({ uri }: DynamicImageProps) {
  const [ratio, setRatio] = useState<number | null>(null);

  useEffect(() => {
    Image.getSize(
      uri,
      (width, height) => {
        setRatio(width / height); // compute aspect ratio
      },
      (error) => {
        console.warn("Failed to get image size", error);
        setRatio(16 / 9); // fallback
      },
    );
  }, [uri]);

  if (!ratio) {
    return (
      <AspectRatio
        ratio={16 / 9}
        className="rounded-lg border overflow-hidden border-border"
      >
        <View className="flex-1 bg-muted" />
      </AspectRatio>
    );
  }

  return (
    <AspectRatio
      ratio={ratio}
      className="rounded-lg overflow-hidden border border-border"
    >
      <Image source={{ uri }} className="w-full h-full" resizeMode="cover" />
    </AspectRatio>
  );
}
