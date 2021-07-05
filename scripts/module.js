Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});

Hooks.on('sightRefresh', layer => {
    for(let [name, source] of layer.sources) {
        console.log("SOURCE: " + name + " " + source);
    }
})