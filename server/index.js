const express = require('express');
const app = express();
const cors = require('cors')
const db = require('./config/mongoose')
const port = 8000;

// app.get('/', async (req, res) => {
//     try {
//         let ads = await Ad.find({}).populate('companyId')
//         res.status(200).json({
//         message: 'request sucessful',
//         data: ads
//     })
//     } catch (error) {
        
//     }
// })

// router.get('/', async (req, res) => {

//     try {
//         res.json({hello:2})
//     //     for(let ad of adsData) {
//     //         await Ad.create({
//     //         id : ad.id,
//     //         companyId : ad.companyId,
//     //         primayText: ad.primayText,
//     //         headline: ad.headline,
//     //         description: ad.description,
//     //         cta: ad.cta ,
//     //         imgUrl: ad.imgUrl
//     //     })
//     // }

//     // for (let company of companiesData) {
//     //     await Company.create({
//     //         id : company.id,
//     //         name: company.name,
//     //         url: create.url
//     //     })
//     // }
        
//     } catch (error) {
//         console.log(error);
//     }
    
// })
app.use(cors())
app.use('/',require('./routes'))
app.listen(port, function(err){
    if (err) {
        console.log(err);
    }
    console.log(`server is up and running on port:${port}`);
})