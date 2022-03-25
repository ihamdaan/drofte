class ApiFeatures {

    constructor(list, query) {
        this.list = list;
        this.query = query;
    }

    searchTitle() {
        const myquery = this.query.keyword &&
        {
            title: {
                $regex: this.query.keyword,
                $options: "i" //case insensitive
            }
        }
        this.list = this.list.find({ ...myquery })
        return this
    }

}

module.exports = ApiFeatures;