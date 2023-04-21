const mongoose = require('mongoose');


async function connect()
{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://127.0.0.1/lab0');
       
        // await mongoose.connect('mongodb+srv://admin:Minh2709!@cluster0.m3oppb7.mongodb.net/NoONo?retryWrites=true&w=majority')
        console.log('Connect succesfully');
    }
    catch(error)
    {
        console.log('failure');
    }
    
}

module.exports = { connect };
