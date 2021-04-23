import serveSettingsModel from '../models/servesSettings.js';

const register = async (req, res, next) => {
  res.send({
    message: 'Teste realizado com sucesso.'
  });
}

export { register };