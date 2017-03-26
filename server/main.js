// Only execuded on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
    // Great place to generate data

    // Check to see if data exists in the collection
    // See if the collection has any records
    // .find takes an empty object since we do not want to filter the find by anything
    const numberRecords = Employees.find({}).count();
    console.log(numberRecords);
    if(!numberRecords) {
        // Generate some data...
        _.times(5000, () => {
            const { name, email, phone } = helpers.createCard();

            Employees.insert({
                name,
                email,
                phone,
                avatar: image.avatar()
            });
        });
    }
});
