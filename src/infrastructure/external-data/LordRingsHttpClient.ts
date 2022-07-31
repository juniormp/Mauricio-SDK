import axios from "axios";

export class HttpClient {
    async get(endpoint: string, header?: { authorization: string }): Promise<JSON> {
        const { data } = await axios.get(
            'https://the-one-api.dev/v2/' + endpoint,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: header ? `Bearer ` + header.authorization : ``
                },
            },
        );

        return data;
    }
}