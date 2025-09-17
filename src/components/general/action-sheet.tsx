import { cssInterop } from "nativewind";
import BaseActionSheet from "react-native-actions-sheet";

export const ActionSheet = cssInterop(BaseActionSheet, {
  indicatorClassName: {
    target: "indicatorStyle",
  },
  containerClassName: {
    target: "containerStyle",
  },
});
