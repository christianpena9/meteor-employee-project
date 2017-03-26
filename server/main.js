// Only execuded on the server
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
    // Great place to generate data

    // Check to see if data exists in the collection

    // See if the collection has any records
    // .find takes an empty object since we do not want to filter the find by anything
    const = numberRecords = Employees.find({}).count();
    if(!numberRecords) {
        // Generate some data...

    }

});
