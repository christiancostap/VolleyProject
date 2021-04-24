import serveSettingsModel from '../models/servesSettings.js';

const register = async (req, res, next) => {
  try {
    const { classification, abbreviation, qualitySettings } = req.body;
    const inputObject = {
      classification,
      abbreviation: abbreviation.toUpperCase(),
      qualitySettings
    };
    const testIfExists = await serveSettingsModel.find({ 'abbreviation': inputObject.abbreviation });
    if (testIfExists) {
      res.status(409).send({
        message: 'Este tipo de documento já foi cadastrado anteriormente'
      });
      return;
    }
    const serveSettings = new serveSettingsModel(inputObject);
    await serveSettings.save();
    res.status(200).send(serveSettings);
  } catch (error) {
    res.status(500).send({
      message: 'Internal Server Error.',
      description: error
    });
  }
}

export { register };