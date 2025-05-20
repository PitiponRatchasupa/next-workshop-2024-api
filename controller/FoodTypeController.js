const { PrismaClient } = require("@prisma/client");
const FoodTypeRepository = require("../repository/FoodTypeRepository");
const prisma = new PrismaClient();
module.exports = {
  create: async (req, res) => {
    try {
      const name = req?.body?.name;
      const remark = req.body.remark;

      if (name) {
        await FoodTypeRepository.createFoodTypeBynameAndReamrk(name, remark);
        return res.send({ msg: "create success" });
      } else {
        return res.status(500).send({ error: ex.message });
      }
    } catch (ex) {
      return res.status(500).send({ error: ex.message });
    }
  },

  list: async (req, res) => {
    try {
      const datalist = await FoodTypeRepository.getFoodTypeList();
      return res.send({ dataList: datalist });
    } catch (ex) {
      return res.status(500).send({ error: ex.message });
    }
  },

  update: async (req, res) => {
    try {
      await FoodTypeRepository.updateFoodTypeById(req.params.id, req.body.name, req.body.remark);
      return res.send({ msg: "update success" });
    } catch (ex) {
      return res.status(500).send({ error: ex.message });
    }
  },

  remove: async (req, res) => {
    try {
      await FoodTypeRepository.removeFoodTypeById(req.params.id);
      return res.send({ msg: "remove success" });
    } catch (ex) {
      return res.status(500).send({ error: ex.message });
    }
  },

  delete: async (req, res) => {
    try {
      await FoodTypeRepository.deleteFoodTypeById(req.params.id);
      return res.send({ msg: "delete success" });
    } catch (ex) {
      return res.status(500).send({ error: ex.message });
    }
  },
};
