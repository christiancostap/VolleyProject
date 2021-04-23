import mongoose from 'mongoose';

const serveSettingsSchema = mongoose.Schema({
  classification: {
    type: String,
    required: true
  },
  abbreviation: {
    type: String,
    required: true
  },
  speedSettings: {
    type: [Object],
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now() //corrigir data
  }
});

mongoose.model('servesSettings', serveSettingsSchema);

const serveSettingsModel = mongoose.model('servesSettings');

export default serveSettingsModel;