import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
      id_user: req.userId,
    });
    return res.json(file);
  }
}

export default new FileController();
