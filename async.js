function  samplePromise(){
    return Promise.resolve("Fajar");
}
async function run(){
    const name=await samplePromise();
    console.info(name);
}
run();
