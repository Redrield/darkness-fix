Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});

Hooks.on('sightRefresh', layer => {
    layer.sources.forEach(entry => {
        let name = layer.sources.getName(entry);
        console.log(name + ": " + entry.data.toJSON());
    })
})