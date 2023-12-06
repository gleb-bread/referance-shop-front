import { ParserProductsState, ParserProductsType, ParserProductsFirstJSONParse, ParserProductsFilter } from "../types";
import { fetchRequest } from "../primary";

export const actions = {
    //TODO разделить логические блоки кода на функции
    async setParserProducts(context: ParserProductsState, params:ParserProductsFilter = {page: 1} as ParserProductsFilter){
        context.loading = true;

        const { data } = useAsyncData('parsingProducts', async () =>{
            await $fetch(`api/parser_products`,{
                method: 'GET',
                query: params,
            });   
        }) 

        console.log(data);
        
        if(data.value){
            let defaultData = getJSONPasrsingObject(data.value as unknown as string);
            context.products = defaultData;
            context.loading = false;
            context.errorLoading = false;
        } else {
            context.loading = false;
            //context.errorLoading = true;
        }
    },

    async setParserCategories(context: ParserProductsState){
        context.loading = true;
        const data = await fetchRequest(`api/parser_products/categories`,{
            method: 'GET',
            query: {
            }
        });

        if(data.value){
            let categories = JSON.parse(<string> data.value);
            context.categories = categories;
            context.loading = false;
            context.errorLoading = false;
        } else {
            context.loading = false;
            //context.errorLoading = true;
        }
    },

    async setImgOnCategory(context: ParserProductsState){
      
            const data = await fetchRequest(`api/parser_products/images`,{
                method: 'GET',
                query: {
                }
            });

    
            if(data.value){
                let images = JSON.parse(<string> data.value);
                context.imagesForCategory = images;
                console.log(context.imagesForCategory);
            } else {
                //context.errorLoading = true;
            }

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