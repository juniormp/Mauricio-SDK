import axios from "axios";
import {QueryHelper} from "./helpers/QueryHelper";
require('dotenv').config();

export class LordRingsHttpClient {

    async get(endpoint: string, params?: {authorization?: string, query?: QueryHelper}): Promise<{}> {
        return await axios.get(
            process.env.URL + endpoint + (params.query ? params.query.build() : ''),
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: params ? `Bearer ` + params.authorization : ``
                },
            }
        ).then(response => {
            return response.data;
        }).catch(error => {
            return Promise.reject({
                message: error.message,
                description: error.code,
            });
        });
    }


    async get2(endpoint: string, query?: QueryHelper): Promise<{}> {
        return await axios.get(
            process.env.URL + endpoint,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                   // Authorization: params ? `Bearer ` + params.authorization : ``
                },
            }
        ).then(response => {
            return response.data;
        }).catch(error => {
            return Promise.reject({
                message: error.message,
                description: error.code,
            });
        });
    }
}