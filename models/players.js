import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate(name) {
      if (name === '') {
        throw new Error('Não é possível gerar nome vazio');
      }
    }
  },
  // serves: [{ type: mongoose.Types.ObjectId, ref: 'serves' }],
  servesSettings: [{ type: mongoose.Types.ObjectId, ref: 'servesSettings' }],
  active: {
    type: Boolean,
    default: true
  },
  creationDate: Date.now(), //Data UTC - tem que corrigir.
  lastModified: {
    type: Date,
    //Data UTC - tem que corrigir
  },
});

mongoose.model('players', playerSchema);

const playerModel = mongoose.model('players');

export default playerModel;
