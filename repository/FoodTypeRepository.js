const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {

  createFoodTypeBynameAndReamrk: async (name, remark) => {
    try {
      const foodType = await prisma.foodType.create({
        data: {
          name: name,
          remark: remark
        }
      });

      return foodType;
    } catch (ex) {
        return ex;
    }
  },

  getFoodTypeList: async () => {
    try {
      const dataList = await prisma.foodType.findMany({
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

  updateFoodTypeById: async (id, name, remark) => {
    try {
      const res = await prisma.foodType.update({
        data : {
          name: name,
          remark: remark
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

  removeFoodTypeById: async (id) => {
    try {
      const res = await prisma.foodType.update({
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

  deleteFoodTypeById: async (id) => {
    try {
      const res = await prisma.foodType.delete({
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
