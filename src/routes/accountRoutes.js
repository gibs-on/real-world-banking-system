const express = require('express');
const router = express.Router();
const accountController = require('../services/accountService');

router.get('/', accountService.getAccounts);
router.post('/', accountService.createAccount);
router.get('/:id', accountService.getAccountById);
router.put('/:id', accountService.updateAccount);
router.delete('/:id', accountService.deleteAccount);

module.exports = router;
