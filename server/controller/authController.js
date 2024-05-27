async function getProfile(req, res) {
    return res.json(req.user);
  }

module.exports = {getProfile}