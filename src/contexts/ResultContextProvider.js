import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-api31.p.rapidapi.com'

export const ResultContextProvider = ({ children }) => {

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setLoading(true);

        const response = await fetch(`${baseUrl}/${type}`, {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '1f12ca2dbbmsh9858e812993b0eap102373jsn87ad6fb63259',
                'x-rapidapi-host': 'google-api31.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: "table tennis",
                safesearch: "off",
                region: "wt-wt",
                color: "",
                size: "",
                type_image: "",
                layout: "",
                max_results: 100
            })
        });

        const data = await response.json();

        console.log("dataaaa : ",data)

        setResults(data);
        setLoading(false);


    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading}} > 
            {children}
        </ResultContext.Provider>
    );
}
export const useResultContext = () => useContext(ResultContext);