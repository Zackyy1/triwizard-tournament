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
     * Transforms an object into URL Parameter type string with encoding
     * {'a': 'b', 'c': 'd'} => ?a=b&c=d
     * @param {object} object - key value pairs to compose URL parameters from
     * @param {boolean} skipEmptyValues - if true, will not put empty (or null) values into final result
     * @param {boolean} withQuestionMark - if true, adds '?' in the beginning of result
     * @returns {string} URLParameters
     */
    convertObjectIntoURLParameters: (object, skipEmptyValues, withQuestionMark) => {
        let result = ''
        Object.keys(object).map(key => {
            if (!(skipEmptyValues && !object[key]?.toString().length)) {
                return result += `${key}=${object[key] !== null ? encodeURIComponent(object[key]) : ''}&`
            }
            return null
        })

        return `${withQuestionMark ? '?' : ''}${result.substring(0, result.length - 1)}`
    }
}

export default Functions
