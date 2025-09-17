import React, { useEffect, useState } from "react";
import { Image as RNImage, ImageProps as RNImageProps } from "react-native";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

type ImageProps = {
  uri: string;
} & RNImageProps;

export function Image({ className, ...props }: ImageProps) {
  const [ratio, setRatio] = useState<number | null>(null);

  useEffect(() => {
    RNImage.getSize(
      props.uri,
      (width, height) => {
        setRatio(width / height); // compute aspect ratio
      },
      (error) => {
        console.warn("Failed to get image size", error);
        setRatio(16 / 9); // fallback
      },
    );
  }, [props.uri]);

  if (!ratio) {
    return (
      <AspectRatio
        ratio={16 / 9}
        className="rounded-lg border overflow-hidden border-border"
      >
        <RNImage
          {...props}
          source={{
            uri: props.uri,
          }}
          className={cn("w-full h-full", className)}
          resizeMode="cover"
        />
      </AspectRatio>
    );
  }

  return (
    <AspectRatio
      ratio={ratio}
      className="rounded-lg overflow-hidden border border-border"
    >
      <RNImage
        {...props}
        source={{
          uri: props.uri,
        }}
        className={cn("w-full h-full", className)}
        resizeMode="cover"
      />
    </AspectRatio>
  );
}
