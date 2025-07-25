import WaterQuality from '../models/ModelWaterQuality.js';

export const getWaterQuality = async (req, res) => {
  try {
    const response = await WaterQuality.findAll();

    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createWaterQuality = async (req, res) => {
  const {
    river_name,
    pollution_index,
    water_quality_status,
    critical_parameters,
    date,
    latitude,
    longitude,
  } = req.body;

  try {
    await WaterQuality.create({
      river_name,
      pollution_index,
      water_quality_status,
      critical_parameters,
      date,
      latitude,
      longitude,
    });

    return res.status(200).json({ message: 'Berhasil Menambah Data Mutu Air' });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
