import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-api31.p.rapidapi.com'

export const ResultContextProvider = ({ children }) => {

    let req_data;

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Ansh Jain Vadodara');

    const getResults = async (path, query) => {
        setLoading(true);

        if (path == '/search') {
            path = "websearch";
            req_data = {
                "text": query,
                "safesearch": "off",
                "timelimit": "",
                "region": "wt-wt",
                "max_results": 20
            }
        }

        if (path == '/images') {
            path = "imagesearch";
            req_data = {
                "text": query,
                "safesearch": "off",
                "region": "wt-wt",
                "color": "",
                "size": "",
                "type_image": "",
                "layout": "",
                "max_results": 100
            }
        }

        if (path == '/videos') {
            path = "videosearch";
            req_data = {
                "text": query,
                "safesearch": "off",
                "timelimit": "",
                "duration": "",
                "resolution": "",
                "region": "wt-wt",
                "max_results": 50
            }
        }

        if (path == '/news') {
            path = "";
            req_data = {
                "text":query,
                "region": "india",
                "max_results": 25
              }
        }


        const response = await fetch(`${baseUrl}/${path}`, {
            method: 'POST',
            headers: {
                // 'x-rapidapi-key': '1f12ca2dbbmsh9858e812993b0eap102373jsn87ad6fb63259',
                // 'x-rapidapi-key': '80b6baec3emsh7bd5969bca11864p129051jsn09ba1c2821a7',
                'x-rapidapi-key' : '98b0b1b438mshc389b7464707af3p1b3172jsn7fe712c8a009',
                'x-rapidapi-host': 'google-api31.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req_data)
        });

        const data = await response.json();

        console.log("dataaaa : ", data)

        setResults(data);
        setLoading(false);


    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }} >
            {children}
        </ResultContext.Provider>
    );
}
export const useResultContext = () => useContext(ResultContext);