const express = require('express');
const router = express.Router();
const Company = require('../models/company')
const Ad = require('../models/ad')
const {adsData,companiesData} = require('../data/data')

router.get('/', async (req, res) => {
    try {
        let ads = await Ad.find({}).populate('company');
        res.status(200).json({
        message: 'request sucessful',
        data: ads
    })
    } catch (error) {
        
    }
});

router.get('/create', async (req, res) => {

    try {
            const ads = await Ad.find({})
            if(ads.length==0){
                for(let ad of adsData) {
                await Ad.create({
                    id : ad.id,
                    company : ad.companyId,
                    primaryText: ad.primaryText,
                    headline: ad.headline,
                    description: ad.description,
                    cta: ad.cta ,
                    imgUrl: ad.imgUrl
                })
                }   

                for (let company of companiesData) {
                    await Company.create({
                        _id : company.id,
                        name: company.name,
                        url: company.url
                        })
                }

                res.status(200).json({message:'Database populated'})
            }else {
                res.status(200).json({message:'Database already populated'})
            }
        
        
    } catch (error) {
        console.log(error);
    }
    
})


module.exports = router;
