Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});

Hooks.on('sightRefresh', layer => {
    console.log("DI: SOURCES " + layer.sources);
})