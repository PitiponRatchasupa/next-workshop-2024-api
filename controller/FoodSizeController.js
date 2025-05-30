const { PrismaClient } = require("@prisma/client");
const FoodSizeRepository = require("../repository/FoodSizeRepository");
const prisma = new PrismaClient();
module.exports = {
  create: async (req, res) => {
    try {
      const foodTypeId = req?.body?.foodTypeId;
      const name = req?.body?.name;
      const remark = req.body.remark;
      const moneyAdded = req?.body?.moneyAdded;


      if (name) {
        await FoodSizeRepository.createFoodSize(foodTypeId, name, remark, moneyAdded);
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
      const datalist = await FoodSizeRepository.getFoodSizeList();
      return res.send({ dataList: datalist });
    } catch (ex) {
      return res.status(500).send({ error: ex.message });
    }
  },

  update: async (req, res) => {
    try {
      await FoodSizeRepository.updateFoodSizeById(req.params.id, req.body.name, req.body.remark, req.body.foodTypeId, req.body.moneyAdded);
      return res.send({ msg: "update success" });
    } catch (ex) {
      return res.status(500).send({ error: ex.message });
    }
  },

  remove: async (req, res) => {
    try {
      await FoodSizeRepository.updateFoodSizeById(req.params.id);
      return res.send({ msg: "remove success" });
    } catch (ex) {
      return res.status(500).send({ error: ex.message });
    }
  },

};
