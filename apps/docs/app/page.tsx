import { LeftArrow } from "design-system-setting-icons";
import { css } from "../styled-system/css/css";
import { Button } from "design-system-setting-ui";

export default function Home() {
  return (
    <>
      <div
        className={css({
          fontSize: "var(--scale-dimension-font-size-9000)",
          color: "red.300",
          fontWeight: "bold",
          bg: "var(--static-color-static-blue-800)",
        })}
      >
        Hello 🐼
      </div>
      <LeftArrow />
      <Button>Hello 🐼</Button>
    </>
  );
}
