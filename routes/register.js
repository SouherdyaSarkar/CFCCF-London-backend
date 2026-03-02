import express from 'express';
import Registration from '../models/Registration.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      uid,
      name,
      email,
      projectTitle,
      duration,
      productionDate,
      trailerLink,
      fullFilmLink,
      cast,
      producer,
      directorsByte,
    } = req.body;

    if (!uid || !name || !projectTitle || !trailerLink || !fullFilmLink) {
      return res.status(400).json({
        success: false,
        error: 'uid, name, projectTitle, trailerLink and fullFilmLink are required.',
      });
    }

    const payload = {
      uid,
      name,
      email: email || '',
      projectTitle,
      duration: {
        hours: duration?.hours || '00',
        minutes: duration?.minutes || '00',
        seconds: duration?.seconds || '00',
      },
      productionDate: productionDate || '',
      trailerLink,
      fullFilmLink,
      cast: cast || '',
      producer: producer || '',
      directorsByte: directorsByte || '',
    };

    const newEntry = await Registration.create(payload);
    res.status(201).json({ success: true, data: newEntry });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
