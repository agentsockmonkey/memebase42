"use client";

import { RecoilRoot, atom } from "recoil";
export const todoListState = atom({
  key: "TodoList",
  default: [],
});

export default function RecoidContextProvider({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}