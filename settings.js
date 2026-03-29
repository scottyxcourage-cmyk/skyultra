require('dotenv').config();
module.exports = {
    botName:            'skywalker',
    botOwner:           'Spider',
    ownerNumber:        process.env.OWNER_NUMBER || '263773367795',
    prefix:             '.',
    packname:           'skywalker',
    author:             '© sky',
    version:            '2.0.0',
    commandMode:        'public',
    storeWriteInterval: 10000,
    warnLimit:          3,
};
