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
                        // {
                        //     desc:
                        //     {
                        //         $regex: search[i], $options: 'i'
                        //     }
                        // },
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

    pagination(ResultsPerPage) {
        let CurrentPage = Number(this.query.page) || 1
        const skip = ResultsPerPage * (CurrentPage - 1)
        this.list = this.list.limit(ResultsPerPage).skip(skip)
        return this;
    }

}

module.exports = ApiFeatures;