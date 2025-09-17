import { cn } from "@/lib/utils";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

export default function SafeContainer({
  children,
  className,
  ...props
}: SafeAreaViewProps) {
  return (
    <SafeAreaView className={cn("flex-1 bg-background", className)} {...props}>
      {children}
    </SafeAreaView>
  );
}
