const authHeader = req.headers['authorization']
const token = authHeader && authHeader.split(' ')[1]

if (token == null) return res.sendStatus(401)

jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
  if (err) {
    return res.sendStatus(401)
  }

  // TODO: Check en base que l'user est toujours existant/autorisé à utiliser la plateforme
  delete user.iat;
  delete user.exp;
  const refreshedToken = generateAccessToken(user);
  res.send({
    accessToken: refreshedToken,
  });
});