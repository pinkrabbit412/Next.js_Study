import React from "react";

export default function TypeOfWindow() {
  const side = typeof window === "undefined" ? "server" : "client";
  return <div>{side}-side에서 보여지는 중입니다.</div>;
}