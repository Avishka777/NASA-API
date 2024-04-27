export const test = (req, res) => {
    res.json({ message: 'API is working!' });
};

//Sign Out User
export const signout = (req, res, next) => {
    try {
      res
        .clearCookie('access_token')
        .status(200)
        .json('User Has Been Signed Out');
    } catch (error) {
      next(error);
    }
  };