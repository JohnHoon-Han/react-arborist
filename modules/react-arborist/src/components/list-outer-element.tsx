import { forwardRef } from "react";
import { useTreeApi } from "../context";
import { treeBlur } from "../state/focus-slice";
import { Cursor } from "./cursor";

export const ListOuterElement = forwardRef(function Outer(
  props: React.HTMLProps<HTMLDivElement>,
  ref
) {
  const { children, ...rest } = props;
  const tree = useTreeApi();
  return (
    <div
      // @ts-ignore
      ref={ref}
      {...rest}
    >
      <DropContainer />
      {children}
    </div>
  );
});

const DropContainer = () => {
  const tree = useTreeApi();
  return (
    <div
      style={{
        height: tree.visibleNodes.length * tree.rowHeight,
        width: "100%",
        position: "absolute",
        left: "0",
        right: "0",
      }}
    >
      <Cursor />
    </div>
  );
};
