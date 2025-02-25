import { createContext, useState, useEffect } from "react";
import { getApiData } from "../../services/apiServices";
import { use } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const savedLanguage = localStorage.getItem('language');
    const [language, setLanguage] = useState(savedLanguage ?? 'br');
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

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <AppContext.Provider value={{ language, setLanguage, languages, loading }}>
            {children}
        </AppContext.Provider>
    );
};
