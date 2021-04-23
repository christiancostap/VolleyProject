import mongoose from 'mongoose';

const serveSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastModified: {
    type: Date,
    default: Date.now() //corrigir data
  }
})

mongoose.model('serves', serveSchema);

const serveModel = mongoose.model('serves');

export default serveModel;