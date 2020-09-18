module.exports = {
    schedule:{
        // interval:'1s',
        cron:'*/2 * * * * *',
        type:'worker',
        disable:true,
    },
    async task(ctx){
        console.log(11111111111);
    }
};
