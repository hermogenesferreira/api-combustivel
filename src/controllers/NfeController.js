import Nfe from '../models/Nfe';
const scrap = require('../services/NfeData');
//import FormatData from '../services/FormatData';
class NfeController {
  async index(req, res) {
    try {
      const nfes = await Nfe.findAll();
      return res.json(nfes);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const nfe = await Nfe.findAll({ where: { userId: id } });
      res.json(nfe);
    } catch (err) {
      return res.json(500).json({ message: 'Internal server error.' });
    }
  }
  async create(req, res) {
    try {
      const { url } = req.params;
      const scraped = await scrap.NfeData(url);
      console.log(scraped);
      await Nfe.create(scraped);
      res.status(201).json({ message: `Nfe create sucess.` });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { quant } = req.body;
      const nfe = await Nfe.findByPk(id);
      await nfe.update({ quant }, { where: { id: id } });
      res.status(200).json({ message: `Nfe update sucess.` });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Nfe.destroy({ where: { id: id } });
      return res.json({ message: `Nfe delete sucess.` });
    } catch (err) {
      return res.json(500).json({ messagem: 'Internal server error.' });
    }
  }
}

export default new NfeController();
