import jwt from 'jsonwebtoken';
import Admin from '../models/ModelAdmin.js';
import bcrypt from 'bcryptjs';

export const Login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Admin.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: 'Username tidak ditemukan!' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Password salah!' });
    }

    const token = jwt.sign(
      { userId: user.uuid },
      process.env.ACCESS_SECRET_TOKEN,
      { expiresIn: '24h' }
    );

    await Admin.update({ token }, { where: { uuid: user.uuid } });

    const dataForClient = {
      userId: user.uuid,
      username: user.username,
    };

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: false,
    });

    return res.status(200).json({ dataForClient, token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Terjadi kesalahan server.', error });
  }
};
