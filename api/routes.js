const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const query = req.query.q
        const type   = req.query.type
        let str = 'https://api.spotify.com/v1/search?q=' + query + " NOT single&type=" + type 
        console.log(str)
        superagent
            .get(str)
            .end((err, response) => {
                if (err){
                    console.log( " err ")
                    res.send("err")
                }
                else{
                    let arr = [response.body]
                    res.json(arr)
                }
            })
    })

    router.get("/api/album",(req,res) => {
        const id = req.query.id
        const type = req.query.type
        let apiCall = "https://api.spotify.com/v1/"+ type + "/" + id + "/albums?album_type=album&market=US"
        console.log(apiCall)
        
        superagent
            .get(apiCall)
            .end((err,response) => {
                if(err){
                    console.log(err)
                    res.send(err)
                } else {
                    let arr = [response.body]
                    res.json(arr)
                }
        })
    })

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}