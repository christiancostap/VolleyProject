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
  qualitySettings: {
    type: [Object],
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now() //corrigir data
  }
});

mongoose.model('servesSettings', serveSettingsSchema, 'servesSettings');

const serveSettingsModel = mongoose.model('servesSettings');

export default serveSettingsModel;