import { defineStore } from 'pinia';
import { State } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { ParserProductsState } from '../types';


export const useParserProductsStore = defineStore('products', {
    state: (): ParserProductsState => {
        return State;
    },
    getters: getters,
    actions: actions,
})