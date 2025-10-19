import { useEffect, useState } from "react";
import axios from "axios";

export default function useEntries(type) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchData = async() => {
            try {

                setLoading(true);
                setError(null);

                const response = await axios.get("/data/sample.json");


                const allEntries = response.data.entries;



                const filtered = allEntries.filter(
                    (item) => item.programType === type && item.releaseYear >= 2010
                );


                const first20 = (filtered).slice(0, 20)

                const sorted = first20.sort((a, b) =>
                    a.title.localeCompare(b.title)
                );


                setData(sorted);

            } catch (err) {
                /*console.error("Error al cargar JSON:", err); */
                setError(err);

            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type]);

    return { data, loading, error };
}