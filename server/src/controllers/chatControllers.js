import Chat from "./../models/ChatModel.js";

const accessChat = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "UserId param is not sent with request",
    });
  }

  const isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate({
      path: "latestMessage",
      populate: {
        path: "sender",
        select: "userName userPhotoUrl email",
      },
    });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    const chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user.id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).json(FullChat);
    } catch (error) {
      req.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

const fetchChat = async (req, res) => {
  sd;
};

const createGroupChat = async (req, res) => {
  sd;
};
const renameGroup = async (req, res) => {
  sd;
};
const removeFromGroup = async (req, res) => {
  sd;
};
const addToGroup = async (req, res) => {
  sd;
};
export {
  accessChat,
  fetchChat,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
};
