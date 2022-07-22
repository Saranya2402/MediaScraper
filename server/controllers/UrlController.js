const db = require('../models')
const scraper = require('../scraper')

const UrlDetail = db.urldetails

const addurl = async(req,res) => {
    
    req.body.url.map((item)=>(console.log(item)))
     if(req.body.url.length==1) {
        const scrapedata = await scraper.scrape(req.body.url[0])
        scrapedata.sources?.map((imgpath)=>(
            urlDetail= UrlDetail.create({'url': req.body.url[0], 'image_path' : imgpath}) 
        )) 
     }
    else{
        req.body.url.map((async (item) => {
            const scrapedata = await scraper.scrape(item)
                scrapedata.sources?.map((imgpath)=>(
                urlDetail = UrlDetail.create({'url': item, 'image_path' : imgpath}) 
            ))           
        }))        
    }
    res.status(200).send("Url Saved successfully")   
}

const getImageSource = async(req, res) => {
    let records  = await UrlDetail.findAll({attributes:['image_path']})
    res.status(200).send(records)
}

module.exports = {addurl,getImageSource}   
