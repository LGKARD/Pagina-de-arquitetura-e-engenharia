import { createContext, useState, useEffect } from "react";
import { getApiData } from "../../services/apiServices";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState("br");
    const [languages, setLanguages] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getTexts = await getApiData('webtext');
                setLanguages(getTexts);
            } catch (e) {
                alert('Ocorreu um erro ao carregar os textos. Por favor, tente novamente.')
            } finally {
                setLoading(false);
            }
        }
        fetchLanguages();
    }, []);

    return (
        <AppContext.Provider value={{ language, setLanguage, languages, loading }}>
            {children}
        </AppContext.Provider>
    );
};
