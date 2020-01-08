import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const list = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email'],
      include: [
        { model: File, as: 'avatar', attributes: ['id', 'path', 'url'] },
      ],
    });
    return res.json(list);
  }
}

export default new ProviderController();
