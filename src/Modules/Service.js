/**
 * Service class is used to handle api calls.
 */

export default class Service {
    /**
     * Fetch and get data from a given api endpoint
     *
     * @param {string} apiUrl
     * @return {Promise} resource
     */

    async fetchData(apiUrl) {
        const resource = fetch(apiUrl).then(
            async response => await response.json()
        );

        return await resource;
    }
}
