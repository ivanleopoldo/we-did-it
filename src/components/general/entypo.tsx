import { cssInterop } from "nativewind";
import BaseEntypo from "@expo/vector-icons/Entypo";
import { cn } from "@/lib/utils";

const InteropEntypo = cssInterop(BaseEntypo, {
  className: {
    target: "style",
  },
});

type Props = Omit<React.ComponentProps<typeof BaseEntypo>, "style"> & {
  className?: string;
};

export function Entypo({ className, name, ...props }: Props) {
  return (
    <InteropEntypo
      className={cn("text-foreground", className)}
      name={name}
      {...props}
    />
  );
}
