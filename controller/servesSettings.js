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
    if (testIfExists.length) {
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

const getRecords = async (req, res, next) => {
  try {
    const records = await serveSettingsModel.find().select("classification abbreviation qualitySettings");
    if (!records.length) {
      res.status(404).send({
        message: 'Nenhum documento encontrado. Favor cadastrar.'
      });
      return;
    }
    res.send(records);
  } catch (error) {
    res.status(500).send({
      message: 'Erro interno. Favor contactar o desenvolvedor.',
      description: error
    });
  }
}

export { register, getRecords };