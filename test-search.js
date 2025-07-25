import { search } from './src/lib/search.js';

async function testSearch() {
    console.log('Testing search functionality...\n');
    
    // Test search for "getting started"
    console.log('=== Searching for "getting started" ===');
    const results1 = await search('getting started');
    console.log(`Found ${results1.length} results:`);
    results1.forEach(result => {
        console.log(`- ${result.name} (${result.path}) - Score: ${result.score}`);
        if (result.meta?.description) {
            console.log(`  Description: ${result.meta.description}`);
        }
        if (result.meta?.excerpt) {
            console.log(`  Excerpt: ${result.meta.excerpt.substring(0, 100)}...`);
        }
        console.log('');
    });

    // Test search for "roles"
    console.log('\n=== Searching for "roles" ===');
    const results2 = await search('roles');
    console.log(`Found ${results2.length} results:`);
    results2.forEach(result => {
        console.log(`- ${result.name} (${result.path}) - Score: ${result.score}`);
        if (result.meta?.description) {
            console.log(`  Description: ${result.meta.description}`);
        }
        console.log('');
    });

    // Test search for "api"
    console.log('\n=== Searching for "api" ===');
    const results3 = await search('api');
    console.log(`Found ${results3.length} results:`);
    results3.forEach(result => {
        console.log(`- ${result.name} (${result.path}) - Score: ${result.score}`);
        console.log('');
    });
}

testSearch().catch(console.error);
