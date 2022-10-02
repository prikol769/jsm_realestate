import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '0752a38cedmshd822e7b0efe69c0p18bc5bjsn3b4120bfee46',
        },
    });

    return data;
}
