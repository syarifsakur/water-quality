import WaterQuality from '../models/ModelWaterQuality.js';

// All
export const getWaterQuality = async (req, res) => {
  try {
    const response = await WaterQuality.findAll();

    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Admin
export const createWaterQuality = async (req, res) => {
  const {
    river_name,
    pollution_index,
    water_quality_status,
    critical_parameters,
    date,
    latitude,
    longitude,
    upstream_description,
    downstream_description,
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
      upstream_description,
      downstream_description,
    });

    return res.status(200).json({ message: 'Berhasil Menambah Data Mutu Air' });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
