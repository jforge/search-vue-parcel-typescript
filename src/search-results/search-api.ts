export default {
  search: async function (term: string): Promise<Array<any>> {

    // solr endpoint
    /*    const host = 'http://voyagerdemo.com/';
        const path = 'daily/solr/v0/select';
        const fields = 'id,name:[name],thumb:[thumbURL],abstract,description'; // fields we want returned
        const api = `${host}${path}?q=${term}&sfl=${fields}&wt=json&rows=10`;
        const call = await fetch(api);
        const json = await call.json();
        return json.response.docs;
    */

    // TODO selector for apis to search on
    // see https://rapidapi.com/

    /*
        const host = 'https://api.github.com';
        const path = '/search/repositories'
        const fields = 'id,name:[name],thumb:[thumbURL],abstract,description'; // fields we want returned
        const api = `${host}${path}?q=${term}&sort=stars&order=desc&page=1&per_page=20`;
        const call = await fetch(api);
        const json = await call.json();
        return json.response.items;
    */

    const host = 'https://api.tenor.com';
    const path = '/v1/search'
    const fields = 'id,name:[name],thumb:[thumbURL],abstract,description'; // fields we want returned
    const api = `${host}${path}?q=${term}&limit=10`;
    const call = await fetch(api);
    const json = await call.json();
    return json.results;

  }
}
