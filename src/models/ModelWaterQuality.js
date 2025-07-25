import { DataTypes } from 'sequelize';
import db from '../configs/Database.js';

const WaterQuality = db.define(
  'water_quality',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    river_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pollution_index: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    water_quality_status: {
      type: DataTypes.ENUM(
        'memenuhi bakumutu',
        'cemar ringan',
        'cemar sedang',
        'cemar berat'
      ),
      allowNull: false,
    },
    critical_parameters: {
      type: DataTypes.ENUM(
        'amonia',
        'bod',
        'cod',
        'do',
        'nitrat',
        'ph',
        'tds',
        'tss'
      ),
      allowNullL: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    upstream_description: {
      type: DataTypes.STRING,
    },
    downstream_description: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default WaterQuality;
