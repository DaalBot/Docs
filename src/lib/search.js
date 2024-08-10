// place files you want to import through the `$lib` alias in this folder.
import pages from '$lib/data/pages.json';

/**
 * @param {string} input 
 * @returns {{ name: string, path: string, meta?: any }[]}
*/
function search(input) {
    return pages.filter(page => page.name.toLowerCase().includes(input.toLowerCase()));
}

export { search };