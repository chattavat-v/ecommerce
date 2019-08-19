class MongoDB {

    saveDB(data) {
        return new Promise ((resolve, reject) => {
            data.save((err, data) => {
                if(err) {
                    reject(err);
                }else {
                    resolve({success: {message: "Created succesfully."}});
                }
            })
        })
    }

    findDB(action) {
        return new Promise ((resolve, reject) => {
            action.find().exec((err, data) => {
                if(err){
                    reject(err);
                }else {
                    resolve(data);
                }
            })
        })
    }

    findByIdAndRemove(action, _id) {
        return new Promise ((resolve, reject) => {
            action.findByIdAndRemove(_id, (err, data) => {
                if(err){
                    reject(err);
                }else {
                    resolve(data);
                }
            })
        })
    }

    findById(action, _id) {
        return new Promise ((resolve, reject) => {
            action.findById(_id, (err, data) => {
                if(err){
                    reject(err);
                }else {
                    resolve(data);
                }
            })
        })
    }

    findByIdAndUpdate(action, _id, data) {
        return new Promise ((resolve, reject) => {
            action.findByIdAndUpdate(_id, data, (err, data) => {
                if(err) {
                    reject(err);
                }else {
                    resolve({success: {message: "Updated succesfully."}});
                }
            })

        })
    }

}

module.exports = MongoDB;