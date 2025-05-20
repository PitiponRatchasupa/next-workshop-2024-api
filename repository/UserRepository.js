const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  getUserByUsernameAndPassword: async (username, password) => {
    try {
      const user = await prisma.user.findFirst({
        select: {
          id: true,
          name: true,
          level: true,
        },
        where: {
          username: username,
          password: password,
          status: "use",
        },
      });

      return user;
    } catch (ex) {
        return ex;
    }
  },
};
