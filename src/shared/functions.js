import FormData from "./FormData"

const Functions = {
    composeCountryItems: () => {
        return FormData.countries.map((country) => {
            return {
                label: country.name,
                value: country.code,
            }
        })
    },

    composeIndustryItems: () => {
        return FormData.industries.map((industry) => {
            return {
                label: industry,
                value: encodeURIComponent(industry.toLowerCase()),
            }
        })
    },

    composeGeographyItems: () => {
        return FormData.operatingGeographies.map((geography) => {
            return {
                label: geography,
                value: encodeURIComponent(geography.toLowerCase()),
            }
        })
    },

    /**
     * 
     * @param {Object} object - key value pairs to compose URL parameters from
     * @param {boolean} skipEmptyValues - if true, will not put empty (or null) values into final result
     * @param {boolean} withQuestionMark - if true, adds '?' in the beginning of result
     * @returns {string} URLParameters
     */
    convertObjectIntoURLParameters: (object, skipEmptyValues, withQuestionMark) => {
        let result = ''
        Object.keys(object).map(key => {
            if (!(skipEmptyValues && !object[key]?.toString().length)) {
                result += `${key}=${object[key] !== null ? encodeURIComponent(object[key]) : ''}&`
            }
        })

        return `${withQuestionMark ? '?' : ''}${result.substring(0, result.length - 1)}`
    }
}

export default Functions