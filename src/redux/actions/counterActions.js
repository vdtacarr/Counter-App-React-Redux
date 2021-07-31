import { act } from "react-dom/cjs/react-dom-test-utils.production.min"
import * as actionTypes from "./actionTypes"

export const increaseCounter = () => 

({
    type:actionTypes.INCREASE_COUNTER,
    paylaod:1
})

export const decreaseCounter = () => 

({
    type:actionTypes.DECREASE_COUNTER,
    paylaod:1
})

export const increasebytwoCounter = () => 

({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    paylaod:2
})  