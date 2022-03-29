class ApiFeatures {

    constructor(list, query) {
        this.list = list;
        this.query = query;
    }

    search() {
        if (this.query.keyword) {
            let search = this.query.keyword.split(' ')
            for (let i = 0; i < search.length; i++) {
                this.list = this.list.find({
                    $or: [
                        {
                            title:
                            {
                                $regex: search[i], $options: 'i'
                            }
                        },
                        {
                            desc:
                            {
                                $regex: search[i], $options: 'i'
                            }
                        },
                        {
                            tags: {
                                $in: new RegExp(search[i], 'i'),
                            }
                        }
                    ]
                })
            }
        }
        return this
    }

}

module.exports = ApiFeatures;