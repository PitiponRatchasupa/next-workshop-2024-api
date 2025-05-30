const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {

  createFoodSize: async (foodTypeId, name, remark, moneyAdded) => {
    try {
      const foodType = await prisma.foodSize.create({
        data: {
          foodTypeId: parseInt(foodTypeId),
          name: name,
          remark: remark,
          moneyAdded: parseInt(moneyAdded),
          status: "use"
        }
      });

      return foodType;
    } catch (ex) {
        return ex;
    }
  },

  getFoodSizeList: async () => {
    try {
      const dataList = await prisma.foodSize.findMany({
        include: {
          FoodType: true
        },
        where: {
          status: 'use'
        },
        orderBy: {
          id: 'asc'
        }
      });

      return dataList;
    } catch (ex) {
      return ex
    }
  },

  updateFoodSizeById: async (id, name, remark, foodTypeId, moneyAdded) => {
    try {
      const res = await prisma.foodSize.update({
        data : {
          name: name,
          remark: remark,
          foodTypeId: parseInt(foodTypeId),
          moneyAdded: parseInt(moneyAdded)
        },
        where : {
          id: parseInt(id)
        }
      })

      return res;
    } catch (ex) {
        return ex;
    }
  },

  removeFoodSizeById: async (id) => {
    try {
      const res = await prisma.foodSize.update({
        data : {
          status: "delete"
        },
        where : {
          id: parseInt(id)
        }
      })

      return res;
    } catch (ex) {
        return ex;
    }
  },

};
