const mongoose = require('mongoose');

const videoHomepageSchema =  new mongoose.Schema({ // Definicion del esquema
    video: {
        type: String,
        required: true
    }    
});

const videoHome = new mongoose.model('video', videoHomepageSchema);
/*const vid = new videoHome({
    video: 'video.mp4'    
});*/

//vid.save();