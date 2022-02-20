import { useState } from "react";
import { createContainer } from "react-tracked";


export interface OrderState {
  [key: string]: string,
  "coffee-drinking": string,
  "coffee-type": string,
  "coffee-quantity": string,
  "coffee-grind": string,
  "coffee-delivery": string
}

const useValue = () => useState<OrderState>({
  "coffee-drinking": "",
  "coffee-type": "",
  "coffee-quantity": "",
  "coffee-grind": "",
  "coffee-delivery": ""
});

export const {
  Provider,
  useTrackedState,
  useUpdate: useSetState
} = createContainer(useValue);