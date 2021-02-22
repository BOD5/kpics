import JWT from 'jsonwebtoken';

import models from '../index.js';
import config from '../../../config/server.js';

export default async (token) => {
  try {
    const user = JWT.verify(token, config.secret);

    const userPermissions = async (userId) => {
      const permissionsIds = await models.userPermissions.findAll({where: { userId }});
      return await permissionsIds.map(obj => {
        models.permission.findAll({
          where: { id: obj },
          attributes: ['permission']
        });
      });
    };

    const permissions = await userPermissions(user.id);

    const checkPermission = async (p) => permissions.includes(p);
    // console.log(' - permission:24 >', permission); // eslint-disable-line no-console
    // return (
    //   permissions.find(el => el === permission) === undefined ? false : true
    // );
    // };
    return ({
      user,
      permissions,
      check: checkPermission
    });
  } catch (err) {
    return (err);
  }
};