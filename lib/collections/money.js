Money = new Mongo.Collection("money", {
    //transform: function(doc) {
    //    return new Money(doc);
    //}
});

//Money = function(doc) {
//    _.extend(this, doc);
//};

Money.prototype = {
    setAmount: function (amount) {
        return amount;
    },

    getAmount: function (amount) {
        return amount + " $";
    }

    //rename: function (newName) {
    //    Meteor.call('pet/rename', this._id, newName)
    //}
};