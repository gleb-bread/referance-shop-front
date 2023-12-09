import { ParserProductsType, ParserProductsFirstJSONParse, ParserProductsFilter } from "../types";
import { getCurrectData } from "../options";
import { ParserProductsState } from './state';
import { getCurrectURL } from "@/shared/helpers/helperAPI";
import axios from "axios";

export const actions = {
    async setParserProducts(context: ParserProductsState, params:ParserProductsFilter = {page: 1} as ParserProductsFilter){
        context.requestObserver.setLoading('loadingProduct', true);

        let data = getCurrectData(params);


        axios.get(getCurrectURL(`api/parser_products`),{params: data}).then(response => {
            let defaultData = getJSONPasrsingObject(response.data as unknown as string);
            context.products = defaultData;
            context.requestObserver.setLoading('loadingProduct', false);
            context.requestObserver.setError('errorProduct', false);
        }).catch(responce => {
            context.requestObserver.setLoading('loadingProduct', false);
            context.requestObserver.setError('errorProduct', false);
        })
    },

    async setParserCategories(context: ParserProductsState){
        context.requestObserver.setLoading('loadingCategory', true);

        let data = getCurrectData({});
        
        axios.get(getCurrectURL(`api/parser_products/categories`),{params: data}).then(response => {
            let categories = response.data;
            context.categories = categories;
            context.requestObserver.setLoading('loadingCategory', false);
            context.requestObserver.setError('errorCategory', false);
        }).catch(response => {
            context.requestObserver.setLoading('loadingCategory', false);
            context.requestObserver.setError('errorCategory', true);
        }) 
    },

    async setImgOnCategory(context: ParserProductsState){
        let data = getCurrectData({});

        context.requestObserver.setLoading('loadingImg', true);

        axios.get(getCurrectURL(`api/parser_products/images`),{params: data}).then(response => {
            let images = response.data;
            context.imagesForCategory = images; 

            context.requestObserver.setLoading('loadingImg', false);
            context.requestObserver.setLoading('errorImg', false);
        }).catch(responce => {
            context.requestObserver.setLoading('loadingImg', false);
            context.requestObserver.setLoading('errorImg', true);
        })
    }
}

function getJSONPasrsingObject(defaultData: string){
    
    let dataWithKeys = JSON.parse(defaultData) as ParserProductsFirstJSONParse[];
    dataWithKeys.forEach(element => {
        (<Array<keyof ParserProductsType>>Object.keys(element)).forEach((key) => {
            if(key == 'characteristics' || key == 'images' || key == 'variants'){
                if(Boolean(element[key])){
                    element[key] = JSON.parse(<string> element[key]);
                }
            }
        })
    });
    return dataWithKeys as ParserProductsType[];
}