const mongoose = require('mongoose');
const autoincrement=require("mongoose-auto-increment")
const Dashboard = new mongoose.Schema({
  serialNo: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  courses: {
    type: String,
    enum: ['MCA','BCA','BSC'],
    required: true
  },
  gender: { 
    type: String,
    enum: ['Male', 'Female', 'Other'], 
    required: true 
  }

});
autoincrement.initialize(mongoose.connection);
Dashboard.plugin(autoincrement.plugin, { model: 'Dashboard', field: 'serialNo' });

const DashboardModel = mongoose.model('Dashboard', userSchema);

module.exports = DashboardModel;