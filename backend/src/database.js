const mongoose  = require('mongoose')



mongoose.connect("mongodb+srv://GrupoE788:1024502097@cluster0.sotsw.mongodb.net/Cluster0?retryWrites=true&w=majority",{
    useNewUrlParser: true ,
    useUnifiedTopology: true

}).then((db)=> { console.log('database connected success')
}).catch(err => console.error(err))


