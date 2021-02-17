import React from "react";
import { reject, resolve } from "q";

export function sum(a: number, b: number) {
  return a + b;
}

export function arrayChange(ayy: string[]) {
  ayy[1] = "aaa";
  return ayy;
}

export const nanFunction = (num: number) => {
  return num + 100;
}

export function getText() {
  return "started jest";
}

export function throwError() {
  throw new Error("error");
};

export async function fetchData(str: boolean) {
  return new Promise((resolve, reject) => {
    if (str === true) {
      resolve(100);
    } else {
      reject();
    }
  })
}

