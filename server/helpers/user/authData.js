import makeToken from '../../utils/auth/createToken';

const payLoad = (
  userId,
  isAdmin,
  username,
  phoneNumber,
) => ({
  userId,
  isAdmin,
  username,
  phoneNumber,
});

const authData = (data) => {
  const authdata = makeToken(
    payLoad(
      data.userId,
      data.isAdmin,
      data.username,
      data.phoneNumber,
    ),
  );
  return authdata;
};

export default authData;
