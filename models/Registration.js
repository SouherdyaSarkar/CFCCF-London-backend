import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  uid: { type: String, required: true, index: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, default: '' },
  projectTitle: { type: String, required: true, trim: true },
  duration: {
    hours: { type: String, default: '00' },
    minutes: { type: String, default: '00' },
    seconds: { type: String, default: '00' },
  },
  productionDate: { type: String, default: '' },
  trailerLink: { type: String, required: true },
  fullFilmLink: { type: String, required: true },
  cast: { type: String, default: '' },
  producer: { type: String, default: '' },
  directorsByte: { type: String, default: '' },
}, { timestamps: true });

export default mongoose.model('Registration', registrationSchema);
